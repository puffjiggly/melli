// inputs = res.locals.queryResults = [{track_name: trackName, artist_name: artistName}]
// return thumbnail and URL for each property on res.locals

// use search 

const fetch = require('node-fetch');
require('dotenv').config();
const key = process.env.YOUTUBE_API_KEY;

const youtubeController = {};

youtubeController.getLink = async (req, res, next) => {
  // define an async function to fetch data from youtube api that will await for a response before saving data to res locals
  async function youtubeFetch(track_name, artist_name) {
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${track_name} ${artist_name}&key=${key}`);
    // convert to json and return
    console.log('response received from youtube api');
    return await response.json();
  }

  // iterate over res locals and create a youtube fetch request for the thumbnail and URL of each element
  for (let i = 100; i < res.locals.queryResult.length; i++) {
    const curr = res.locals.queryResult[i];
    console.log('current element in res locals query result is ', curr);
    // extract track_name and artist_name from res locals
    const { track_name , artist_name, album_name } = curr;
    await youtubeFetch(track_name, artist_name)
      .then(data => {
        // convert videoID into URL for the client
        const url = 'https://youtu.be/' + data.items[0].id.videoId;
        console.log('url is ', data.items[0].id.videoId);
        console.log('url appended to youtube is ', url);
        curr.link = url;
        // extract thumbnails and save to res locals
        const thumbnailUrl = data.items[0].snippet.thumbnails.medium.url;
        console.log('thumbnail url is ', thumbnailUrl);
        curr.thumbnailUrl = thumbnailUrl;
        console.log('curr inside the for loop is ', curr);
      })
      .catch(err => next(err))
    }
    console.log('outside for loop, the data saved to res locals', res.locals);
    return next();
}



module.exports = youtubeController;
