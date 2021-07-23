import { useState, useEffect } from "react";
import Button from "../../component/button"
import Search from "../../component/search"

export default function Landing(props) {
  const [isLogged, setLogin] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      setLogin(true);
    }
  }, []);

  return (
    <div>
      {
        isLogged ? (
            <Search handleSubmit={props.handleSearch} />
        ) : (
          <>
            <h1>Welcome Fellas</h1>
            <p>To continue, log in with Spotify</p>
            <Button
              onClick={props.handleAuth}
              label="Login"
            />
          </>
        )
      }
    </div>
  );
}
