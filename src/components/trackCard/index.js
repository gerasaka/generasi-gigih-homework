import AlbumImg from "../TrackImage";
import Detail from "../TrackDetail";
// import Button from "../Button";

import style from "./style.module.css";

const TrackCard = (props) => {
	const {uri, album, title, artist, image, selected, setSelected} = props;
	// const {} = props;

  const handleClick = () => {
    if (selected.includes(uri)) {
			setSelected(selected.filter((value) =>  value !== uri));
    } else {
			return setSelected([...selected, uri]);
		}
  };

  return (
    <div className={style.card}>
      <AlbumImg src={image} />
      <Detail title={title} artists={artist} album={album} />
      <button onClick={handleClick}>
        {
          selected.includes(uri) ? "Deselect" : "Select"
        }
      </button>
    </div>
  );
};

export default TrackCard;