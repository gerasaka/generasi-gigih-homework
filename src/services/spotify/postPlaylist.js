const createPlaylist = async (obj, accessToken, userProfile, selectedTracks) => {
  await fetch(`https://api.spotify.com/v1/users/${userProfile.id}/playlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({
      name: obj.name,
      public: false,
      collaborative: false,
      description: obj.description,
    }),
  })
    .then((res) => res.json())
    .then(data => addTracks(data.id, selectedTracks, accessToken))
};

const addTracks = async (playlistId, selected, accessToken) => {
  const uri = selected.map((track) => track);
  console.log(uri);
  await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?position=0&uris=${uri}`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: uri,
        position: 0,
      }),
    }
  )
    .then((res) => res.json())
};

export default createPlaylist;