import { useReducer, useContext, createContext } from "react";

const ProductsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "Add to Liked":
      console.log("Added to Liked");
      break;
    case "Remove from Liked":
      console.log("Removed from Liked");
      break;
    case "Add to Watch Later":
      console.log("Added to Watch Later");
      break;
    default:
      console.log("default");
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
