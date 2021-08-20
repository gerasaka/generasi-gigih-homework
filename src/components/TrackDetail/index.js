import style from "./style.module.css";

const Detail = (props) => {
  return (
    <div className={style.container}>
      <h2 data-testid="track-title" className={style.title}>
        {props.title}
      </h2>
      <p data-testid="artist-name" className={style.artists}>
        <strong>{props.artists}</strong>
      </p>
      <p data-testid="album-name" className={style.album}>
        {props.album}
      </p>
    </div>
  );
};

export default Detail;
