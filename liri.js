require("dotenv").config();
var keys = require("./keys.js");
//for Spotify:
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// file system for do-what-it-says function/command
var fs = require("fs");

// moments npm for concert-this function/command
var moment = require("moment");

// axios npm for concert-this and movie-this functions/commands
var axios = require("axios");

var command = process.argv[2]
var arguments = process.argv.slice(3).join(" ")
switch (command){
case 'concert-this':
 console.log('do something with bands in town');
 break;
case 'spotify-this-song':
    console.log('do something with spotify');
    break;
case 'movie-this':
    console.log('do something with omdb');
    break;
case 'do-what-it-says':
    console.log ('will go to spotify');
    break;
}

function concert(inputs) {
  var queryUrl =
    "https://rest.bandsintown.com/artists/" +
    inputs +
    "/events?app_id=codingbootcamp";

}
function findSong(song){
  spotify.search({ type: 'track', query: arguments})
   .then(function(response) {
     console.log(response);
   })
   .catch(function(err) {
     console.log(err);
   });
}
function findMovie(movie){
 var URL = 'http://www.omdbapi.com/?apikey=trilogy&'
}
function findDo (command){
  switch (action) {
    case "spotify-this-song":
      spotify(inputs);
      break;
  
    case "movie-this":
      movie(inputs);
      break;
  
    case "concert-this":
      concert(inputs);
      break;
  
    case "do-what-it-says":
      doIt(inputs);
      break;
  }
}

//Function to read the random.txt file
function doIt(inputs) {
  fs.readFile("random.txt", "utf-8", function(err, buf) {
    console.log(buf.toString());
  });
}