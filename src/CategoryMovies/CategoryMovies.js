import "./categoryMovies.css";
import { moviesArray } from "../moviesArray";
import Movie from "../Movie/Movie";
import { useProducts } from "./../products-context.js";

const CategoryMovies = ({ title, category }) => {
  const { dispatch } = useProducts();

  return (
    <div className="CategoryMovies">
      <h1>{title}</h1>
      <div className="category-movies-section">
        {moviesArray.map((movie, index) => {
          return (
            movie.category === category && (
              <Movie
                key={index}
                source={movie.source}
                thumbnail={movie.thumbnail}
                title={movie.title}
                addToLiked={() => dispatch({ type: "Add to Liked" })}
                removeFromLiked={() => dispatch({ type: "Remove from Liked" })}
                addToWatchLater={() => dispatch({ type: "Add to Watch Later" })}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMovies;
