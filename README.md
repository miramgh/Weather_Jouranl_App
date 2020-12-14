# Weather-Journal App Project

## Overview
This project create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

To run this app fork, clone, or download this repository to your local machine. You will need to install the npm packages used in this app. Open the terminal and change to the directory location of this app. Run the following commands:

    npm install express
    npm install cors
    npm install body-parser

When those are installed run nodemon server.js in the terminal. Once the app is running visit localhost:4000 in the browser to view the app. The user can input a zip code and current feelings into the provided fields. Submitting the form will send a request to the OpenWeatherMap API and return weather information for that location.
