import { useState } from "react";
import axios from "axios";

import Search from "../../components/search";
import TrackCard from "../../components/trackCard";
// import data from "../../data/apiData.js";

export default function Home({token}) {
  const [Track, setTrack] = useState([]);
  const [songList, setSongList] = useState([]);
  const [isSelect, setSelect] = useState(false);

  const handleSearch = e => {
    e.preventDefault();
    const query = e.target.query.value;
    getTrackData(query);
  };

  const getTrackData = query => {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`;

    axios.get(url, {
      headers: { Authorization: "Bearer " + token.access_token }
    })
      .then(res => {
        setTrack(res.data.tracks.items);
      })
  };

  return (
    <>
      <Search handleSearch={handleSearch} name="query" placeholder="Find Songs"/>
      <div>
        {             
          Track.map(detail => (            
          <TrackCard
          id = {detail.id}
          image = {detail.album.images[0].url}
          album = {detail.album.name}
          title = {detail.name}
          artist = {detail.artists[0].name}
          url = {detail.album.external_urls.spotify}
          
          list = {songList}
          setList = {setSongList}
          isSelect = {isSelect}
          setSelect = {setSelect}
          />
          ))
        }
      </div>
    </>
  );
}