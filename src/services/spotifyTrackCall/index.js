import axios from "axios";

const getTrackData = async (query, token, setTrack) => {
  const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`;

  return await axios.get(url, {
    headers: { Authorization: "Bearer " + token }
  })
    .then(res => {
      setTrack(res.data.tracks.items);
    })
};

// const createPlaylist = async (obj, userID, token, playlist, setPlaylist, setPostPlaylist) => {
//   return axios.post(`https://api.spotify.com/v1/users/${userID}/playlists`, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     body: JSON.stringify({
//       name: obj.name,
//       public: false,
//       collaborative: false,
//       description: obj.description,
//     }),
//   })
//     .then((data) => addTracks(data.id, playlist, setPlaylist, setPostPlaylist, token));
// };

// const addTracks = (playlistId, playlist, setPlaylist, setPostPlaylist, token) => {
//   const uri = playlist.map((track) => track);

//   fetch(
//     `https://api.spotify.com/v1/playlists/${playlistId}/tracks?position=0&uris=${uri}`,
//     {
//       method: "POST",
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         uris: uri,
//         position: 0,
//       }),
//     }
//   )
//     .then((res) => res.json())
//     .then((data) => console.log(data));

//   setPlaylist([]);
//   setPostPlaylist({
//     name: "",
//     description: "",
//     public: false,
//     collaborative: false,
//   });
//   alert("Create Playlist berhasil");
// };

export { getTrackData };