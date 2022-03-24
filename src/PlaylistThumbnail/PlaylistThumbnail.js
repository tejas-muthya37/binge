import "./playlistThumbnail.css";
import DeleteIcon from "@mui/icons-material/Delete";

const PlaylistThumbnail = (props) => {
  return (
    <div className="PlaylistThumbnail">
      <div className="thumbnail-container">
        <div className="thumbnail-left">
          <h2>{props.title}</h2>
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
