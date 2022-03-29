import { useReducer, useContext, createContext } from "react";

const VideosContext = createContext(null);

const reducer = (stateVideo, action) => {
  switch (action.type) {
    case "Setup":
      return {
        ...stateVideo,
        videosArray: action.payload,
      };
    case "Categories setup":
      return {
        ...stateVideo,
        categoriesArray: action.payload,
      };
    default:
      return stateVideo;
  }
};

const VideosProvider = ({ children }) => {
  const [stateVideo, dispatchVideo] = useReducer(reducer, {
    videosArray: [],
    categoriesArray: [],
  });
  return (
    <VideosContext.Provider value={{ stateVideo, dispatchVideo }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
