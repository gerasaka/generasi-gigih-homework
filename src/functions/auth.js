// url????????
const handleAuth= () => {
  const clientId = process.env.REACT_APP_SPOTIFY_ID;
  const responseType = "token";
  const redirectUri = "http://localhost:3000";
  const scope = "playlist-modify-private";
  const endPoint = "https://accounts.spotify.com/authorize";

  return window.location = `${endPoint}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scope}&show_dialog=true`;
};

// Read more
const getTokenFromUrl = hash => {
  const stringAfterHastag = hash.substring(1);
  const paramInUrl = stringAfterHastag.split("&");
  const paramSplitUp = paramInUrl.reduce((acc, currentValue) => {
    const [key, value] = currentValue.split("=");
    acc[key] = value;
    return acc;
  }, {});
  return paramSplitUp;
};

export {handleAuth, getTokenFromUrl};