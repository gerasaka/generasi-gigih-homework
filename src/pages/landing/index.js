import Button from "../../components/Button"
import { handleAuth } from "../../services/spotify/auth";

export default function Landing() {

  const handleClick = () => {
    return window.location = handleAuth();
  };

  return (
    <div>
      <h1>Welcome Fellas</h1>
      <p>To continue, log in with Spotify</p>
      <Button label="Login" onClick={handleClick}/>
    </div>
  );
}