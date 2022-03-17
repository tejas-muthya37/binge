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
      <h1>History</h1>
      <p onClick={() => dispatch({ type: "Clear History" })}>Clear History</p>
      <div className="history-section">
        {state.historyArray.map((movie, index) => {
          return (
            <Movie
              key={index}
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

export default History;
