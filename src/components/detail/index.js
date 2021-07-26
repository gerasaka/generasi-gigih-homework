import style from "./style.module.css";

const Detail = props => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>{props.title}</h2>
            <p className={style.artists}><strong>{props.artists}</strong></p>
            <p className={style.album}>{props.album}</p>
        </div>
    );
}

export default Detail;