import MusicTableRow from '../MusicTableRow/MusicTableRow';
import './MusicTable.css'

const MusicTable = ({ songs }) => {
    const rows = songs.map((song) => {
        return (<MusicTableRow song={song}/>);
    })

    return (
        <section id='music-table'>
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
                    {rows}
                </tbody>
            </table> 
        </section>
    );   
}
 
export default MusicTable;