import { useState, useEffect } from 'react';
import { handleAuth, getTokenFromUrl } from './functions/auth';

import Home from './pages/Home';
import Landing from './pages/landing';

function App() {
  const [isLogin, setLogin] = useState(false);
  const [Token, setToken] = useState("");

  useEffect(() => {
    if (window.location.hash) {
      const accessToken = getTokenFromUrl(window.location.hash);
      setToken(accessToken);
      setLogin(true);
    }
  }, []);

  return (
      isLogin ? <Home token={Token} /> : <Landing redirect={handleAuth}/>
  );
}

export default App;