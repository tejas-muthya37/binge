import "./movies.css";
import Movie from "../Movie/Movie";

const Movies = () => {
  return (
    <div className="Movies">
      <div className="movie-group">
        <h1>Thrillers</h1>
        <div className="group-movies">
          <Movie title="Drishyam" />
          <Movie title="Drishyam" />
          <Movie title="Drishyam" />
          <Movie title="Drishyam" />
        </div>
      </div>

      <div className="movie-group">
        <h1>Action</h1>
        <div className="group-movies">
          <Movie title="Drishyam" />
          <Movie title="Drishyam" />
          <Movie title="Drishyam" />
          <Movie title="Drishyam" />
        </div>
      </div>

      <div className="movie-group">
        <h1>Romance</h1>
        <div className="group-movies">
          <Movie title="Drishyam" />
          <Movie title="Drishyam" />
          <Movie title="Drishyam" />
          <Movie title="Drishyam" />
        </div>
      </div>

      <div className="movie-group">
        <h1>Drama</h1>
        <div className="group-movies">
          <Movie title="Drishyam" />
          <Movie title="Drishyam" />
          <Movie title="Drishyam" />
          <Movie title="Drishyam" />
        </div>
      </div>
    </div>
  );
};

export default Movies;
