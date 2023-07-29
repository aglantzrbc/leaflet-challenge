// Import personal mapbox access token from config.js
import { access_token } from "../config.js";

// Store the API endpoint as queryUrl and tectonicplatesUrl variables
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var tectonicplatesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

// Declare myMap variable outside the function scope to track if the map is already initialized
var myMap = null; // myMap is null when the page is first loaded to avoid errors if the map is already initialized

// Declare overlayMaps object to store overlay layers for the layer control
var overlayMaps = {
  "Earthquakes": null,
  "Tectonic Plates": null
}; // overlayMaps is null when the page is first loaded to avoid errors if the map is already initialized

// Function to determine marker size based on magnitude of earthquake
function markerSize(magnitude) {
  return magnitude * magnitude * 10000; // multiply by 10000 to make the markers more visible
} // end of markerSize function

// Function to determine marker color by depth of earthquake 
function chooseColor(depth) {
  if (depth <= 10) return "#00FF00";
  else if (depth <= 30) return "greenyellow";
  else if (depth <= 50) return "yellow";
  else if (depth <= 70) return "orange";
  else if (depth <= 90) return "orangered";
  else return "#FF0000";
} // end of chooseColor function

function createFeatures(earthquakeData) {
  // Define a function for each feature in the features array and bind a popup to each marker
  // Give each feature a popup that describes the place, time, magnitude, and depth of the earthquake 
  function onEachFeature(feature, layer) { 
    layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3><hr><p>Date: ${new Date(feature.properties.time)}</p><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]}</p>`);
  } // end of onEachFeature function

// Create a GeoJSON layer that contains the features array on the earthquakeData object and add it to the map
// Run the onEachFeature function once for each piece of data in the array 
var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature,

    // Point to layer used to alter markers based on magnitude and depth of earthquake
    pointToLayer: function (feature, latlng) {
      // Determine the style of markers based on properties of the earthquake
      var markers = {
        radius: markerSize(feature.properties.mag),
        fillColor: chooseColor(feature.geometry.coordinates[2]),
        fillOpacity: 0.7,
        color: "black",
        stroke: true,
        weight: 0.5,
      };
      return L.circle(latlng, markers); // return the markers to the GeoJSON layer
    },
  }); 

// If map exists and the Earthquakes layer is enabled, clear its layers and keep it enabled on refresh
if (myMap && myMap.hasLayer(overlayMaps["Earthquakes"])) {
  overlayMaps["Earthquakes"].clearLayers();
  earthquakes.addTo(myMap);
}


  // Update overlayMaps with the earthquakes layer 
  overlayMaps["Earthquakes"] = earthquakes;

  // Send our earthquakes layer to the createMap function to create the map
  createMap(earthquakes);
}

function createMap(earthquakes) {
  // Create satellite tile layers for the map background using mapbox styles API
  var satellite = L.tileLayer(
    "https://api.mapbox.com/styles/v1/{style}/tiles/{z}/{x}/{y}?access_token=" + access_token,
    {
      attribution:
        "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      style: "mapbox/satellite-v9", // to comply with mapbox terms of service
    }
  ); 

  // Create grayscale tile layers for the map background using mapbox styles API
  var grayscale = L.tileLayer(
    "https://api.mapbox.com/styles/v1/{style}/tiles/{z}/{x}/{y}?access_token=" + access_token,
    {
      attribution:
        "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      style: "mapbox/light-v11", // to comply with mapbox terms of service
    }
  );
  // Create outdoors tile layers for the map background using mapbox styles API
  var outdoors = L.tileLayer(
    "https://api.mapbox.com/styles/v1/{style}/tiles/{z}/{x}/{y}?access_token=" + access_token,
    {
      attribution:
        "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      style: "mapbox/outdoors-v12", // to comply with mapbox terms of service
    }
  );

  // Create layer for tectonic plates to be added to the map
  var tectonicPlates = new L.layerGroup();

  // d3.json() call to get the tectonic plates data from tectonicplatesUrl
  d3.json(tectonicplatesUrl).then(function (plates) {
    L.geoJSON(plates, {
      color: "orange",
      weight: 2,
    }).addTo(tectonicPlates);

    // If map exists and the Tectonic Plates layer is enabled, keep it enabled on refresh
    if (myMap && myMap.hasLayer(overlayMaps["Tectonic Plates"])) {
      tectonicPlates.addTo(myMap);
    }

    // Update overlayMaps with the tectonic plates layer 
    overlayMaps["Tectonic Plates"] = tectonicPlates;

    // Create a baseMaps object to hold the base layers for the map
    var baseMaps = {
      Satellite: satellite,
      Grayscale: grayscale,
      Outdoors: outdoors,
    };
  
    // Check if myMap is not already initialized
    if (!myMap) {
      // If map is not created yet, create it with both layers enabled
      myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 4,
        layers: [satellite, earthquakes, tectonicPlates],
      });

      // Add a legend to the map to explain the marker colors for earthquake depth
      var legend = L.control({ position: "bottomright" });
      legend.onAdd = function () {
        var div = L.DomUtil.create("div", "info legend"),
          depth = [-10, 10, 30, 50, 70, 90]; // depth intervals for legend

        // Create a header for the legend
          div.innerHTML += "<h3 style='text-align: center'>Depth</h3>";

        // Loop through the depth intervals and generate a label with a colored square for each interval in the legend
        for (var i = 0; i < depth.length; i++) {
          div.innerHTML +=
            '<i style="background:' +
            chooseColor(depth[i] + 1) +
            '"></i> ' +
            depth[i] +
            (depth[i + 1] ? "&ndash;" + depth[i + 1] + "<br>" : "+");
        }
        return div;
      };

      // Add the legend to the map
      legend.addTo(myMap);

// Create the initial layer control
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false,
}).addTo(myMap);

// Add the following code after the layer control creation
let layerControlContainer = document.getElementsByClassName('leaflet-control-layers')[0];
layerControlContainer.id = 'layerControl';

} else {
  // Before creating a new layer control, remove the old one from the DOM
  document.getElementById('layerControl').remove();

  // If the map is already initialized, remove existing layers and add the new earthquakes layer to it
  if (myMap.hasLayer(overlayMaps["Earthquakes"])) {
      myMap.removeLayer(overlayMaps["Earthquakes"]);
  }
  if (myMap.hasLayer(overlayMaps["Tectonic Plates"])) {
      myMap.removeLayer(overlayMaps["Tectonic Plates"]);
  }

  // Update the earthquakes and tectonic plates layers in the overlayMaps object 
  overlayMaps["Earthquakes"] = earthquakes;
  overlayMaps["Tectonic Plates"] = tectonicPlates;

  // Add the new earthquakes and tectonic plates to the map 
  earthquakes.addTo(myMap);
  tectonicPlates.addTo(myMap);

  // Create a new layer control
  L.control.layers(baseMaps, overlayMaps, {
      collapsed: false,
  }).addTo(myMap);

  // Assign an id to the new layer control's DOM element
  let layerControlContainer = document.getElementsByClassName('leaflet-control-layers')[0];
  layerControlContainer.id = 'layerControl';
}
  });
}

// Function to fetch data from the API
function fetchData(retries = 3, backoff = 500) { // default values: 3 retries, 500 ms backoff
  d3.json(queryUrl)
    .then(function (data) {
      createFeatures(data.features);
    })
    .catch(function (error) {
      console.error('Error:', error);
      
      if (retries > 0) {
        // If fetch failed and we have retries left, wait for the backoff period and then retry
        setTimeout(() => fetchData(retries - 1, backoff * 2), backoff);
      } else {
        // If no retries left, alert user
        alert('Failed to fetch earthquake data after several attempts. Please refresh your browser or try again later.');
      }
    }); // end of d3.json() call
}

// Fetch initial data
fetchData();

// Update data every 5 minutes
setInterval(fetchData, 300000); // 5 minutes = 300000 ms