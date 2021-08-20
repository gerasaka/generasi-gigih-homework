import { handleAuth } from "../../services/spotify/auth";
import Footer from "../../components/layout/Footer"
import Button from "../../components/Button";

export default function Landing() {
  return (
    <div>
      <div>
        <h1>Welcome Fellas</h1>
        <p>To continue, log in with Spotify</p>
        <Button onClick={() => window.location = handleAuth()} label="Login">Login</Button>
      </div>
      <Footer />
    </div>
  );
}