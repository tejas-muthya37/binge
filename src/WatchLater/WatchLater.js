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
    localStorage.setItem("HISTORY_ARRAY", JSON.stringify(state.historyArray));
  }, [state.likedArray, state.watchLaterArray, state.historyArray]);

  return (
    <div className="WatchLater">
      {state.watchLaterArray.length > 0 && <h1>Watch later</h1>}
      <div className="watch-later-section">
        {state.watchLaterArray.length === 0 && (
          <h1 className="empty-watch-later">No videos in Watch Later!</h1>
        )}
        {state.watchLaterArray.length > 0 &&
          state.watchLaterArray.map((movie) => {
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
                addToHistory={() =>
                  dispatch({ type: "Add to History", payload: movie })
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default WatchLater;
