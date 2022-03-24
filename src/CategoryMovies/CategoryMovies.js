import "./categoryMovies.css";
import moviesArray from "../moviesArray";
import Movie from "../Movie/Movie";
import { useProducts } from "./../products-context.js";
import { useEffect } from "react";

const CategoryMovies = ({ title, category }) => {
  const { state, dispatch } = useProducts();

  useEffect(() => {
    localStorage.setItem("LIKED_ARRAY", JSON.stringify(state.likedArray));
    localStorage.setItem(
      "WATCH_LATER_ARRAY",
      JSON.stringify(state.watchLaterArray)
    );
    localStorage.setItem("HISTORY_ARRAY", JSON.stringify(state.historyArray));
  }, [state.likedArray, state.watchLaterArray, state.historyArray]);

  return (
    <div className="CategoryMovies">
      <h1>{title}</h1>
      <div className="category-movies-section">
        {moviesArray.map((movie) => {
          return (
            movie.category === category && (
              <Movie
                key={movie.id}
                id={movie.id}
                source={movie.source}
                thumbnail={movie.thumbnail}
                title={movie.title}
                notLikedPage={true}
                category={movie.category}
                addToLiked={() =>
                  dispatch({ type: "Add to Liked", payload: movie })
                }
                removeFromLiked={() =>
                  dispatch({ type: "Remove from Liked", payload: movie })
                }
                addToWatchLater={() =>
                  dispatch({ type: "Add to Watch Later", payload: movie })
                }
                addToHistory={() =>
                  dispatch({ type: "Add to History", payload: movie })
                }
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMovies;
