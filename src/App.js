import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar/Navbar";
import Movies from "./Movies/Movies";
import Liked from "./Liked/Liked";
import WatchLater from "./WatchLater/WatchLater";
import History from "./History/History";
import Playlists from "./Playlists/Playlists";
import Playlist from "./Playlist/Playlist";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Homepage />
          </Route>

          <Route exact path="/movies">
            <Navbar />
            <Movies />
          </Route>

          <Route exact path="/liked">
            <Navbar />
            <Liked />
          </Route>

          <Route exact path="/watch-later">
            <Navbar />
            <WatchLater />
          </Route>

          <Route exact path="/history">
            <Navbar />
            <History />
          </Route>

          <Route exact path="/playlists">
            <Navbar />
            <Playlists />
          </Route>

          <Route exact path="/playlist">
            <Navbar />
            <Playlist />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
