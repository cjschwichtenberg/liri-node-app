console.log("\n----- LIRI CAN TAKE IN THE FOLLOWING 4 COMMANDS -----\n");
console.log("\n--------------------- My-Tweets ---------------------\n");
console.log("\n---------------------- Spotify ----------------------\n");
console.log("\n----------------------- Movie -----------------------\n");
console.log("\n----------------------- Do-It -----------------------\n");
console.log("\n-----------------------------------------------------\n");

const dotenv = require("dotenv").config();
console.log(dotenv);
const fs = require('fs');
const keys = require('./keys.js');
const request = require('request');
const Spotify = require('node-spotify-api');

function tweetThis(argTwo) {
    console.log("Tweet-This");
}

function myTweets(argTwo) {
    console.log("My-Tweets");
}

function spotifyBySong(argTwo) {
    
}

function choice(argOne, argTwo) {
    switch (argOne) {
        case 'twitter':
            tweetThis(argTwo);
            break;
        case 'my-tweets':
            myTweets(argTwo);
            break;
        case 'spotify':
            spotifyBySong(argTwo);
            break;
        case 'movie':
            movie(argTwo);
            break;
        case 'do-it':
            doIt(argTwo);
            break;
        default:
            console.log('LIRI DOES NOT UNDERSTAND!');
            break;
    }
}
function start(argOne, argTwo) {
    choice(argOne, argTwo);
};

start(process.argv[2], process.argv.slice(3).join(" "));
