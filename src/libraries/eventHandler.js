import getTrackData from "../services/spotify/getTrack";
import { useSelector, useDispatch } from "react-redux";
import { storeSelectedTrack, getTracks, create } from "../store/trackSlice"
import createPlaylist from "../services/spotify/postPlaylist";

const useEventHandler = () => {
  const { accessToken, userProfile } = useSelector(state => state.auth);
  const { selectedTracks, playlist} = useSelector(state => state.track);

  const dispatch = useDispatch();
  
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    getTrackData(query, accessToken)
    .then(res => {
      dispatch(getTracks(res.data.tracks.items))
    })
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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(create({ ...playlist, [name]: value }))
  };

  return {handleSearch, handleChange, handleFormSubmit};
}

export default useEventHandler;