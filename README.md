# Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## Commands:
* node liri.js movie-this <movie name here>
* node liri.js concert-this <artist/band name here>
* node liri.js spotify-this-song <song name here>

## What Each Command Should Do
* node liri.js do-what-it-says
** Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
** It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.