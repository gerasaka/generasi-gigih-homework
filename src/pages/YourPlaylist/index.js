import Header from "../../components/layout/Header";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserPlaylists } from "../../services/spotify/getData";
import { Box, Text, Grid, Button } from "@chakra-ui/react";

const YourPlaylist = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const [list, setList] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserPlaylists(accessToken)
      .then((data) => setList(data))
      .then(() => setLoading(false));
  }, [accessToken]);

  console.log("yourPlaylist list ", list);

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <>
      <Header />
      <div>
        <Grid
          templateColumns="1fr 1fr 1fr 1fr 1fr"
          gap="20px"
          m="5"
          justifyContent="center"
        >
          {list.items.map((playlist) => (
            <Box
              p="2"
              borderWidth="3px"
              minW="100%"
              borderColor="#F3F1F5"
              borderRadius="10px"
              _hover={{
                backgroundColor: "#F4EEFF",
              }}
            >
              <img
                className={style.playlistImage}
                src={playlist.images[0].url}
                alt={playlist.name}
              />
              <Text
                fontWeight="bold"
                marginTop="15px"
                color="rgba(129,140,248)"
              >
                {playlist.name}
              </Text>
              <Text>{playlist.description}</Text>
              <Button
                marginTop="15px"
                size="sm"
                backgroundColor="#DCD6F7"
                color="#424874"
              >
                View Songs
              </Button>
            </Box>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default YourPlaylist;
