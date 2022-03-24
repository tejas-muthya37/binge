import "./playlist.css";
import Movie from "./../Movie/Movie";
import { useParams } from "react-router";
import { useProducts } from "./../products-context";

const Playlist = () => {
  const { playlistId } = useParams();

  const { state, dispatch } = useProducts();

  return (
    <div className="Playlist">
      {state.playlistsArray.map((playlist) => {
        return (
          <>
            {Number(playlistId) === playlist.id &&
              playlist.videos.map((movie) => {
                return (
                  <div key={movie.id} className="playlist-section">
                    <h1>{playlist.name}</h1>
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
                    />
                  </div>
                );
              })}
          </>
        );
      })}
    </div>
  );
};

export default Playlist;
