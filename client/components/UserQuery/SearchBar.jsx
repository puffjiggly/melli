import React, { useState, useRef } from 'react';
//created react hooks but these seem to be pointless at this point
const SearchBar = () => {
const [data, setData ] = useState(null);
const [print, setPrint] = useState(false)

const getData = (event) =>{
  setData(event.target.value)
  console.log(event.target.value)
//   req.body.q_lyrics = event.traget.value;
}
//create a var using useRef to reference the input feild
const lyricForm = useRef(null);
//create click handler to catch each input in the search bar
const handleClickEvent = () => {
//create lyric input and reference document. get elment by id and reference search bar to pull info
const lyricsInput = document.getElementById('searchbar');
//use fetch post request to send lyrics to the backend for API search
fetch('/lyrics', {
  method:'POST', // backend dev team requests post request so they can have access to the req body
  mode: 'no-cors', 
  // cover headers for content type
  headers: {
    // experiment
    "Content-type": "application/x-www-form-urlencoded",
    },
  //put onto body after json strigfy under q_lyrics and value lyricsInput.value
  body: JSON.stringify({q_lyrics: lyricsInput.value})
})
//console.log to see results, sending body to back end
  .then(response => response.json())
  .then(data => console.log('response from server is ', data));
} 

return(
  <div>
    <form ref={lyricForm}>
      <input id='searchbar' type='text' label={'lyrics'} lyrics={'lyrics'} placeholder='Enter song lyrics here!'/>
    </form>
    <button onClick={handleClickEvent}>Locate Song</button>
  </div>
 )
}

export default SearchBar;