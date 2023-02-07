import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import './App.css'
import SongForm from './Components/SongForm/SongForm';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [songs, setSongs] = useState([])

  async function addNewSong(song) {
    // let updatedSongs = [...songs, song];
    let response = await axios.post('http://127.0.0.1:8000/api/music/', song)
    if (response.status === 201){
      await getAllSongs(); 
    }
  }

  // useEffect(() => {
  //   const filteredSongs = songs.filter((song) => song.title.toLowerCase().includes('sun'))
  //   setSongs(songs => filteredSongs);
  //   console.log(filteredSongs)
  // }, [songs])


  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
    console.log(response.data);
  }
  return (
    <div >
      <SearchBar songs={songs} setSongs={setSongs}/>
      <MusicTable songs={songs}/>
      <SongForm addNewSong={addNewSong}/>
    </div>
  );
}

export default App;
