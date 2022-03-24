import "./playlists.css";
import PlaylistThumbnail from "../PlaylistThumbnail/PlaylistThumbnail";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState, useRef } from "react";

const Playlists = () => {
  const inputRef = useRef(null);

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
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
  };

  const buttonStyle = {
    border: "none",
    height: "2rem",
    width: "4rem",
    borderRadius: "2px",
    color: "whitesmoke",
    backgroundColor: "var(--binge-red)",
    cursor: "pointer",
    fontSize: "1rem",
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
        <PlaylistThumbnail />
        <PlaylistThumbnail />
        <PlaylistThumbnail />
        <PlaylistThumbnail />
        <PlaylistThumbnail />
        <PlaylistThumbnail />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <input
              style={{
                outline: "none",
                height: "1.5rem",
                border: "none",
                fontSize: "1.1rem",
              }}
              ref={inputRef}
              id="playlist-name"
              type="text"
              placeholder="Playlist Name"
            />
          </form>
          <button style={buttonStyle}>Add</button>
        </Box>
      </Modal>
    </div>
  );
};

export default Playlists;
