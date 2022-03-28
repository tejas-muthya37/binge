import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Screens/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import Movies from "./Screens/Movies/Movies";
import Liked from "./Screens/Liked/Liked";
import WatchLater from "./Screens/WatchLater/WatchLater";
import History from "./Screens/History/History";
import Playlists from "./Screens/Playlists/Playlists";
import Playlist from "./Screens/Playlist/Playlist";
import Authenticate from "./Screens/Authenticate/Authenticate";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/mock"></Route>

          <Route exact path="/">
            <Navbar />
            <Homepage />
          </Route>

          <Route exact path="/movies">
            <Navbar />
            <Movies categoryPage={false} />
          </Route>

          <Route exact path="/movies/:categoryName">
            <Navbar />
            <Movies categoryPage={true} />
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

          <Route exact path="/playlist/:playlistId">
            <Navbar />
            <Playlist />
          </Route>

          <Route exact path="/login">
            <Authenticate
              cardTitle="LOGIN"
              checkboxLabel="Remember me"
              alternate="Create New Account"
            />
          </Route>

          <Route exact path="/signup">
            <Authenticate
              cardTitle="SIGN UP"
              checkboxLabel="I agree to the terms and conditions"
              alternate="Login With Existing Account"
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
