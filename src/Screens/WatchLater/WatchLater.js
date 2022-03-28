import "./watchLater.css";
import Movie from "./../../Components/Movie/Movie";
import { useProducts } from "./../../products-context";
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
    localStorage.setItem("DISLIKED_ARRAY", JSON.stringify(state.dislikedArray));
  }, [
    state.likedArray,
    state.watchLaterArray,
    state.historyArray,
    state.dislikedArray,
  ]);

  return (
    <div className="WatchLater">
      {state.watchLaterArray.length > 0 && <h1>Watch later</h1>}
      <div className="watch-later-section">
        {state.watchLaterArray.length === 0 && (
          <h1 className="empty-watch-later">Nothing to Watch Later!</h1>
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
                likeButtonColor={
                  state.likedArray.find((element) => element.id === movie.id)
                    ? "var(--binge-red)"
                    : "whitesmoke"
                }
                dislikeButtonColor={
                  state.dislikedArray.find((element) => element.id === movie.id)
                    ? "var(--binge-red)"
                    : "whitesmoke"
                }
                watchLaterButtonColor={
                  state.watchLaterArray.find(
                    (element) => element.id === movie.id
                  )
                    ? "var(--binge-red)"
                    : "whitesmoke"
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default WatchLater;
