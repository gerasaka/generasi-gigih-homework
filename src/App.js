import { handleAuth, getSpotifyToken, getUserData } from './services/spotifyAuth';

import Home from './pages/Home';
import Landing from './pages/Landing';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

function App() {
  const { isLogin } = useSelector(state => state.login)

  return (
      <Router>
        <Switch>
          <Route path="/create-playlist">
            {isLogin ? <Home /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {isLogin ? <Redirect to="/create-playlist" /> : <Landing redirect={handleAuth}/>}
          </Route>
          <Route><h1>404</h1></Route>
        </Switch>
      </Router>
  );
}

export default App;