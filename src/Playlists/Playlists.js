import "./playlists.css";
import PlaylistThumbnail from "../PlaylistThumbnail/PlaylistThumbnail";

const Playlists = () => {
  return (
    <div className="Playlists">
      <h1>Playlists</h1>
      <div className="playlists-section">
        <PlaylistThumbnail />
        <PlaylistThumbnail />
        <PlaylistThumbnail />
        <PlaylistThumbnail />
        <PlaylistThumbnail />
        <PlaylistThumbnail />
      </div>
    </div>
  );
};

export default Playlists;
