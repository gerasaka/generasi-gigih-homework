import AlbumImg from "../img";
import Detail from "../detail";
import Button from "../button";

const Card = props => {
    const { name, artists, album, external_urls } = props.data;

    return (
        <div>
            <AlbumImg src={album.images[1].url} alt={album.name} />
            <Detail title={name} artists={artists[0].name} album={album.name} />
            <Button link={external_urls} />
        </div>
    );
}

export default Card;