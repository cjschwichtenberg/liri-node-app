// LIRI CAN TAKE IN THE FOLLOWING 4 COMMANDS:
// 1. my-tweets
// 2. spotify-this-song
// 3. movie-this
// 4. do-what-it-says



// Adding dependecies for Liri:

var dotenv = require("dotenv").config();
console.log(dotenv);

var fs = require('fs');

var keys = require('./keys.js');

var promptList = require('prompt-list');

var request = require('request');

var spotify = require('node-spotify-api');

// var twitterNPM = require('twitter')
// var twitter = new Twitter(keys.twitter);
// start();


// function start() {
//     var list = new promptList({
//         name: "liri",
//         message: 'What would you like to do?',
//         choices: [
//             'MY-TWEETS',
//             'SPOTIFY-THIS_SONG',
//             'MOVIE-THIS',
//             'DO WHAT IT SAYS'
//         ]
//     });
//     list.ask(function(answer) {
//         console.log(answer);
//         if (answer === 'MY-TWEETS') {
//             // twitter();
//             console.log("1");
//         }
//         else if (answer === 'SPOTIFY-THIS_SONG') {
//             spotifyBySong();
//             // console.log("2");
//         }
//         else if (answer === 'MOVIE-THIS') {
//             // imdb();
//             console.log("3");

//         }
//         else if (answer === 'DO WHAT IT SAYS') {
//             // justDoIt();
//             console.log("4");
//         }
//     });
// }

// FUNCTION FOR SPOTIFY-THIS-SONG
function spotifyBySong() {

    // connecting to mny personal Spotify API held by .env file
    var spotifyAPI = new spotify(keys.spotify);
      
    // Take in command line entry(song name), setting to default as "The Sign by Ace of Base"
    var command = process.argv[2];
    var songName = "The Sign";

    // Changes song name from default to command line entry
    if (process.argv.length > 3) {
        songName = process.argv.slice(3).join("+");
        spotify.search({ type: 'track', query: songName }, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            } else {
                output 
                    "Song Name: " + "'" + songName + "'" +
                    "Album Name: " + data.tracks.items[0].album.name +
                    "Artist Name: " + data.tracks.items[0].album.artists[0].name +
                    "URL: " + data.tracks.items[0].album.external_urls.spotify +
                    console.log(output);
            };
        });
    } 
}
spotifyBySong();
