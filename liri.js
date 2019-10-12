var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
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
//this.findShow = function(show) {
//   var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
function findConcert(concert){
   var URL ="https://rest.bandsintown.com/artists/" + arguments + "/events?app_id=codingbootcamp"
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
}