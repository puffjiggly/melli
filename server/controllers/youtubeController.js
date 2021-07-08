// inputs = res.locals.queryResults = [{track_name: trackName, artist_name: artistName}]
// return thumbnail and URL for each property on res.locals

// use search 

const fetch = require('node-fetch');
const key = YOUTUBE_API_KEY;

const youtubeController = {};

youtubeController.getLink = (req, res, next) => {
  // iterate over res locals
  res.locals.queryResult.forEach((curr) => {
    console.log('current element in res locals query result is ', curr);
    // extract track_name and artist_name from res locals
    const { track_name , artist_name } = curr;
    // console.log(`${track_name artist_name}`);
      // for each element, create a youtube fetch request for the thumbnail and URL
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${track_name} ${artist_name}&key=${key}`)
      .then(data => data.json())
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
      })
      .then(() => {
        return next();
      })
      .catch((err) => {
        return next(err);
      })
    })
}



module.exports = youtubeController;
