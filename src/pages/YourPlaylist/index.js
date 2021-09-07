import Header from "../../components/layout/Header";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getUserPlaylists,
  getPlaylistTracks,
} from "../../services/spotify/getData";
import {
  Box,
  Text,
  Grid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/hooks";

const YourPlaylist = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const [list, setList] = useState({});
  const [playlistTracks, storePlaylistTracks] = useState({});
  const [loading, setLoading] = useState(true);
  const [header, setHeader] = useState({name:"", description:""});

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getUserPlaylists(accessToken)
      .then((data) => setList(data))
      .then(() => setLoading(false));
  }, [accessToken]);

  console.log("yourPlaylist list ", list);
  console.log("trak nih ", playlistTracks);

  const handleClick = (id, name, desc) => {
    setHeader({name:name, description:desc});
    getPlaylistTracks(accessToken, id).then((data) =>
      storePlaylistTracks(data)
    );
    onOpen();
  };

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
                onClick={() => handleClick(playlist.id, playlist.name, playlist.description)}
              >
                View Songs
              </Button>
            </Box>
          ))}
        </Grid>
      </div>

      {/* asdfasf */}
      {Object.keys(playlistTracks).length === 0 ? (
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="scale"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      ) : (
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader display="flex" flexDirection="column" textAlign="left">
              <Text color="#A6B1E1">{header.name}</Text>
              <Text fontSize="15px">{header.description}</Text>
            </ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody>
              {playlistTracks.items.map((data) => (
                <>
                  <Box
                    borderRadius="10px"
                    p="6px"
                    _hover={{
                      background: "#DCD6F7",
                      color: "#424874",
                    }}
                  >
                    <Text isTruncated>{data.track.name}</Text>
                    <Text isTruncated color="#7F7C82">
                      {data.track.artists.map((artist) =>
                        artist ===
                        data.track.artists[data.track.artists.length - 1]
                          ? artist.name
                          : `${artist.name}, `
                      )}
                    </Text>
                  </Box>
                </>
              ))}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default YourPlaylist;
