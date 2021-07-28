import AlbumImg from "../img";
import Detail from "../detail";
import Button from "../button";

import style from "./style.module.css";

const TrackCard = (props) => {
	const {id, album, title, artist, image} = props;
	const {isSelect, setSelect, list, setList} = props;

  const handleClick = () => {
    console.log(list);
    if (list.includes(id)) {
			const filtered = list.filter((value) => {return value === id});
			setList(filtered);
			setSelect(false);
    } else {
			setSelect(true);
			return setList([...list, props.id]);
		}
  };

  return (
    <div className={style.card}>
      <AlbumImg src={image} />
      <Detail title={title} artists={artist} album={album} />
      <Button label={"select"} onClick={handleClick} />
    </div>
  );
};

export default TrackCard;
