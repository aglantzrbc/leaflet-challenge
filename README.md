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

The author selected [JSON](https://en.wikipedia.org/wiki/JSON) data representing a week of earthquake activity from the [USGS GeoJSON](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page, which updates every five minutes. (NB - [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) is a special JSON format for representing geographical features.) Tectonic data was sourced through tbe [GitHub](https://github.com/) repository [_tectonicplates_]](https://github.com/fraxen/tectonicplates) maintained by [nordpil](https://nordpil.com/) for research. The [D3](https://d3js.org/) and [Leaflet](https://leafletjs.com/index.html) libraries were accessed in [HTML](https://en.wikipedia.org/wiki/HTML5) and made available in [JavaScript](https://codingbeautydev.com/blog/es13-javascript-features/). The author subscribed to the [Mapbox](https://www.mapbox.com/about/maps/) API and used an individually-assigned access token to make different tiles available in JavaScript, imcluding _Satellite_, _Grayscale_, and _Outdoors_. A separate [CSS](https://en.wikipedia.org/wiki/CSS) file was also pulled in through the HTML code for more map styling.

**D3's** _d3.json()_ function fetched data from the source URLs and passed it to other functions to create the map features; D3 also regularly fetched updated data as the JSON sources updated. **Leaflet** performed the "heavy lifting" in this project, and was used to create the map and plot the data fetched by D3. Employing functions including _createFeatures()_, _createMap()_, and _bindPopup()_, it constructed map layers, added the earthquake and tectonic plate data as variably-sized and -colored markers on the map, associated mouse-over tooltips with the markers, handled the map controls (like the zoom and layer controls), and added a legend to the map. **Mapbox** provided the styled map layers. The result was an interactive map whose functionality is illustrated in [Vimeo](https://vimeo.com/) [mp4](https://en.wikipedia.org/wiki/MP4_file_format) **Video 1**, below.

https://github.com/aglantzrbc/leaflet-challenge/assets/127694342/36edf0da-745b-46cb-8a29-dece0e09baa3

**Video 1** | *Video showing interactive map functionality*

### 2. INSTALLATION

- The [GitHub](https://github.com/aglantzrbc/leaflet-challenge) repository (version 2.9.1) containing all project files is publicly accessible.
- Both the constituent files listed above are in the the same location. **If this relative placement is altered, the code won't run.**
- The assignment details and starter code are proprietary and located on the [Rutgers University](https://www.rutgers.edu/) [(edX)](https://www.edx.org/) Bootcamp Spot [Module 14 Belly Button Challenge](https://courses.bootcampspot.com/courses/3337/assignments/54006?module_item_id=961579) webpage.
- The latest versions of the coding languages are [HTML5](https://en.wikipedia.org/wiki/HTML5) and [JavaScript ES13](https://codingbeautydev.com/blog/es13-javascript-features/).
- Coding was guided by the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) ("don't repeat yourself") principle.

### 3. CONTRIBUTING

- [Glantz, Adam](https://www.linkedin.com/in/adam-glantz/): Annapolis, Maryland, USA, July 2023, email: adamglantz@yahoo.com

### 4. ACKNOWLEDGEMENTS

In addition to using the resources listed above, the author acquired query responses in OpenAI's [ChatGPT](https://chat.openai.com/) 3.5 and 4 platforms, and the [VSCode GitHub Copilot](https://github.com/features/copilot) app V1.

The author also consulted code and results from similar projects publicly accessible in [GitHub](https://github.com/) repositories and recoverable through [Google](https://www.google.com/) and comparable search engines:

- [Larson, Mychele](https://www.linkedin.com/in/mychele-larson/): Austin, Texas, USA, March 2023. [Belly-Button-Challenge](https://github.com/mychele-larson/Belly-Button-Challenge)
- [Tallant, Jeremy](https://www.linkedin.com/in/jeremy-tallant-717075220/): San Antonio, Texas, USA, February 2023. [belly-button-challenge](https://github.com/JeremyTallant/belly-button-challenge)
- [Wang, Yeyan](https://www.linkedin.com/in/yeyan-wang/): Seattle, Washington, USA, March 2023. [belly-button-challenge](https://github.com/yeyanwang/belly-button-challenge)
- [Zhaksylyk, Madina](https://www.linkedin.com/in/madinazh/): Minneapolis, Minnesota, USA, January 2023. [Belly-Button-Challenge](https://github.com/madinalikes/Belly-Button-Challenge)

The experimental data for this assignment ultimately derives from this study:

- Jiri Hulcr,Andrew M. Latimer,Jessica B. Henley,Nina R. Rountree,Noah Fierer,Andrea Lucky,Margaret D. Lowman,Robert R. Dunn: _PLOS One_ 7(11) e47712, San Francisco, California, USA, November 2012. [A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0047712)


### 5. LICENSES

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)
