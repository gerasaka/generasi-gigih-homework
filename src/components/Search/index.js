import Button from "../Button";
import useEventHandler from "../../libraries/eventHandler";
import { Input } from "@chakra-ui/input";
import style from "./style.module.css";

const Search = () => {
  const { handleSearch } = useEventHandler();
  return (
    <form onSubmit={handleSearch}>
      <Input
        className={style.input}
        type="text"
        name="query"
        placeholder="Search track"
      />
      <Button type="submit" label="Search" />
    </form>
  );
};

export default Search;