// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express    = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// Start up an instance of app
const app        = express();
// Cors for cross origin allowance
app.use(cors());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Initialize the main project folder
app.use(express.static('website'));

// SETTING OUR RESTFUL ROUTES

// Setting the post route
app.post('/data',postData);

function postData (req, res){
  
  projectData.temp = req.body.date;
  projectData.date = req.body.temp;
  projectData.content = req.body.content;
  

    res.status(200).json({
      status:'success',
      projectData
    })
}
// Setting the get route
app.get('/all',getData);
function getData (req, res){
    res.send(projectData)
    projectData={}
}


// Setup Server
const port = 4000;
app.listen(port, () =>{
  console.log(`running on localhost: ${port}`);
});