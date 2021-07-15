import style from "./style.module.css";

const AlbumImg = (props) => {
    return <img className={style.img} src={props.src} alt={props.alt} />
}

export default AlbumImg;