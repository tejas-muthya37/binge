import "./navbar.css";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import HistoryIcon from "@mui/icons-material/History";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <div className="nav-left">
          <div className="nav-logo">
            <LiveTvIcon />
            <h1>Binge</h1>
          </div>
        </div>
        <div className="nav-right">
          <ul className="ul-laptop-view">
            <li>
              <Link to="/liked">
                <ThumbUpIcon />
              </Link>
            </li>
            <li>
              <Link to="/playlists">
                <SubscriptionsIcon />
              </Link>
            </li>
            <li>
              <Link to="/watch-later">
                <WatchLaterIcon />
              </Link>
            </li>
            <li>
              <Link to="/history">
                <HistoryIcon />
              </Link>
            </li>
          </ul>

          <ul className="ul-mobile-view">
            <li>
              <Link to="/liked">
                <ThumbUpIcon fontSize="small" />
              </Link>
            </li>
            <li>
              <Link to="/playlists">
                <SubscriptionsIcon fontSize="small" />
              </Link>
            </li>
            <li>
              <Link to="/watch-later">
                <WatchLaterIcon fontSize="small" />
              </Link>
            </li>
            <li>
              <Link to="/history">
                <HistoryIcon fontSize="small" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>{" "}
    </div>
  );
};

export default Navbar;
