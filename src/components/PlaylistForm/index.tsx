import useEventHandler from "../../libraries/eventHandler";
import style from "./style.module.css";
import { Input, Textarea, Button, Text, Box, Divider, CloseButton } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { storeSelectedTrack } from "../../redux/trackSlice";

const PlaylistForm = () => {
  const { handleFormSubmit, handleChange } = useEventHandler();
  const { selectedTracks } = useAppSelector((state) => state.track);
  const dispatch = useAppDispatch();

  const handleClick = (uri:string): void => {
    dispatch(
      storeSelectedTrack(selectedTracks.filter((track) => track.uri !== uri))
    );
  };

  return (
    <Box maxW="90%">
      <form onSubmit={handleFormSubmit} className={style.container}>
        <div>
          <label htmlFor="name">Playlist name</label>
          <Input
            size="sm"
            variant="flushed"
            id="name"
            name="name"
            minLength={10}
            onChange={handleChange}
            placeholder="What are you thinking about?"
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <Textarea
            size="sm"
            variant="flushed"
            id="description"
            name="description"
            minLength={20}
            onChange={handleChange}
            placeholder="How it's describe you"
          />
        </div>

        <Button
          type="submit"
          variant="outline"
          borderRadius="50px"
          color="rgba(129,140,248)"
          borderColor="rgba(129,140,248)"
          _hover={{
            background: "rgba(129,140,248)",
            color: "white",
          }}
          marginBottom="20px"
        >
          Make your Playlist!
        </Button>
      </form>

      <Divider colorScheme="blackAlpha" />
      <p className={style.text}>Selected Tracks</p>
      <Box>
        {selectedTracks.map(
          (track: any) => (
            <Box
              key={track.uri}
              borderRadius="10px"
              marginBottom="2"
              p="5px"
              _hover={{
                background: "#DCD6F7",
                color: "#424874",
              }}
              position="relative"
            >
              <Box width="90%">
                <Text isTruncated>{track.title}</Text>
                <Text isTruncated color="#7F7C82">
                  {track.artists}
                </Text>                
              </Box>
              <CloseButton size="sm" position="absolute" top="1" right="1" onClick={() => handleClick(track.uri)} />
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default PlaylistForm;
