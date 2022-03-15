import Movie from "./../Movie/Movie";
import "./liked.css";

const Liked = () => {
  return (
    <div className="Liked">
      <h1>Liked videos</h1>
      <div className="liked-videos-section">
        <Movie title="Drishyam" />
        <Movie title="Drishyam" />
        <Movie title="Drishyam" />
        <Movie title="Drishyam" />
      </div>
    </div>
  );
};

export default Liked;
