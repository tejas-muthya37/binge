import "./movie.css";
import { BigPlayButton, Player } from "video-react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { drishyamThumbnail } from "./../images.js";

const Movie = (props) => {
  return (
    <div className="Movie">
      <Player
        poster={drishyamThumbnail}
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      >
        <BigPlayButton position="center" />
      </Player>
      <div className="movie-card-footer">
        <h3 className="movie-title">{props.title}</h3>
        <div className="footer-icons-group">
          <ThumbUpIcon fontSize="small" />
          <ThumbDownIcon fontSize="small" />
          <WatchLaterIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Movie;
