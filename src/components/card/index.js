import AlbumImg from "../img";
import Detail from "../detail";
import Button from "../button";

import style from "./style.module.css";

const Card = (props) => {
    return (
        <div className={style.card}>
            <AlbumImg src={props.image}/>
            <Detail title={props.title} artists={props.artist} album={props.album} />
            <Button link={props.url} label={"Select"} />
        </div>
    );
}

export default Card;