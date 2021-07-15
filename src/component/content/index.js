const Content = (props) => {
    const data = props.data;
    const { name, artists, album, external_urls } = data;

    return (
    <div>
        <img src={album.images[2].url} alt="Album cover" /><br />
        <p>Title </p>
        <p>{name}</p>
        <p>Artists </p>
        <p>{artists[0].name}</p>
        <p>Album </p>
        <p>{album.name}</p>
        <button>
        Listen on Spotify</button>
    </div>
    );
}

export default Content;