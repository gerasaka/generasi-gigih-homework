import Search from "../../components/Search"; 
import TrackCard from "../../components/TrackCard";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useSelector } from "react-redux";
import PlaylistForm from "../../components/PlaylistForm";

const Home = () => {
  const { tracks } = useSelector(state => state.track);

  return (
    <>
      <Header />
      <PlaylistForm />
      <Search />
      {tracks.map((track) => (
        <TrackCard
          key={track.id}
          image={track.album.images[0].url}
          album={track.album.name}
          title={track.name}
          artist={track.artists[0].name}
          // url = {track.album.external_urls.spotify}
          uri={track.uri}
        />
      ))}
      <Footer />
    </>
  );
}

export default Home;