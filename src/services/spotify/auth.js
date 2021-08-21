const handleAuth = () => {
  const clientId = process.env.REACT_APP_SPOTIFY_ID;
  const responseType = "token";
  const redirectUri = process.env.REACT_APP_BASE_URL;
  const scope = "playlist-modify-private";
  const endPoint = "https://accounts.spotify.com/authorize";

  return (window.location = `${endPoint}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scope}&show_dialog=true`);
};

const getUserData = (accessToken) => {
  return fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

export { handleAuth, getUserData };