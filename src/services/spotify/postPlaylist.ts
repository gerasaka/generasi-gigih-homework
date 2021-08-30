export const createPlaylist = async (playlist: any, token: string, userProfile: any, selectedTracks: any) => {
  await fetch(`https://api.spotify.com/v1/users/${userProfile.id}/playlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      name: playlist.name,
      public: false,
      collaborative: false,
      description: playlist.description,
    }),
  })
    .then((res) => res.json())
    .then(data => addTracks(data.id, selectedTracks, token))
};

const addTracks = async (playlistId: string, selected: any, token: string) => {
  const uri = selected.map((track: any) => track.uri);
  console.log(uri);
  await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?position=0&uris=${uri}`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: uri,
        position: 0,
      }),
    }
  ).then((res) => res.json())
};