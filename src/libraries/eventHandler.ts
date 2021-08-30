import getTrackData from "../services/spotify/getTrack";
import { storeSelectedTrack, getTracks, create } from "../redux/trackSlice"
import { createPlaylist } from "../services/spotify/postPlaylist";
import { useAppDispatch, useAppSelector } from "../redux/store";

const useEventHandler = () => {
  const { accessToken, userProfile } = useAppSelector((state: any) => state.auth);
  const { selectedTracks, playlist} = useAppSelector((state: any) => state.track);

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
    e.target.reset();
  
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