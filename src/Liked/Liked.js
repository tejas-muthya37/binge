import Movie from "./../Movie/Movie";
import "./liked.css";
import { useProducts } from "../products-context";
import { useEffect } from "react";

const Liked = () => {
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
    <div className="Liked">
      {state.likedArray.length > 0 && <h1>Liked videos</h1>}
      <div className="liked-videos-section">
        {state.likedArray.length === 0 && (
          <h1 className="empty-liked">No liked videos!</h1>
        )}
        {state.likedArray.length > 0 &&
          state.likedArray.map((movie) => {
            return (
              <Movie
                key={movie.id}
                source={movie.source}
                thumbnail={movie.thumbnail}
                title={movie.title}
                likedPage={true}
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

export default Liked;
