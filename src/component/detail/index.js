const Detail = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.artists}</p>
            <p>{props.album}</p>
        </div>
    );
}

export default Detail;