import Detail from "../TrackDetail";

import style from "./style.module.css";
import { Button } from "@chakra-ui/button";
import { storeSelectedTrack } from "../../redux/trackSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

type TrackData = {
  uri: string;
  album: string;
  title: string;
  artist: string;
  image: string;
};

const TrackCard = ({ uri, album, title, artist, image }: TrackData) => {
  const { selectedTracks } = useAppSelector((state) => state.track);
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    if (selectedTracks.some(track => track.uri === uri)) {
      dispatch(
        storeSelectedTrack(selectedTracks.filter((track) => track.uri !== uri))
      );
    } else {
      dispatch(storeSelectedTrack([...selectedTracks, {uri: uri, title: title, artists: artist}]));
    }
  };

  return (
    <div className={style.card}>
      <img
        data-testid="track-image"
        className={style.image}
        src={image}
        alt={title}
      />
      <Detail title={title} artists={artist} album={album} />
      <Button
        type="submit"
        className={style.btn}
        backgroundColor="#DCD6F7"
        color="#424874"
        borderRadius="20px"
        onClick={handleClick}
      >
        {selectedTracks.some(track => track.uri === uri) ? "Deselect" : "Select"}
      </Button>
    </div>
  );
};

export default TrackCard;
