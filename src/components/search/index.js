import Button from "../Button";

const Search = (props) => {
  return (
    <form onSubmit={props.handleSearch}>
      <input type="text" name={props.name} placeholder={props.placeholder} />
      <Button type="submit" label="Search"/>
    </form>
  );
}

export default Search;