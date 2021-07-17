import AlbumImg from "../img";
import Detail from "../detail";
import Button from "../button";

import style from "./style.module.css";
import data from "../../data/apiData";

const Card = props => {
    return data.map( data =>
        <div className={style.card}>
            <AlbumImg src={data.album.images[2].url} alt={data.album.name} />
            <Detail title={data.name} artists={data.artists[0].name} album={data.album.name} />
            <Button link={data.external_urls} button={"Select"} />
        </div>
    );

    // const { name, artists, album, external_urls } = data[1];
    
    // return (
    //     <div className={style.card}>
    //         <AlbumImg src={album.images[2].url} alt={album.name} />
    //         <Detail title={name} artists={artists[0].name} album={album.name} />
    //         <Button link={external_urls} button={"Select"} />
    //     </div>
    // );
}

export default Card;