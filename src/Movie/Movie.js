import "./movie.css";
import { BigPlayButton, Player } from "video-react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import DeleteIcon from "@mui/icons-material/Delete";

const Movie = (props) => {
  return (
    <div className="Movie">
      <div onClick={props.addToHistory}>
        <Player poster={props.thumbnail} src={props.source}>
          <BigPlayButton position="center" />
        </Player>
      </div>
      <div className="movie-card-footer">
        <p className="movie-title">{props.title}</p>
        <div className="footer-icons-group">
          {props.notLikedPage && (
            <ThumbUpIcon onClick={props.addToLiked} fontSize="small" />
          )}
          <ThumbDownIcon onClick={props.removeFromLiked} fontSize="small" />
          <WatchLaterIcon onClick={props.addToWatchLater} fontSize="small" />
          {props.historyPage && (
            <DeleteIcon onClick={props.removeFromHistory} fontSize="small" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
