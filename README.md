# leaflet-challenge
Glantz Adam Bootcamp RUT-VIRT-DATA-PT-04-2023-U-LOLC-MWTH - Module 15

# Leaflet Challenge

## TABLE OF CONTENTS

1. Project Description
2. Installation
3. Contributing
4. Acknowledgements
5. Licenses

### 1. PROJECT DESCRIPTION

The [United States Geological Survey](https://www.usgs.gov/), or USGS for short, is a government agency located in Reston, Virginia, USA, that is responsible for providing scientific data about natural hazards, the health of ecosystems and the environment, and the impacts of climate and land-use change. Its scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. 

In this [project](https://courses.bootcampspot.com/courses/3337/assignments/54007?module_item_id=961640), the author has supposedly been tasked with developing a way to visualize USGS data that will allow the agency to better educate the public and other government organizations (and hopefully secure more funding) on issues facing the planet. **The assignment calls for two separate parts of the task, first creating an interactive earthquake visualization and then expanding upon it with tectonic activity data, but the author combined them for the sake of efficiency.**

The author selected [JSON](https://en.wikipedia.org/wiki/JSON) data representing a week of earthquake activity from the [USGS GeoJSON](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page, which updates every five minutes. (NB - [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) is a special JSON format for representing geographical features.) Tectonic data was sourced through tbe [GitHub](https://github.com/) repository [_tectonicplates_](https://github.com/fraxen/tectonicplates) maintained by [Nordpil](https://nordpil.com/) for research. The [D3](https://d3js.org/) and [Leaflet](https://leafletjs.com/index.html) libraries were accessed in [HTML](https://en.wikipedia.org/wiki/HTML5) and made available in [JavaScript](https://en.wikipedia.org/wiki/JavaScript). The author subscribed to the [Mapbox](https://www.mapbox.com/about/maps/) API and used an individually-assigned access token to make different tiles available in JavaScript, including _Satellite_, _Grayscale_, and _Outdoors_. A separate [CSS](https://en.wikipedia.org/wiki/CSS) file was also pulled in through the HTML code for more map styling.

**D3's** _d3.json()_ function fetched data from the source URLs and passed it to other functions to create the map features; D3 also regularly fetched updated data as the JSON sources updated. **Leaflet** performed the "heavy lifting" in this project, and was used to create the map and plot the data fetched by D3. Employing functions including _createFeatures()_, _createMap()_, and _bindPopup()_, it constructed map layers, added the earthquake and tectonic plate data as variably-sized and -colored markers on the map, associated mouse-over tooltips with the markers, handled the map controls (like the zoom and layer controls), and added a legend to the map. **Mapbox** provided the styled map layers. The result was an interactive map whose functionality is illustrated in [Vimeo](https://vimeo.com/) [mp4](https://en.wikipedia.org/wiki/MP4_file_format) **Video 1**, below.

https://github.com/aglantzrbc/leaflet-challenge/assets/127694342/36edf0da-745b-46cb-8a29-dece0e09baa3

**Video 1** | *Video showing interactive map functionality*

### 2. INSTALLATION

- The [GitHub](https://github.com/aglantzrbc/leaflet-challenge) repository (version 2.9.1) containing all project files is publicly accessible.
- **Constituent program files and their locations:**
  -  _HTML:_ **index.html** -- located at root level (run this file)
  -  _CSS:_ **style.css** -- located in the _css_ subdirectory one level below the root level
  -  _JAVASCRIPT_ (Mapbox API access token): **config.js** -- located at root level
  -  _JAVASCRIPT_ (main JavaScript file): **logic.js** -- located in the _Leaflet-Part-1_2_ subdirectory one level below the root level
- **If the relative placement of files, above, is altered, the code won't run.**
- The program relies upon regular updates from the two source URLs at periodic intervals. At times, imperfections or interruptions in the connection may cause a reduction in functionality, such as the inability to toggle layers. **When this happens, it is recommended that the user refresh their browser.** _Please note that alerts in the platform console may occur, but do not necessarily mean function is impaired._
  - Another way to deal with resource access issues is to spin up a local server using [cross-origin resource sharing (CORS)](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), such as through the [Git](https://git-scm.com/) command "python -m http.server", and run the code through a local port, ideally via a private or incognito browser window or tab. 
- The program's Mapbox functionality is provided by an API access token individually supplied to the author. The terms of use may change over time or the token's utility may expire, causing the program to no longer function as intended. **If this happens, it is recommended that the user obtain their own access token from [Mapbox](https://www.mapbox.com/about/maps/) and update the _config.js_ file.** _Please see the bottom of this README document for access to terms of use for the Mapbox API and its major associated functionality source._
- The assignment details and starter code are proprietary and located on the [Rutgers University](https://www.rutgers.edu/) [(edX)](https://www.edx.org/) Bootcamp Spot [Module 15 Leaflet Challenge](https://courses.bootcampspot.com/courses/3337/assignments/54007?module_item_id=961640) webpage.
- The latest versions of the coding languages are [CSS3](https://en.wikipedia.org/wiki/CSS), [HTML5](https://en.wikipedia.org/wiki/HTML5), and [JavaScript ES13](https://en.wikipedia.org/wiki/JavaScript).
- This project was created on a [PC](https://en.wikipedia.org/wiki/Personal_computer) using [Google Chrome](https://www.google.com/chrome/) for [Windows](https://www.microsoft.com/en-us/windows) version 115.0.5790.102 and its associated [Google DevTools](https://developer.chrome.com/docs/devtools/) extension. **If the program doesn't function, it is recommended that the user attempt running it on this platform and browser.**
- Coding was guided by the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) ("don't repeat yourself") principle.

### 3. CONTRIBUTING

- [Glantz, Adam](https://www.linkedin.com/in/adam-glantz/): Annapolis, Maryland, USA, July 2023, email: adamglantz@yahoo.com

### 4. ACKNOWLEDGEMENTS

In addition to using the resources listed above, the author acquired query responses in OpenAI's [ChatGPT](https://chat.openai.com/) 3.5 and 4 platforms, and the [VSCode GitHub Copilot](https://github.com/features/copilot) app V1.

The author also consulted code and results from similar projects publicly accessible in [GitHub](https://github.com/) repositories and recoverable through [Google](https://www.google.com/) and comparable search engines:

- [Cooper, Tanisha](https://www.linkedin.com/in/tanisha-cooper-5b3743197/): Locust Grove, Georgia, USA, July 2022. [leaflet-challenge](https://github.com/TanishaCooper/leaflet-challenge)
- [Janer, Jordan](https://www.linkedin.com/in/jordan-janer/): Los Angeles, California, USA, February 2022. [leaflet-challenge](https://github.com/JordanJaner/leaflet-challenge)
- [Tallant, Jeremy](https://www.linkedin.com/in/jeremy-tallant-717075220/): San Antonio, Texas, USA, February 2023. [leaflet-challenge](https://github.com/JeremyTallant/leaflet-challenge)
- [Zhu, Jiuhe (Rosa)](https://www.linkedin.com/in/jiuhe-zhu/): Chicago, Illinois, USA, October 2020. [leaflet-challenge](https://github.com/Jiuhe2020/leaflet-challenge)

The full citations for the JSON data used in this project are as follows:

- [Ahlenius, Hugo](https://www.linkedin.com/in/hugoahlenius/), [Nordpil](https://nordpil.com/): Stockholm, Sweden, October 2014. [tectonicplates](https://github.com/fraxen/tectonicplates)
- [United States Geological Survey](https://www.usgs.gov/), Earthquake Hazards Program: Reston, Virgina, USA. [GeoJSON Summary Format](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)


### 5. LICENSES

- **Use of this program assumes the user is in compliance with the terms of service for the [Mapbox](https://www.mapbox.com/legal/tos) API and for the API Mapbox uses as a source, [OpenStreetMap](http://www.openstreetmap.org/copyright).**
- Otherwise this program is allowed for free use via the [Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) license.
