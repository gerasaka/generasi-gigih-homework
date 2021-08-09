import Search from "../../components/Search";
import TrackCard from "../../components/TrackCard";
import getTrackData from "../../services/spotify/getTrack";
import { useDispatch, useSelector } from "react-redux";
import { storeSelectedTrack, getTracks, create } from "../../store/trackSlice"
import createPlaylist from "../../services/spotify/postPlaylist";

const Home = () => {
  const { accessToken, userProfile } = useSelector(state => state.auth);
  const { tracks, selectedTracks, playlist} = useSelector(state => state.track);
  
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    getTrackData(query, accessToken)
    .then(res => {
      dispatch(getTracks(res.data.tracks.items))
    })
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(create({ ...playlist, [name]: value }))
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createPlaylist(playlist, accessToken, userProfile, selectedTracks)
    .then(()=> {
      dispatch(storeSelectedTrack([]));
      dispatch(create({
        name: "",
        description: "",
        public: false,
        collaborative: false,
      }))
    })

    console.log(playlist);
    alert("Playlist was Created");
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
        />
      ))}
    </>
  );
}

export default Home;