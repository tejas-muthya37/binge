import "./playlist.css";
import Movie from "./../Movie/Movie";
import { useParams } from "react-router";
import { useProducts } from "./../products-context";
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

  return (
    <div className="Playlist">
      <h1>{playlist.name}</h1>
      <div className="playlist-section">
        {state.playlistsArray.map((playlist) => {
          return (
            <>
              {Number(playlistId) === playlist.id &&
                playlist.videos.map((movie) => {
                  return (
                    <Movie
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
