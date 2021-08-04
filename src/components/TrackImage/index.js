import style from "./style.module.css";

const AlbumImg = (props) => {
    return (
        <div className={style.container}>
            <img className={style.image} src={props.src} alt={props.alt} />
            {/* <div className={style.overlay}>
                <a href={props.link} className={style.icon}>
                    <img src="/play-button.svg"/>
                    <i>Play on Spotify</i>
                </a>
            </div> */}
        </div>
    );
}

export default AlbumImg;