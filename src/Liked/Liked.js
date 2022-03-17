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
  }, [state.likedArray, state.watchLaterArray]);
  return (
    <div className="Liked">
      <h1>Liked videos</h1>
      <div className="liked-videos-section">
        {state.likedArray.map((movie) => {
          return (
            <Movie
              key={movie.id}
              source={movie.source}
              thumbnail={movie.thumbnail}
              title={movie.title}
              notLikedPage={false}
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

export default Liked;
