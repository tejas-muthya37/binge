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

  const [state, dispatch] = useReducer(reducer, {
    likedArray: likedVideosArray,
    watchLaterArray: watchLaterVideosArray,
  });
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
