import { useReducer, useContext, createContext } from "react";

const ProductsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "Add to Liked":
      const likedVideoFound = state.likedArray.find(
        (video) => video.id === action.payload.id
      );
      if (likedVideoFound) {
        return {
          ...state,
          likedArray: state.likedArray.filter(
            (movie) => movie.id !== action.payload.id
          ),
        };
      } else {
        return {
          ...state,
          likedArray: [...state.likedArray, action.payload],
          dislikedArray: state.dislikedArray.filter(
            (movie) => movie.id !== action.payload.id
          ),
        };
      }
    case "Remove from Liked":
      const dislikedVideoFound = state.dislikedArray.find(
        (video) => video.id === action.payload.id
      );
      if (dislikedVideoFound) {
        return {
          ...state,
          dislikedArray: state.dislikedArray.filter(
            (movie) => movie.id !== action.payload.id
          ),
        };
      }
      return {
        ...state,
        likedArray: state.likedArray.filter(
          (movie) => movie.id !== action.payload.id
        ),
        dislikedArray: [...state.dislikedArray, action.payload],
      };
    case "Add to Watch Later":
      const watchLaterVideoFound = state.watchLaterArray.find(
        (video) => video.id === action.payload.id
      );
      if (watchLaterVideoFound) {
        return {
          ...state,
          watchLaterArray: state.watchLaterArray.filter(
            (movie) => movie.id !== action.payload.id
          ),
        };
      } else {
        return {
          ...state,
          watchLaterArray: [...state.watchLaterArray, action.payload],
        };
      }
    case "Add to History":
      if (
        state.historyArray.length === 0 ||
        state.historyArray[state.historyArray.length - 1].id !==
          action.payload.id
      ) {
        return {
          ...state,
          historyArray: [...state.historyArray, action.payload],
        };
      } else {
        return state;
      }
    case "Remove from History":
      return {
        ...state,
        historyArray: state.historyArray.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    case "Clear History":
      return {
        ...state,
        historyArray: [],
      };
    case "Add Playlist":
      return {
        ...state,
        playlistsArray: [...state.playlistsArray, action.payload],
      };
    case "Remove Playlist":
      return {
        ...state,
        playlistsArray: state.playlistsArray.filter(
          (playlist) => playlist.id !== action.payload
        ),
      };
    case "Add to Playlist":
      state.playlistsArray.map((playlist) => {
        if (playlist.id === action.payload.playlistId) {
          playlist.videos = [...playlist.videos, action.payload.video];
        }
        return true;
      });
      return {
        ...state,
        playlistsArray: state.playlistsArray,
      };
    case "Remove from Playlist":
      state.playlistsArray.map((playlist) => {
        if (playlist.id === action.payload.playlistId) {
          playlist.videos = playlist.videos.filter(
            (video) => video.id !== action.payload.videoId
          );
        }
        return true;
      });
      return {
        ...state,
        playlistsArray: state.playlistsArray,
      };
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  var likedVideosArray = JSON.parse(localStorage.getItem("LIKED_ARRAY"));

  if (likedVideosArray === null) likedVideosArray = [];

  var dislikedVideosArray = JSON.parse(localStorage.getItem("DISLIKED_ARRAY"));

  if (dislikedVideosArray === null) dislikedVideosArray = [];

  var watchLaterVideosArray = JSON.parse(
    localStorage.getItem("WATCH_LATER_ARRAY")
  );

  if (watchLaterVideosArray === null) watchLaterVideosArray = [];

  var historyVideosArray = JSON.parse(localStorage.getItem("HISTORY_ARRAY"));

  if (historyVideosArray === null) historyVideosArray = [];

  var playlistsVideosArray = JSON.parse(
    localStorage.getItem("PLAYLISTS_ARRAY")
  );

  if (playlistsVideosArray === null) playlistsVideosArray = [];

  const [state, dispatch] = useReducer(reducer, {
    likedArray: likedVideosArray,
    dislikedArray: dislikedVideosArray,
    watchLaterArray: watchLaterVideosArray,
    historyArray: historyVideosArray,
    playlistsArray: playlistsVideosArray,
  });
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
