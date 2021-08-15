import Home from './pages/Home';
import Landing from './pages/Landing';
import useAuth from './libraries/checkLogin';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

function App() {
  const { isLogin } = useAuth();

  return (
      <Router>
        <Switch>
          <Route path="/create-playlist">
            {isLogin ? <Home /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {isLogin ? <Redirect to="/create-playlist" /> : <Landing />}
          </Route>
          <Route><h1>404</h1></Route>
        </Switch>
      </Router>
  );
}

export default App;