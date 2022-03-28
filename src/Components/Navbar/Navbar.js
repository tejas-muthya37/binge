import "./navbar.css";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import HistoryIcon from "@mui/icons-material/History";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Link } from "react-router-dom";
import { useProducts } from "./../../products-context";
import { useEffect } from "react";
import { useNavbar } from "./../../navbar-context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const encodedToken = localStorage.getItem("ENCODED_TOKEN_2");

  const { navbarButtonText, setNavbarButtonText } = useNavbar();

  const { state, dispatch } = useProducts();

  useEffect(() => {
    localStorage.setItem("LIKED_ARRAY", JSON.stringify(state.likedArray));
    localStorage.setItem(
      "WATCH_LATER_ARRAY",
      JSON.stringify(state.watchLaterArray)
    );
    localStorage.setItem("HISTORY_ARRAY", JSON.stringify(state.historyArray));
    localStorage.setItem("DISLIKED_ARRAY", JSON.stringify(state.dislikedArray));
  }, [
    state.likedArray,
    state.watchLaterArray,
    state.historyArray,
    state.dislikedArray,
  ]);

  const handleLogout = () => {
    if (navbarButtonText === "SIGN OUT") {
      localStorage.removeItem("ENCODED_TOKEN_2");
      localStorage.removeItem("LIKED_ARRAY");
      localStorage.removeItem("WATCH_LATER_ARRAY");
      localStorage.removeItem("HISTORY_ARRAY");
      localStorage.removeItem("PLAYLISTS_ARRAY");
      dispatch({ type: "Handle Logout" });
      setNavbarButtonText("SIGN IN");
      navigate("/movies");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="Navbar">
      <nav>
        <div className="nav-left">
          <Link to="/">
            <h1>BINGE</h1>
          </Link>
        </div>
        <div className="nav-right">
          <ul className="ul-laptop-view">
            <li>
              <Link to={encodedToken === null ? "/login" : "/liked"}>
                <ThumbUpIcon />
              </Link>
            </li>
            <li>
              <Link to={encodedToken === null ? "/login" : "/playlists"}>
                <SubscriptionsIcon />
              </Link>
            </li>
            <li>
              <Link to={encodedToken === null ? "/login" : "/watch-later"}>
                <WatchLaterIcon />
              </Link>
            </li>
            <li>
              <Link to={encodedToken === null ? "/login" : "/history"}>
                <HistoryIcon />
              </Link>
            </li>
          </ul>

          <ul className="ul-mobile-view">
            <li>
              <Link to={encodedToken === null ? "/login" : "/liked"}>
                <ThumbUpIcon fontSize="small" />
              </Link>
            </li>
            <li>
              <Link to={encodedToken === null ? "/login" : "/playlists"}>
                <SubscriptionsIcon fontSize="small" />
              </Link>
            </li>
            <li>
              <Link to={encodedToken === null ? "/login" : "/watch-later"}>
                <WatchLaterIcon fontSize="small" />
              </Link>
            </li>
            <li>
              <Link to={encodedToken === null ? "/login" : "/history"}>
                <HistoryIcon fontSize="small" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>{" "}
      <button onClick={handleLogout}>{navbarButtonText}</button>
    </div>
  );
};

export default Navbar;
