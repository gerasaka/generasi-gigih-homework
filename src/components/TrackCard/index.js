import AlbumImg from "../TrackImage";
import Detail from "../TrackDetail";
// import Button from "../Button";

import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { storeSelectedTrack } from "../../store/trackSlice";

const TrackCard = (props) => {
  const {selectedTracks} = useSelector(state => state.track);
  const dispatch = useDispatch();

	const {uri, album, title, artist, image} = props;

  const handleClick = () => {
    if (selectedTracks.includes(uri)) {
      dispatch(storeSelectedTrack(selectedTracks.filter((value) =>  value !== uri)))
    } else {
      return dispatch(storeSelectedTrack([...selectedTracks, uri]))
		}
  };

  return (
    <div className={style.card}>
      <AlbumImg src={image} />
      <Detail title={title} artists={artist} album={album} />
      <button onClick={handleClick}>
        {
          selectedTracks.includes(uri) ? "Deselect" : "Select"
        }
      </button>
    </div>
  );
};

export default TrackCard;