import style from "./style.module.css";

const AlbumImg = (props) => {
  return (
    <div className={style.container}>
      <img className={style.image} src={props.src} alt={props.alt} />
    </div>
  );
};

export default AlbumImg;