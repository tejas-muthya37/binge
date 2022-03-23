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
        };
      }
    case "Remove from Liked":
      return {
        ...state,
        likedArray: state.likedArray.filter(
          (movie) => movie.id !== action.payload.id
        ),
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
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  var likedVideosArray = JSON.parse(localStorage.getItem("LIKED_ARRAY"));

  if (likedVideosArray === null) likedVideosArray = [];

  var watchLaterVideosArray = JSON.parse(
    localStorage.getItem("WATCH_LATER_ARRAY")
  );

  if (watchLaterVideosArray === null) watchLaterVideosArray = [];

  var historyVideosArray = JSON.parse(localStorage.getItem("HISTORY_ARRAY"));

  if (historyVideosArray === null) historyVideosArray = [];

  const [state, dispatch] = useReducer(reducer, {
    likedArray: likedVideosArray,
    watchLaterArray: watchLaterVideosArray,
    historyArray: historyVideosArray,
  });
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
