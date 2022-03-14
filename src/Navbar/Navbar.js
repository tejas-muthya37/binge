import "./navbar.css";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import HistoryIcon from "@mui/icons-material/History";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

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
          <ul>
            <li>
              <ThumbUpIcon />
            </li>
            <li>
              <SubscriptionsIcon />
            </li>
            <li>
              <WatchLaterIcon />
            </li>
            <li>
              <HistoryIcon />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
