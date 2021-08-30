import SearchBar from "../../components/SearchBar"; 
import TrackCard from "../../components/TrackCard";
import Header from "../../components/layout/Header";

import { useAppSelector } from "../../redux/store";
import PlaylistForm from "../../components/PlaylistForm";
import { Box, Grid } from "@chakra-ui/react";

const Home = () => {
  const { tracks } = useAppSelector((state: any) => state.track);

  return (
    <>
      <Header />
      <Grid templateColumns="20% 80%" p="15px" >
        <Box>
          <PlaylistForm />
        </Box>
        <Box width="100%">
          <SearchBar />
          <Grid templateColumns="50% 50%" gap="20px" p="15px 15px 0 0">
          {tracks.map((track: any) => (
            <TrackCard
              key={track.id}
              image={track.album.images[0].url}
              album={track.album.name}
              title={track.name}
              artist={track.artists[0].name}
              uri={track.uri}
            />
          ))}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default Home;