import "./playlist.css";
import Movie from "./../../Components/Movie/Movie";
import { useParams } from "react-router";
import { useProducts } from "./../../products-context";
import { useEffect } from "react";

const Playlist = () => {
  const { playlistId } = useParams();

  const { state, dispatch } = useProducts();

  const playlist = state.playlistsArray.find(
    (playlist) => playlist.id === Number(playlistId)
  );

  useEffect(() => {
    localStorage.setItem(
      "PLAYLISTS_ARRAY",
      JSON.stringify(state.playlistsArray)
    );
  }, [state]);

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
    <div className="Playlist">
      {playlist.videos.length > 0 && <h1>{playlist.name}</h1>}
      {playlist.videos.length === 0 && (
        <h1 className="empty-playlist">Playlist empty!</h1>
      )}
      <div className="playlist-section">
        {state.playlistsArray.map((playlist) => {
          return (
            <>
              {playlist.videos.length > 0 &&
                Number(playlistId) === playlist.id &&
                playlist.videos.map((movie) => {
                  return (
                    <Movie
                      key={movie.id}
                      id={movie.id}
                      source={movie.source}
                      thumbnail={movie.thumbnail}
                      title={movie.title}
                      playlistPage={true}
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
                      removeFromPlaylist={() =>
                        dispatch({
                          type: "Remove from Playlist",
                          payload: {
                            playlistId: playlist.id,
                            videoId: movie.id,
                          },
                        })
                      }
                      likeButtonColor={
                        state.likedArray.find(
                          (element) => element.id === movie.id
                        )
                          ? "var(--binge-red)"
                          : "whitesmoke"
                      }
                      dislikeButtonColor={
                        state.dislikedArray.find(
                          (element) => element.id === movie.id
                        )
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
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Playlist;
