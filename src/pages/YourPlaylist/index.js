import Header from "../../components/layout/Header";

import { Grid } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserPlaylists } from '../../services/spotify/getData'
import { Box, Text } from "@chakra-ui/react";

const YourPlaylist = () => {
  const {accessToken} = useSelector(state => state.auth);
  const [list, setList] = useState({});
  const [loading, setLoading] = useState(true)

  // if (Object.keys(list).length === 0) {
  //   getPlaylist(accessToken).then(data => setList(data));
  // }

  useEffect(() => {
    getUserPlaylists(accessToken).then(data => setList(data)).then(() => setLoading(false))
  }, [accessToken]);

  console.log("yourPlaylist list ",list);
  
  if (loading) {
    return <div className="App">Loading...</div>;
  }

  return (
  <>
    <Header />
    <div>
      <Grid templateColumns="1fr 1fr 1fr 1fr 1fr" gap="20px" m="5" justifyContent="center">
      {list.items.map((playlist) => (
        <Box p="2" borderWidth="3px" minW="100%">
          <img src={playlist.images[1].url} alt={playlist.name} />
          <Text fontWeight="bold">{playlist.name}</Text>
          <Text>{playlist.description}</Text>
        </Box>
      ))}

      </Grid>
    </div>
  </>
  );
}

export default YourPlaylist;