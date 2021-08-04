import { useState, useEffect } from 'react';
import { handleAuth, getSpotifyToken, getUserData } from './services/spotifyAuth';

import Home from './pages/Home';
import Landing from './pages/Landing';

function App() {
  const [isLogin, setLogin] = useState(false);
  const [userID, setUserID] = useState("");
  
  const [token, setToken] = useState("");

  useEffect(() => {
    if (window.location.hash) {
      const {access_token} = getSpotifyToken(window.location.hash);
      setToken(access_token);
      getUserData(access_token).then((data) => setUserID(data.id));
      setLogin(true);
    }
  }, [token]);

  return (
      isLogin ? <Home token={token} userID={userID} /> : <Landing redirect={handleAuth}/>
  );
}

export default App;