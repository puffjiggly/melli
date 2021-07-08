import React, { useState, useEffect } from 'react';
import SearchBar from 'SearchBar';

// where do I place the SearchBar info?
// (how do I get the files into the computer ?)
// needs to come from handleClick results of SearchBar file --> data variable --> ALSO: in console listed as queryResult

export const SongResults = () => {
  // initial state dyring 'tip of the tongue...'
  // will update to topFive --> initial state string is in brackets --> will update to array
  const data = { queryResult: [] };
  const [songs, updateSongs] = useState(data);

  useEffect(() => {
    // update the top five songs
    for (let i = 0; i < updateSongs.length; i++) {

    }
  });



 
  // handleClick is a common event trigger, but this fires as a result of change in user query
  const NOTahandleClick = () => {
    //update the top 5 displayed
    // currently reads as add new song to end of song array
    // needs to creste a new array based on query
    updateSongs([...songs, { name: 'What\'s Chuck\'s Age Again?', artist: 'blink-182', album: 'Enema of the State', id: '0' },])

    // displays results of user query (top 5 songs)
    songs = songs.map((song) => (
      <div key={index}>
        <h2>{song.title}</h2>
        <h4>{song.artist}, {song.album}</h4> // add a class to italicize song.album
      </div>
    ))
  }

  return (
    <>

      {/* maybe add a scroll feature? -> can we make this responsive? */}

      <div className='songs'>





      </div>

    </>
  )
};






{/**** remove before push */ }
// brainstorm idea: similar to bracket color matcher, an extension that displays correlating tokens for html elements-- > maybe jsx or other languages w / long separation of code
// ie:
// 77 --> line number is a colored token a la quokka. if this opening div is line 65, the closing div is on 77.
{/*<div className='songs'> 
   code */
  /*</div > // 65 --> if this is line 77 it points to opening div on line 65 */
}