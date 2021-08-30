import useEventHandler from "../../libraries/eventHandler";
import style from "./style.module.css";
import { Input, Textarea, Button, Text, Box, Divider } from "@chakra-ui/react";
import { useAppSelector } from "../../redux/store";

const PlaylistForm = () => {
  const { handleFormSubmit, handleChange } = useEventHandler();
  const { selectedTracks } = useAppSelector((state: any) => state.track);

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
      <p>Selected Tracks</p>
      <Box>
        {          
          selectedTracks.map((track: any) => (            
          <Box key={track.uri}>
            <Text isTruncated>{track.title}</Text>
            <Text isTruncated>{track.artists}</Text>
          </Box>
          )
            // console.log(obeje.a);
          )
        }
      </Box>
    </Box>
  );
};

export default PlaylistForm;
