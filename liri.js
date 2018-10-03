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

var inquirer = require('inquirer');

var request = require('request');

var spotify = require('node-spotify-api');

// var twitterNPM = require('twitter')
// var twitter = new Twitter(keys.twitter);
start();


function liriChoice() {
    var list = inquirer.prompt([
        {            
            name: "Liri",
            type: "list",
            message: "What would you like Liri to do?",
            choices: ["My-Tweets", "Spotify-This-Song", "Movie-This", "Do-What-It-Says"],
        }
    ]).then(function(answer) {
        console.log(answer);
        switch(answer) {
            case twitter:
                // twitter();
                console.log("1");
                break;
            case spotify:
                spotifyBySong();
                console.log("2");
                break;
            case movie:
                // imdb();
                console.log("3");
                break;
            case doIt:
                // doIt();
                console.log("4");
                break;
            default:
                console.log("Liri doesn't understand!")
                break;
                start();
        }
    })
}

// FUNCTION FOR TWITTER
function twitter() {
    console.log("Twitter Function");
}


// FUNCTION FOR SPOTIFY
function spotifyBySong() {

    // connecting to Spotify API held by .env file
    var spotifyAPI = new spotify(keys.spotify);
    console.log("Liri Spotify")
      
    // Take in command line entry(song name), defaults as "The Sign by Ace of Base"
    if(!songName) {
        songName = "The Sign";
    } else {}

    // Change song name from default to command line entry
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


// FUNCTION FOR IMDB- only required to do one of four liri commands.
// function imdb(){
//     console.log("IMDb Function")
}

// FUNCTION FOR DOIT- only required to do one of four liri commands.
// function doIt() {
//     console.log("Just Do It Function")
}

function start(argOne, argTwo) {
    var choice = process.argv[2];
    var choiceInput = process.argv[3];
}

start(process.argv[2], process.argv[3].slice(3).join(" "))
