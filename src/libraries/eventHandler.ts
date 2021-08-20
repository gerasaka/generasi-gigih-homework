import getTrackData from "../services/spotify/getTrack";
import { useSelector, useDispatch } from "react-redux";
import { storeSelectedTrack, getTracks, create } from "../store/trackSlice"
import createPlaylist from "../services/spotify/postPlaylist";
import { useAppDispatch, useAppSelector } from "../store";

const useEventHandler = () => {
  const { accessToken, userProfile } = useAppSelector(state => state.auth);
  const { selectedTracks, playlist} = useAppSelector(state => state.track);

  const dispatch = useAppDispatch();
  
  const handleSearch = (e: any) => {
    e.preventDefault();
    const query = e.target.query.value;
    getTrackData(query, accessToken)
    .then(res => {
      dispatch(getTracks(res.data.tracks.items))
    })
  };
  
  const handleFormSubmit = (e: any) => {
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
    alert("Playlist Created");
  };
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    dispatch(create({ ...playlist, [name]: value }))
  };

  return {handleSearch, handleChange, handleFormSubmit};
}

export default useEventHandler;