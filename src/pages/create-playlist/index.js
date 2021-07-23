import { useState, useEffect } from "react";

import Card from "../../component/card";
// import data from "../../data/apiData.js";

import Landing from "../landing";

export default function Content() {
  const [Token, setToken] = useState("");
  const [Track, setTrack] = useState([]);

  // url????????
  const handleLogin = () => {
    const client_ID = process.env.REACT_APP_SPOTIFY_ID;
    const response_type = "token";
    const redirect_uri = "http://localhost:3000";
    const scope = "playlist-modify-private";
    
    window.location = `https://accounts.spotify.com/authorize?client_id=${client_ID}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}&show_dialog=true`;
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

  // Read more
  useEffect(() => {
    if (window.location.hash) {
      const access_token = getTokenFromUrl(window.location.hash);
      setToken(access_token);
    }
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    const query = e.target.query.value;
    getTrackData(query);
  };

  // Bearer?
  const getTrackData = query => {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`;
    fetch(url, {
      headers: {
        Authorization: "Bearer " + Token.access_token
      }
    })
      .then(res => res.json())
      .then(data => setTrack(data.tracks.items));
  };

  return (
    <>
      <Landing handleSearch={handleSearch} handleLogin={handleLogin} />
      <div>
        {
          Token ? (   
            Track.map(detail => (            
            <Card
            key = {detail.id}
            image = {detail.album.images[0].url}
            album = {detail.album.name}
            title = {detail.name}
            artist = {detail.album.name}
            url = {detail.album.external_urls.spotify}
            />          
            ))
          ) : <div></div>
        }
      </div>
    </>
  );
}