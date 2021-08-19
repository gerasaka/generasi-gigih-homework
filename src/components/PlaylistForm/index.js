import useEventHandler from "../../libraries/eventHandler";
import style from "./style.module.css"

const PlaylistForm = () => {
  const {handleFormSubmit, handleChange} = useEventHandler();
  return(
    <form onSubmit={handleFormSubmit} className={style.container}>
      <label htmlFor="name">Playlist name</label>
      <input
        id="name"
        name="name"
        minLength="10"
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        minLength="20"
        onChange={handleChange}
      ></textarea>
      <button type="submit">Create Playlist</button>
    </form>
  );
}

export default PlaylistForm;