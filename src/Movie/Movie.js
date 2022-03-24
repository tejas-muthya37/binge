import "./movie.css";
import { BigPlayButton, Player } from "video-react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import DeleteIcon from "@mui/icons-material/Delete";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Movie = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
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
    <div className="Movie">
      <div onClick={props.addToHistory}>
        <Player poster={props.thumbnail} src={props.source}>
          <BigPlayButton position="center" />
        </Player>
      </div>
      <div className="movie-card-footer">
        <p className="movie-title">{props.title}</p>
        <div className="footer-icons-group">
          {props.notLikedPage && (
            <ThumbUpIcon onClick={props.addToLiked} fontSize="small" />
          )}
          <ThumbDownIcon onClick={props.removeFromLiked} fontSize="small" />
          <WatchLaterIcon onClick={props.addToWatchLater} fontSize="small" />
          {props.historyPage && (
            <DeleteIcon onClick={props.removeFromHistory} fontSize="small" />
          )}
          <PlaylistAddIcon onClick={handleOpen} />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Movie;
