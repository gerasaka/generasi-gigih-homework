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
          <Search handleSearch={props.handleSearch} name="query" placeholder="Artist or Album"/>
        ) : (
          <>
            <h1>Welcome Fellas</h1>
            <p>To continue, log in with Spotify</p>
            <div onClick={props.handleLogin}>
              <Button label="Login" />
            </div>
          </>
        )
      }
    </div>
  );
}
