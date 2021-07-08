const fetch = require('node-fetch');
const apikey = MUSIXMATCH_API_KEY;
const lyricController = {};

// create middleware function that sends a request to musixmatch
// req.params = {
//   apikey: '934cd8c8a978c83684a436034d1405ce',
//   q_lyrics: 'received from frontend' 
// }

lyricController.getTracks = (req, res, next) => {
  const { q_lyrics } = req.body;
  fetch(`http://api.musixmatch.com/ws/1.1/track.search?apikey=${apikey}&q_lyrics=${q_lyrics}&f_has_lyrics=true&s_track_rating=desc&page_size=5`)
    .then(data => data.json())
    .then(data => {
      // reduce the data.message.body.track_list array
      // initial = res.locals.queryResult
      // in each reduce iteration, we want to create a property on res.locals.queryResult 
      // add a property to the res.locals object with the key of query Resul and initizlie to an empty array to allow for reduce
     res.locals.queryResult = data.message.body.track_list.reduce((acc, curr) => {
      // create an object with track name and artist name
      // console log temp Curr in each loop
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
    })
    .then(() => {
      return next();
    })
    .catch( (err) => {
      console.log('Encountered error: ', err)
    })
}

module.exports = lyricController;
