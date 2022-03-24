import "./playlists.css";
import PlaylistThumbnail from "../PlaylistThumbnail/PlaylistThumbnail";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState, useRef, useEffect } from "react";
import { useProducts } from "./../products-context";

const Playlists = () => {
  const inputRef = useRef(null);

  const { state, dispatch } = useProducts();

  useEffect(() => {
    localStorage.setItem(
      "PLAYLISTS_ARRAY",
      JSON.stringify(state.playlistsArray)
    );
  }, [state.playlistsArray]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 225,
    bgcolor: "background.paper",
    border: "none",
    outline: "none",
    color: "black",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="Playlists">
      <div className="playlists-header">
        <h1>Playlists</h1>
        <h3 onClick={handleOpen}>+ ADD A NEW PLAYLIST</h3>
      </div>
      <div className="playlists-section">
        {state.playlistsArray.map((playlist) => {
          return (
            <PlaylistThumbnail
              playlistId={playlist.id}
              title={playlist.name}
              length={playlist.videos.length}
              removePlaylist={() =>
                dispatch({ type: "Remove Playlist", payload: playlist.id })
              }
            />
          );
        })}
      </div>
      <Modal
        className="playlist-modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="playlist-modal-box" sx={style}>
          <form>
            <input
              ref={inputRef}
              id="playlist-name"
              type="text"
              placeholder="Playlist Name"
            />
          </form>
          <button
            onClick={() => {
              dispatch({
                type: "Add Playlist",
                payload: {
                  id: state.playlistsArray.length + 1,
                  name: inputRef.current.value,
                  videos: [],
                },
              });
              handleClose();
            }}
          >
            Add
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default Playlists;
