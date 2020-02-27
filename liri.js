require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var value = process.argv[3];

switch (action) {
  case "concert-this":
    getBands(value)
    break;
  case "spotify-this-song":
    getSongs(value)
    break;
  case "movie-this":
    getMovies(value)
    break;
  case "do-what-it-says":
    doWhatItSays()
    break;
  default:
    console.log("Choose one of the following commands: \nconcert-this <artist>, \nspotify-this-song <song name>, \nmovie-this <movie title>, \ndo-what-it-says")
    break;
}

function getBands(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
      .then(function (response) {
        console.log("Name of the venue:", response.data[0].venue.name);
        console.log("Venue location:", response.data[0].venue.city);
        var eventDate = moment(response.data[0].datetime).format('MM/DD/YYYY');
        console.log("Date of the Event:", eventDate);
      })
      .catch(function (error) {
        console.log(error);
      });
  }