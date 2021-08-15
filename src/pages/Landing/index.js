import { handleAuth } from "../../services/spotify/auth";


export default function Landing() {
  return (
    <div>
      <h1>Welcome Fellas</h1>
      <p>To continue, log in with Spotify</p>
      <button onClick={() => window.location = handleAuth()}>Login</button>
    </div>
  );
}