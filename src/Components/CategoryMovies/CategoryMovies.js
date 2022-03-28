import "./categoryMovies.css";
import Movie from "./../Movie/Movie";
import { useProducts } from "./../../products-context.js";
import { useVideos } from "../../videos-context";
import { useEffect } from "react";

const CategoryMovies = ({ category }) => {
  const { stateVideo, dispatchVideo } = useVideos();
  useEffect(() => {
    fetch("/api/videos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => dispatchVideo({ type: "Setup", payload: data.videos }));
  }, []);

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
    <div className="CategoryMovies">
      <h1>{category}</h1>
      <div className="category-movies-section">
        {stateVideo.videosArray.map((movie) => {
          return (
            movie.category === category && (
              <Movie
                key={movie.id}
                id={movie.id}
                source={movie.source}
                thumbnail={movie.thumbnail}
                title={movie.title}
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
            )
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMovies;
