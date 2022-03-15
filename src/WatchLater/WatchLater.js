import "./watchLater.css";
import Movie from "./../Movie/Movie";

const WatchLater = () => {
  return (
    <div className="WatchLater">
      <h1>Watch later</h1>
      <div className="watch-later-section">
        <Movie title="Drishyam" />
        <Movie title="Drishyam" />
        <Movie title="Drishyam" />
        <Movie title="Drishyam" />
      </div>
    </div>
  );
};

export default WatchLater;
