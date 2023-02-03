import React, { useState } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';

function App() {

const [songs, setSongs] = useState([{title: 'Talking to the Moon' , artist: 'Bruno Mars', album: 'Doo-Wops & Hooligans', release_date: '2010-05-11', genre: 'Pop'}])

  return (
    <div>
      <MusicTable songs={songs}/>
    </div>
  );
}

export default App;
