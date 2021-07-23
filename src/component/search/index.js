const Search = (props) => {
  return (
    <form onSubmit={props.handleSearch}>
      <input type="text" name={props.name} placeholder={props.placeholder} />
      <input type="submit" value="Search"/>
    </form>
  );
}

export default Search;