import useEventHandler from "../../libraries/eventHandler";
import style from "./style.module.css"
import { Input, Textarea, Button } from "@chakra-ui/react"

const PlaylistForm = () => {
  const {handleFormSubmit, handleChange} = useEventHandler();
  return(
    <form onSubmit={handleFormSubmit} className={style.container}>
      <label htmlFor="playlist-name">Playlist name</label>
      <Input
        variant="filled"
        size="sm"
        id="playlist-name"
        name="playlist-name"
        minLength="10"
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <Textarea
        variant="filled"
        size="sm"
        id="description"
        name="description"
        minLength="20"
        onChange={handleChange}
      />
      <Button type="submit" colorScheme="blue">Create Playlist</Button>
    </form>
  );
}

export default PlaylistForm;