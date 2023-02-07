import { useState } from "react";

const SearchBar = ({songs, setSongs}) => {
    const [category, setCategory] = useState('')

    const changeFilter = (category) => {
        setCategory(category)
    }

    function filterSongs(songFilteredSelection){
        let filteredSongs = songs.filter((song) => song[category]===songFilteredSelection);
        setSongs(filteredSongs)
    }

    // return ( 
    //     <section id="search">
    //         <select value={category} onChange={(event) => setCategory(event.target.value)}>
    //             <option value="title">title</option>
    //             <option value="artist">artist</option>
    //             <option value="album">album</option>
    //             <option value="release_date">release date</option>
    //             <option value="genre">genre</option>
    //         </select>
    //         <select onChange={(event) => setFilteredSongs(event.target.value)} ></select>
    //     </section>
    //  );
     return ( 
        <div onSubmit={filterSongs}>
            <label>Select Category</label>
            <select id='search' onChange={(event) => changeFilter(event.target.value)}
            value={category}>
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