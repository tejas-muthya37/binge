import "./watchLater.css";
import Movie from "./../Movie/Movie";
import { useProducts } from "./../products-context";
import { useEffect } from "react";

const WatchLater = () => {
  const { state, dispatch } = useProducts();

  useEffect(() => {
    localStorage.setItem("LIKED_ARRAY", JSON.stringify(state.likedArray));
    localStorage.setItem(
      "WATCH_LATER_ARRAY",
      JSON.stringify(state.watchLaterArray)
    );
  }, [state.likedArray, state.watchLaterArray]);
  return (
    <div className="WatchLater">
      <h1>Watch later</h1>
      <div className="watch-later-section">
        {state.watchLaterArray.map((movie) => {
          return (
            <Movie
              key={movie.id}
              source={movie.source}
              thumbnail={movie.thumbnail}
              title={movie.title}
              notLikedPage={true}
              addToLiked={() =>
                dispatch({ type: "Add to Liked", payload: movie })
              }
              removeFromLiked={() =>
                dispatch({ type: "Remove from Liked", payload: movie })
              }
              addToWatchLater={() =>
                dispatch({ type: "Add to Watch Later", payload: movie })
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default WatchLater;
