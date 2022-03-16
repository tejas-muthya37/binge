import "./movie.css";
import { BigPlayButton, Player } from "video-react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const Movie = (props) => {
  return (
    <div className="Movie">
      <Player poster={props.thumbnail} src={props.source}>
        <BigPlayButton position="center" />
      </Player>
      <div className="movie-card-footer">
        <p className="movie-title">{props.title}</p>
        <div className="footer-icons-group">
          <ThumbUpIcon onClick={props.addToLiked} fontSize="small" />
          <ThumbDownIcon onClick={props.removeFromLiked} fontSize="small" />
          <WatchLaterIcon onClick={props.addToWatchLater} fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Movie;
