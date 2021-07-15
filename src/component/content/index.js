import data from "../../data/apiData";
import Card from "../card";

const Content = () => {
    return (
    <div>
        <h1>Create Playlist</h1>
        <Card data={data} />
    </div>
    );
}

export default Content;