const fetch = require('node-fetch');
require('dotenv').config();
const apikey = process.env.MUSIXMATCH_API_KEY;
const lyricController = {};

// create middleware function that sends a request to musixmatch
// req.params = {
//   apikey: '934cd8c8a978c83684a436034d1405ce',
//   q_lyrics: 'received from frontend' 
// }

lyricController.getTracks = (req, res, next) => {
  console.log('Made it to the server and req body is ', req.body);
  const { q_lyrics } = req.body;
  console.log('lyrics requested from client at ', q_lyrics);
  fetch(`http://api.musixmatch.com/ws/1.1/track.search?apikey=${apikey}&q_lyrics=${q_lyrics}&f_has_lyrics=true&s_track_rating=desc&page_size=5`)
    .then(data => data.json())
    .then(data => {
      // reduce the data.message.body.track_list array
      // in each reduce iteration, we want to add an object to the res.locals.queryResult array with the artist track and album data 
     res.locals.queryResult = data.message.body.track_list.reduce((acc, curr) => {
      // create an object with track name and artist name
      const { track } = curr;
      const { track_name, artist_name, album_name } = track;
      // push track name and artist name to acc
      acc.push({
        track_name, 
        artist_name,
        album_name
      });
      return acc;
     }, []);
     console.log('res.locals after extracting artist and track and album name', res.locals);
    })
    .then(() => {
      return next();
    })
    .catch( (err) => {
      console.log('Encountered error: ', err)
    })
}

module.exports = lyricController;
