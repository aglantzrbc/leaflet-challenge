// Import the access token from the config.js file
import { access_token } from "../config.js";

// URL to fetch earthquake data
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// URL to fetch tectonic plate data
var tectonicplatesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

// Variables to store the map and overlay layers
var myMap = null;
var overlayMaps = {
  "Earthquakes": null,
  "Tectonic Plates": null
};

// Function to calculate the marker size based on magnitude
function markerSize(magnitude) {
  return magnitude * magnitude * 10000;
}

// Function to choose color based on depth
function chooseColor(depth) {
  if (depth <= 10) return "#00FF00";
  else if (depth <= 30) return "greenyellow";
  else if (depth <= 50) return "yellow";
  else if (depth <= 70) return "orange";
  else if (depth <= 90) return "orangered";
  else return "#FF0000";
}

// Function to create earthquake features and add them to the map
async function createFeatures(earthquakeData) {
  try {
    // Function to bind a popup to each earthquake feature
    function onEachFeature(feature, layer) {
      // Bind a popup with information to each earthquake feature
      layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3><hr><p>Date: ${new Date(feature.properties.time)}</p><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]}</p>`);
      // You can add more behavior here if needed, but don't return anything.
    }

    // Create the earthquake layer with custom marker styling and popups
    var earthquakes = L.geoJSON(earthquakeData, {
      onEachFeature: onEachFeature,
      pointToLayer: function (feature, latlng) {
        // Customize the marker properties based on earthquake magnitude and depth
        var markers = {
          radius: markerSize(feature.properties.mag),
          fillColor: chooseColor(feature.geometry.coordinates[2]),
          fillOpacity: 0.7,
          color: "black",
          stroke: true,
          weight: 0.5,
        };
        return L.circle(latlng, markers);
      },
    });

    // Remove the previous earthquakes layer from the map
    if (myMap && myMap.hasLayer(overlayMaps["Earthquakes"])) {
      myMap.removeLayer(overlayMaps["Earthquakes"]);
    }

    // Update the earthquakes overlay with the new data
    overlayMaps["Earthquakes"] = earthquakes;
    createMap(earthquakes); // Update the map with the new earthquakes layer
  } catch (error) {
    console.error("Error creating earthquake features:", error.message);
  }
}

// Function to create the map and add earthquake and tectonic plates layers
async function createMap(earthquakes) {
  try {
    // Create the different tile layers using Mapbox API
    var satellite = L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=" + access_token,
      {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        id: "mapbox/satellite-v9",
      }
    );

    var grayscale = L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=" + access_token,
      {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        id: "mapbox/light-v11",
      }
    );

    var outdoors = L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=" + access_token,
      {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        id: "mapbox/outdoors-v12",
      }
    );

    // Variable to store the tectonic plates layer
    var tectonicPlates = new L.layerGroup();

    // Fetch tectonic plate data and create the tectonic plates layer
    const plates = await fetchTectonicPlates();
    tectonicPlates = L.geoJSON(plates, {
      style: {
        color: "orange",
        weight: 2,
      },
    });
    overlayMaps["Tectonic Plates"] = tectonicPlates;

    // Base maps for layer control
    var baseMaps = {
      Satellite: satellite,
      Grayscale: grayscale,
      Outdoors: outdoors,
    };

    if (!myMap) {
      // Create the map for the first time
      myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 4,
        layers: [satellite, earthquakes],
      });

      // Add the layer control and legend
      L.control.layers(baseMaps, overlayMaps, {
        collapsed: false,
      }).addTo(myMap);

      // Create and add the legend to the map
      var legend = L.control({ position: "bottomright" });
      legend.onAdd = function () {
        var div = L.DomUtil.create("div", "info legend"),
          depth = [-10, 10, 30, 50, 70, 90];

        div.innerHTML += "<h3 style='text-align: center'>Depth</h3>";

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
      legend.addTo(myMap);
    } else {
      // Clear the map and re-add the updated layers
      myMap.eachLayer(function (layer) {
        myMap.removeLayer(layer);
      });

      // Re-add the base layers
      if (satellite) {
        satellite.addTo(myMap);
      }

      // Re-add the earthquake and tectonic plate layers based on the toggle box state
      if (overlayMaps["Earthquakes"] && document.getElementById("earthquakeToggle")?.checked) {
        myMap.addLayer(earthquakes);
      }

      // Check if the checkbox exists before accessing its checked property
      var plateToggleCheckbox = document.getElementById("plateToggle");
      if (overlayMaps["Tectonic Plates"] && plateToggleCheckbox && plateToggleCheckbox.checked) {
        myMap.addLayer(tectonicPlates);
      }
    }
  } catch (error) {
    // Handle errors when fetching tectonic plate data or creating the map
    console.error("Error:", error.message);
  }
}

// Function to fetch tectonic plate data
async function fetchTectonicPlates() {
  try {
    const response = await fetch(tectonicplatesUrl);
    
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors when fetching tectonic plate data
    console.error("Error fetching tectonic plate data:", error.message);
    throw error; // Re-throw the error to be caught by the calling function
  }
}

// Function to fetch earthquake data
async function fetchData() {
  try {
    const response = await fetch(queryUrl);
    
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    
    const data = await response.json();
    createFeatures(data.features);
  } catch (error) {
    // Handle errors when fetching earthquake data
    console.error("Error fetching earthquake data: ", error);
    console.error("Please refresh the browser. Thank you.");
  }
}

// Add a listener for the load event of the window object
window.addEventListener("load", function () {
  fetchData();
  setInterval(fetchData, 300000); // 5 minutes = 300000 milliseconds
});