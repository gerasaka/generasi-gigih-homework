import { useState } from "react";
import Search from "../../components/Search";
import TrackCard from "../../components/TrackCard";
import { createPlaylist, getTrackData } from "../../services/spotifyTrackCall";

import axios from "axios";

export default function Home({ token, userID }) {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);
  const [postPlaylist, setPostPlaylist] = useState({
    name: "",
    description: "",
    public: false,
    collaborative: false,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    getTrackData(query, token, setTracks);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostPlaylist({ ...postPlaylist, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createPlaylist(postPlaylist);
  };

  const createPlaylist = (obj) => {
    fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        name: obj.name,
        public: false,
        collaborative: false,
        description: obj.description,
      }),
    })
      .then((res) => res.json())
      .then((data) => addTracks(data.id));
  };

  const addTracks = (playlistId) => {
    const uri = selected.map((track) => track);
    console.log(uri);
    fetch(
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
    )
      .then((res) => res.json())
      .then((data) => console.log(data));

    setSelected([]);
    setPostPlaylist({
      name: "",
      description: "",
      public: false,
      collaborative: false,
    });
    alert("Create Playlist berhasil");
  };
  return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Playlist name</label>
          <input
            id="name"
            name="name"
            type="text"
            minLength="10"
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            minLength="20"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Create Playlist</button>
        </form>
      </div>

      <Search
        handleSearch={handleSearch}
        name="query"
        placeholder="Find Songs"
      />
      {tracks.map((track) => (
        <TrackCard
          key={track.id}
          image={track.album.images[0].url}
          album={track.album.name}
          title={track.name}
          artist={track.artists[0].name}
          // url = {track.album.external_urls.spotify}
          uri={track.uri}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </>
  );
}
