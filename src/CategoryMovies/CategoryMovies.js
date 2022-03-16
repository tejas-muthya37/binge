import "./categoryMovies.css";
import { moviesArray } from "../moviesArray";
import Movie from "../Movie/Movie";

const CategoryMovies = ({ title, category }) => {
  return (
    <div className="CategoryMovies">
      <h1>{title}</h1>
      <div className="category-movies-section">
        {moviesArray.map((movie) => {
          return (
            movie.category === category && (
              <Movie
                source={movie.source}
                thumbnail={movie.thumbnail}
                title={movie.title}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMovies;
