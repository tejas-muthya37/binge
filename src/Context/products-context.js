import { useReducer, useContext, createContext } from "react";

const ProductsContext = createContext(null);

const reducer = (state, action) => {
  const encodedToken = localStorage.getItem("ENCODED_TOKEN_2");

  switch (action.type) {
    case "Add to Liked":
      const likedVideoFound = state.likedArray.find(
        (video) => video._id === action.payload._id
      );
      if (likedVideoFound) {
        fetch(`/api/user/likes/${action.payload._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: encodedToken,
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
        return {
          ...state,
          likedArray: state.likedArray.filter(
            (movie) => movie.id !== action.payload.id
          ),
        };
      } else {
        fetch("/api/user/likes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: encodedToken,
          },
          body: JSON.stringify({ video: action.payload }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
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
      fetch(`/api/user/likes/${action.payload._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: encodedToken,
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      return {
        ...state,
        likedArray: state.likedArray.filter(
          (movie) => movie._id !== action.payload._id
        ),
        dislikedArray: [...state.dislikedArray, action.payload],
      };
    case "Add to Watch Later":
      const watchLaterVideoFound = state.watchLaterArray.find(
        (video) => video._id === action.payload._id
      );
      if (watchLaterVideoFound) {
        fetch(`/api/user/watchlater/${action.payload._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: encodedToken,
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
        return {
          ...state,
          watchLaterArray: state.watchLaterArray.filter(
            (movie) => movie._id !== action.payload._id
          ),
        };
      } else {
        fetch("/api/user/watchlater", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: encodedToken,
          },
          body: JSON.stringify({ video: action.payload }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
        return {
          ...state,
          watchLaterArray: [...state.watchLaterArray, action.payload],
        };
      }
    case "Add to History":
      if (
        state.historyArray.length === 0 ||
        state.historyArray[state.historyArray.length - 1]._id !==
          action.payload._id
      ) {
        fetch("/api/user/history", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: encodedToken,
          },
          body: JSON.stringify({ video: action.payload }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
        return {
          ...state,
          historyArray: [...state.historyArray, action.payload],
        };
      } else {
        return state;
      }
    case "Remove from History":
      fetch(`/api/user/history/${action.payload._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: encodedToken,
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      return {
        ...state,
        historyArray: state.historyArray.filter(
          (movie) => movie._id !== action.payload._id
        ),
      };
    case "Clear History":
      fetch("/api/user/history/all", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: encodedToken,
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      return {
        ...state,
        historyArray: [],
      };
    case "Add Playlist":
      fetch("/api/user/playlists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: encodedToken,
        },
        body: JSON.stringify({
          playlist: action.payload.mockBeePayload,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      return {
        ...state,
        playlistsArray: [...state.playlistsArray, action.payload],
      };
    case "Remove Playlist":
      console.log(action.payload);
      fetch(`/api/user/playlists/${action.payload}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: encodedToken,
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      return {
        ...state,
        playlistsArray: state.playlistsArray.filter(
          (playlist) => playlist.id !== action.payload
        ),
      };
    case "Add to Playlist":
      state.playlistsArray.map((playlist) => {
        if (playlist.id === action.payload.playlistId) {
          const videoFound = playlist.videos.find(
            (element) => element._id === action.payload.video._id
          );
          if (action.payload.targetElement.checked) {
            if (!videoFound) {
              playlist.videos = [...playlist.videos, action.payload.video];
              fetch(`/api/user/playlists/${action.payload.playlistId}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  authorization: encodedToken,
                },
                body: JSON.stringify({ video: action.payload.video }),
              })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err));
            }
          } else {
            fetch(
              `/api/user/playlists/${action.payload.playlistId}/${action.payload.video._id}`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  authorization: encodedToken,
                },
              }
            )
              .then((res) => res.json())
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
            playlist.videos = playlist.videos.filter(
              (element) => element._id !== action.payload.video._id
            );
          }
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
          fetch(
            `/api/user/playlists/${action.payload.playlistId}/${action.payload.videoId}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                authorization: encodedToken,
              },
            }
          )
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
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
    case "Handle Logout":
      return {
        likedArray: [],
        dislikedArray: [],
        watchLaterArray: [],
        historyArray: [],
        playlistsArray: [],
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
