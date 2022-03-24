import "./playlistThumbnail.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const PlaylistThumbnail = (props) => {
  return (
    <div className="PlaylistThumbnail">
      <div className="thumbnail-container">
        <div className="thumbnail-left">
          <Link to={"/playlist/" + props.playlistId}>
            <h2>{props.title}</h2>
          </Link>
          <p>
            {props.length} {props.length === 1 ? "video" : "videos"}
          </p>
        </div>
        <div className="thumbnail-right">
          <DeleteIcon onClick={props.removePlaylist} fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default PlaylistThumbnail;
