import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Screens/Homepage/Homepage";
import Movies from "./Screens/Movies/Movies";
import Liked from "./Screens/Liked/Liked";
import WatchLater from "./Screens/WatchLater/WatchLater";
import History from "./Screens/History/History";
import Playlists from "./Screens/Playlists/Playlists";
import Playlist from "./Screens/Playlist/Playlist";
import Authenticate from "./Screens/Authenticate/Authenticate";
import Mockman from "mockman-js";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route
          path="/"
          element={
            <>
              <Navbar /> <Homepage />{" "}
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Navbar /> <Movies categoryPage={false} />{" "}
            </>
          }
        />
        <Route
          path="/movies/:categoryName"
          element={
            <>
              <Navbar /> <Movies categoryPage={true} />{" "}
            </>
          }
        />
        <Route
          path="/liked"
          element={
            <>
              <Navbar /> <Liked />{" "}
            </>
          }
        />
        <Route
          path="/watch-later"
          element={
            <>
              <Navbar /> <WatchLater />{" "}
            </>
          }
        />
        <Route
          path="/history"
          element={
            <>
              <Navbar /> <History />{" "}
            </>
          }
        />
        <Route
          path="/playlists"
          element={
            <>
              <Navbar /> <Playlists />{" "}
            </>
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            <>
              <Navbar /> <Playlist />{" "}
            </>
          }
        />
        <Route
          path="/login"
          element={
            <Authenticate
              cardTitle="LOGIN"
              checkboxLabel="Remember me"
              alternate="Create New Account"
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Authenticate
              cardTitle="SIGN UP"
              checkboxLabel="I agree to the terms and conditions"
              alternate="Login With Existing Account"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
