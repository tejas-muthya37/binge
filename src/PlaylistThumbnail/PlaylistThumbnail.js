import "./playlistThumbnail.css";
import DeleteIcon from "@mui/icons-material/Delete";

const PlaylistThumbnail = () => {
  return (
    <div className="PlaylistThumbnail">
      <div className="thumbnail-container">
        <div className="thumbnail-left">
          <h2>My Playlist</h2>
          <p>10 Videos</p>
        </div>
        <div className="thumbnail-right">
          <DeleteIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default PlaylistThumbnail;
