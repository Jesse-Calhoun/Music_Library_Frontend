import { useState } from "react";

const SearchBar = ({songs, setSongs}) => {
    const [category, setCategory] = useState('')

    const changeFilter = (category) => {
        setCategory(category)
    }

    function filterSongs(filterSelection){
        let filteredSongs = songs.filter((song) => song[category] === filterSelection);
        setSongs(filteredSongs)
    }

     return ( 
        <div onSubmit={filterSongs}>
            <label>Select Category</label>
            <select id='search' onChange={(event) => changeFilter(event.target.value)} value={category}>
                <option value=''>All</option>
                <option value='title'>Title</option>
                <option value='artist'>Artist</option>
                <option value='album'>Album</option>
                <option value='release_date'>Release Date</option>
                <option value='genre'>Genre</option>
            </select>
            <select onChange={(event) => filterSongs(event.target.value)}>
            {songs.map((song) => {
                return (
                    <option>{song[category]}</option>
                    );
                })}
            </select>
        </div>
     );
}

 
export default SearchBar;