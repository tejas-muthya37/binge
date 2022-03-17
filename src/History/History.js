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
  }, [state.likedArray, state.watchLaterArray]);
  return (
    <div className="History">
      <h1>History</h1>
      <div className="history-section">
        {state.historyArray.map((movie) => {
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

export default History;
