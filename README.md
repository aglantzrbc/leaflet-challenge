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

This [project](https://courses.bootcampspot.com/courses/3337/assignments/54006?module_item_id=961579) is designed to assess student skills using [JavaScript](https://www.javascript.com/) alongside other web language to construct an interactive dashboard. The project is based upon a study of the microbes that colonize the human navel. The original study materials are available [here](https://robdunnlab.com/projects/belly-button-biodiversity/) and [here](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0047712), and the citation is at the end of this README file. Using a sample of individuals' navel microbes, the study's dataset reveals that a small handful of microbial species (also called _operational taxonomic units_, or OTUs) were present in more than 70% of people, while the rest were relatively rare. *Coding was guided by the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) ("don't repeat yourself") principle*.

The [HTML](https://en.wikipedia.org/wiki/HTML) file provides the framework for the dashboard and the JavaScript file provides interactivity. The legend of files is as follows:

**HTML FILE:** index.html

**JAVASCRIPT FILE:** app.js

The HTML file creates a **dropdown menu** of OTU IDs. Using the [d3](https://d3js.org/) library accessed in the HTML, the JavaScript file gives the dropdown menu access to the json data in the source file: _https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json_. Every time a sample individual is selected by number via the dropdown menu, metadata associated with it populates a **box of demographic information key pairs** right underneath the menu. A CSS stylesheet made accessible through the HTML code provided aesthetic elements for these items and the others listed below. See **Figure 1**.

![image](https://github.com/aglantzrbc/belly-button-challenge/assets/127694342/6c68dcb4-2eba-42dc-ba83-8cc626140436)

**Figure 1** | *HTML dropdown menu and JavaScript metadata box of demographic information key pairs*

Calling the [Plotly](https://plotly.com/javascript/) library, which is built on top of the d3 library and also made available through the HTML code, a **bar chart** (**Figure 2**) and a **bubble chart** (**Figure 3**) were constructed, each showing the top ten microbes by volume. Mousing over each bar and each bubble gives access to the OTU information associated with each sample individual's microbes.

![image](https://github.com/aglantzrbc/belly-button-challenge/assets/127694342/f5f923ee-2e60-494c-8d8c-451bd2bb3e13)

**Figure 2** | *Bar chart of each sample individual's top ten microbes by volume*

![image](https://github.com/aglantzrbc/belly-button-challenge/assets/127694342/a40bdaa0-c452-4f2c-a446-055f6b70a7af)

**Figure 3** | *Bubble chart of each sample individual's top ten microbes by volume*

As an optional visual aid, a **gauge** was created with a red pointer indicating the binned navel washing frequency from the metadata of the sample. This is illustrated in **Figure 4**.

![image](https://github.com/aglantzrbc/belly-button-challenge/assets/127694342/a25f4b02-a8ed-4cae-9ccf-d5f6ca33278d)

**Figure 4** | *Gauge of binned navel washing frequency from each sample individual's metadata*

In addition to being able to scroll over the bars and bubbles to get microbe data, the dashboard is interactive in the sense that whenever the user selects a new sample individual's number from the dropdown menu, the entire dashboard updates with that person's information. See **Figure 5** for some of the JavaScript code that makes this possible.

![image](https://github.com/aglantzrbc/belly-button-challenge/assets/127694342/ba96056f-4972-4e69-bb6a-46697148047b)

**Figure 5** | *Portion of JavaScript code that updates all elements of the dashboard whenever a new individual's number is selected in the dropdown menu*

### 2. INSTALLATION

- The [GitHub](https://github.com/aglantzrbc/belly-button-challenge) repository (version 2.9.1) containing all project files is publicly accessible.
- Both the constituent files listed above are in the the same location. **If this relative placement is altered, the code won't run.**
- The assignment details and starter code are proprietary and located on the [Rutgers University](https://www.rutgers.edu/) [(edX)](https://www.edx.org/) Bootcamp Spot [Module 14 Belly Button Challenge](https://courses.bootcampspot.com/courses/3337/assignments/54006?module_item_id=961579) webpage.
- The latest versions of the coding languages are [HTML5](https://en.wikipedia.org/wiki/HTML5) and [JavaScript ES13](https://codingbeautydev.com/blog/es13-javascript-features/).

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
