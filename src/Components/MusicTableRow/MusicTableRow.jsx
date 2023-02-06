import React from 'react';

const MusicTableRow = ({song}) => {
    return (
        <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.release_date}</td>
            <td>{song.genre}</td>
        </tr>
    );
}
 
export default MusicTableRow;