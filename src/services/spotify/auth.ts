const authUser = () => {
  const clientId = process.env.REACT_APP_SPOTIFY_ID;
  const responseType = "token";
  const redirectUri = "https://flowso.vercel.app";
  const scope = "playlist-read-private";
  const endPoint = "https://accounts.spotify.com/authorize";

  return (window.location.href = `${endPoint}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scope}&show_dialog=true`);
};

const getTokenFromUrl = (hash: string) => {
  const params = window.location.hash.substr(1).split("&");
  let token ="";
  params.forEach((param) => {
    const [key, value] = param.split("=");
    if (key === "access_token") token = value;
  });
  return token;
};

export { authUser, getTokenFromUrl };
