import React, { useState } from 'react';
import axios from 'axios';

function App() {

const [songs, setSongs] = useState([{title: 'Talking to the Moon' , artist: 'Bruno Mars', album: 'Doo-Wops & Hooligans', release_date: '2010-05-11', genre: 'Pop'}])

  return (
    <div >
      <table>
        <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
        </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => {
            return (
              <tr>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
