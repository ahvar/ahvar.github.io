# Udacity FEND: Website Performance Optimization
Apply common optimization techniques to improve performance for an existing portfolio website. See project rubric for specific requirements. Grunt was used for building the project and site performance was measured with Chrome DevTools (with Google's Chrome Canary) and [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). 

## Getting Started
You can find Udacity's project repo [here](https://github.com/udacity/frontend-nanodegree-mobile-portfolio.git) to observe the site before optimization. The optimized site is located [here](https://github.com/ahvar/frontend-nanodegree-WPO.git) (a finished product is in the dist/ directory), and the project rubric can be found [here](https://review.udacity.com/#!/rubrics/16/view).       

### Test Portfolio Site Performance Before Optimization 
1. Download the unoptimized portfolio site from Udacity's repo (link above).
2. Install [NodeJS](https://nodejs.org/en/) 
3. Install node's simple [http server](https://www.npmjs.com/package/http-server) with this command: **npm install http-server -g**.  You can also install locally by navigating to your root directory and running: **npm install http-server**. 
4. Run the server: **http-server**
5. Download [ngrok](https://ngrok.com/) and install in the root directory. 
6. Expose server by running the command: **ngrok http 80** (80 is the default port for http. Use whatever port your server is listening on) in your root directory. Some status info should appear in the terminal window.
7. Test the site at [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) by copy/pasting the forwarding url given by ngrok into PageInsights and click the 'Analyze' button.
8. Confirm respective mobile and desktop scores of 28 and 82.

### Optimize Portfolio Site
1. Install [Grunt](http://gruntjs.com/getting-started): **npm install -g grunt -cli** and create package.json file: **grunt init** to keep track of project dependencies
2. Add as a developer dependency: **npm install --save-dev grunt**
3. Install the following plugins: 

     - [grunt-contrib-copy](http://grunt-tasks.com/grunt-contrib-copy/) 
     - [grunt-inline](https://www.npmjs.com/package/grunt-inline) 
     - [grunt-contrib-imagemin](https://www.npmjs.com/package/grunt-contrib-imagemin)      - [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)

Install dependencies with this command: **npm install grunt-contrib-copy grunt-inline grunt-contrib-imagemin grunt-contrib-htmlmin --save-dev**

4. You can read about how to use a gruntfile to configure project dependencies [here](http://gruntjs.com/sample-gruntfile). Follow the instructions to create the gruntfile.js and encapsulate your grunt configuration with the wrapper function: **module.exports = function(grunt) {  grunt.initConfig({  )} }**
5.  Use the async attribute so certain js files (i.e. analytics) are not render blocking
6.  Use the Web Font Loader to asynchronously load google fonts
7.  Move all scripts below <body> in index.html
8. Run grunt: **grunt** which will carry out the following tasks: 
  - Inline and minify CSS and JS with grunt-inline plugin
  - Minify html and images with grunt plugins
  - Copy minified and optimized files from src/ to dist/
9. After optimizations are complete, serve and expose files, click dist/ and run in Google PageSpeed Insights. Scores should be: 92 (mobile) and 93 (desktop)
  - further image optimizations were achieved with [FILEMinimizer Pictures 3.0 by balesio](http://www.balesio.com/fileminimizerpictures/eng/index.php)

### Animate at 60 fps
Here we make timeline recordings in Canary Chrome's dev tools to get a baseline of site performance prior to optimizing the source code. 

#### Optimize Scrolling 
###### Target fps of 60 for pizza.html when scrolling 
1. Use Chrome Canary to browse to "Cam's pizzeria" and _ctrl + shift + i_ to open chrome dev tools. 
2. _ctrl + e_ to begin recording, scroll along the page (ideally 2-3 sec), _ctrl + e_ again to stop recording and note a fps of less than 60.
3. The _**updatePositions()**_ function in _**views/js/main.js**_ changes the location of the pizzas during scroll events. Refactor the function per the following:
   - Both _**document.body.scrollTop/1250**_ and the _**phase**_ variable can be calculated outside of the loop
   - Place all elements in class _mover_ into a variable called items and create a second variable call length to hold the length of items
   - Use a _**forEach()**_ loop instead of a for loop to iterate through items and update the position.
4. Find other instances of querySelector() being used to access DOM in a loop and refactor these functions to prevent constant reflow/layout thrashing
#### Optimize Pizza Sizer
The _**changePizzaSizes()**_ function can be optimized so pizza size renders in under 5ms.
  - Calculate dx and newwidth variables outside of the loop so they are not accessing the DOM with each iteration
  - Create an object called pizzas to store all the pizza elements in class _**randomPizzaContainer**_
  - Use a _**forEach()**_ to iterate through the pizzas object and update the size
  - Create an array object called _**getPizzas**_ inside the changeSliderLabel function and use this to change pizza size instead of querying the DOM for each size change
  - where _**querySelector()**_ function is used to access DOM, replace with _**getElementsById()**_



