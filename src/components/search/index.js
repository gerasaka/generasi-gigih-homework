import Button from "../Button";
import useEventHandler from "../../libraries/eventHandler"

const Search = (props) => {
  const {handleSearch} = useEventHandler();
  return (
    <form onSubmit={handleSearch}>
      <input type="text" name={props.name} placeholder={props.placeholder} />
      <Button type="submit" label="Search"/>
    </form>
  );
}

export default Search;