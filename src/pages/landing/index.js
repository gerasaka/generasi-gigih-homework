import Button from "../../components/button"

export default function Landing(props) {

  const handleClick = () => {
    return window.location = props.redirect();
  };

  return (
    <>
      <h1>Welcome Fellas</h1>
      <p>To continue, log in with Spotify</p>
      <Button label="Login" onClick={handleClick}/>
    </>
  );
}