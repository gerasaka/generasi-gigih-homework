import Detail from "../TrackDetail";
// import Button from "../Button";

import style from "./style.module.css";
import { storeSelectedTrack } from "../../store/trackSlice";

import { useAppDispatch, useAppSelector } from "../../store";

type TrackData = {
  uri: string;
  album: string
  title: string;
  artist: string;
  image: string;
};

const TrackCard = ({uri, album, title, artist, image}: TrackData) => {
  const {selectedTracks} = useAppSelector(state => state.track);
  const dispatch = useAppDispatch();

	// const {uri, album, title, artist, image} = props;

  const handleClick = (): void => {
    if (selectedTracks.includes(uri)) {
      dispatch(storeSelectedTrack(selectedTracks.filter((value: any) =>  value !== uri)))
    } else {
      dispatch(storeSelectedTrack([...selectedTracks, uri]))
		}
  };

  return (
    <div className={style.card}>
      <img data-testid="track-image" className={style.image} src={image} alt={title} />
      <Detail title={title} artists={artist} album={album} />
      <button onClick={handleClick} className={style.btn}>
        {
          selectedTracks.includes(uri) ? "Deselect" : "Select"
        }
      </button>
    </div>
  );
};

export default TrackCard;