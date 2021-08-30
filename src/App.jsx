import { useEffect } from "react";
// pages
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import NoMatch from "./pages/NoMatch";
// libs
import YourPlaylist from "./pages/YourPlaylist";
// import useUserAuth from "./libraries/userAuth";
import { getTokenFromUrl } from "./services/spotify/auth";
//third-party
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./redux/store";
import { login } from "./redux/authSlice";

function App() {
  // const { isLogin } = useUserAuth();
  const { isLogin } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    if (!isLogin && window.location.hash) {
      dispatch(login(getTokenFromUrl(window.location.hash)));
    }
  }, [dispatch, isLogin]);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/create-playlist">
            {isLogin ? <Home /> : <Redirect to="/" />}
          </Route>
          <Route path="/your-playlist">
            {isLogin ? <YourPlaylist /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            {isLogin ? <Redirect to="/create-playlist" /> : <Landing />}
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
