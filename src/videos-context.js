import { useReducer, useContext, createContext } from "react";

const VideosContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "Setup":
      return {
        ...state,
        videosArray: action.payload,
      };
    default:
      return state;
  }
};

const VideosProvider = ({ children }) => {
  const [stateVideo, dispatchVideo] = useReducer(reducer, {
    videosArray: [],
  });
  return (
    <VideosContext.Provider value={{ stateVideo, dispatchVideo }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
