// import axios from 'axios';
// import MusicTable from './Components/MusicTable/MusicTable';

// useEffect(() => {
//     getAllSongs();
//   }, [])

//   async function getAllSongs(){
//     let response = await axios.get('http://127.0.0.1:8000/api/music/');
//     setSongs(response.data);
//   }
// const MusicTable = (props) => {

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Title</th>
//                     <th>Artist</th>
//                     <th>Album</th>
//                     <th>Release Date</th>
//                     <th>Genre</th>
//                     </tr>
//             </thead>
//             <tbody>
//                 {props.songs.map((song) => {
//                     return (
//                         <tr>
//                             <td>{song.title}</td>
//                             <td>{song.artist}</td>
//                             <td>{song.album}</td>
//                             <td>{song.release_date}</td>
//                             <td>{song.genre}</td>
//                         </tr>
//                     );
//                 })}
//             </tbody>
//         </table> 
//     );   
// }
 
// export default MusicTable;