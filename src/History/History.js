import "./history.css";
import Movie from "./../Movie/Movie";
import { useProducts } from "../products-context";
import { useEffect } from "react";

const History = () => {
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
    <div className="History">
      <div class="history-header">
        {state.historyArray.length > 0 && <h1>History</h1>}
        {state.historyArray.length > 0 && (
          <button onClick={() => dispatch({ type: "Clear History" })}>
            Clear History
          </button>
        )}
      </div>

      <div className="history-section">
        {state.historyArray.length === 0 && (
          <h1 className="empty-history">Nothing in History!</h1>
        )}
        {state.historyArray.length > 0 &&
          state.historyArray.map((movie, index) => {
            return (
              <Movie
                key={index}
                source={movie.source}
                thumbnail={movie.thumbnail}
                title={movie.title}
                historyPage={true}
                addToLiked={() =>
                  dispatch({ type: "Add to Liked", payload: movie })
                }
                removeFromLiked={() =>
                  dispatch({ type: "Remove from Liked", payload: movie })
                }
                addToWatchLater={() =>
                  dispatch({ type: "Add to Watch Later", payload: movie })
                }
                removeFromHistory={() =>
                  dispatch({ type: "Remove from History", payload: movie })
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default History;
