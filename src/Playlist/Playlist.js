import "./playlist.css";
import Movie from "./../Movie/Movie";

const Playlist = () => {
  return (
    <div className="Playlist">
      <h1>Playlist</h1>
      <div className="playlist-section">
        <Movie title="Drishyam" />
        <Movie title="Drishyam" />
        <Movie title="Drishyam" />
        <Movie title="Drishyam" />
      </div>
    </div>
  );
};

export default Playlist;
