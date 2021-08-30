import useEventHandler from "../../libraries/eventHandler";
import { Input, Button  } from "@chakra-ui/react";
import style from "./style.module.css";

const SearchBar = () => {
  const { handleSearch } = useEventHandler();
  return (
    <form onSubmit={handleSearch} className={style.container}>
      <Input
        className={style.input}
        type="text"
        name="query"
        placeholder="Search track"
      />

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
          marginLeft="10px"
        >
          Search
        </Button>
    </form>
  );
};

export default SearchBar;