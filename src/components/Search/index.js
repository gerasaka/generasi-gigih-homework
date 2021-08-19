import Button from "../Button";
import useEventHandler from "../../libraries/eventHandler"

const Search = () => {
  const {handleSearch} = useEventHandler();
  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="query" placeholder="Search track" />
      <Button type="submit" label="Search"/>
    </form>
  );
}

export default Search;