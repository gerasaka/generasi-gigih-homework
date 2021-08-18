import useEventHandler from "../../libraries/eventHandler";

const PlaylistForm = () => {
  const {handleFormSubmit, handleChange} = useEventHandler();
  return(
    <form onSubmit={handleFormSubmit}>
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