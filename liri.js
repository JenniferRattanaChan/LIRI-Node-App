require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var value = process.argv[3];
var defaultMovie = "Mr. Nobody";

switch (action) {
  case "concert-this":
    getBands()
    break;
  case "spotify-this-song":
    getSongs()
    break;
  case "movie-this":
    if (value == "") {
      value = defaultMovie;
    }
    getMovies()
    break;
  case "do-what-it-says":
    doWhatItSays()
    break;
  default:
    console.log("Choose one of the following commands: \nconcert-this <artist>, \nspotify-this-song <song name>, \nmovie-this <movie title>, \ndo-what-it-says")
    break;
}