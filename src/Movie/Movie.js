import "./movie.css";
import { BigPlayButton, Player } from "video-react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import DeleteIcon from "@mui/icons-material/Delete";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useProducts } from "./../products-context";

const Movie = (props) => {
  const { state, dispatch } = useProducts();

  useEffect(() => {
    localStorage.setItem(
      "PLAYLISTS_ARRAY",
      JSON.stringify(state.playlistsArray)
    );
  }, [state]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 225,
    bgcolor: "whitesmoke",
    border: "none",
    outline: "none",
    color: "var(--binge-grey)",
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
          <ThumbUpIcon
            style={{ color: props.likeButtonColor }}
            onClick={props.addToLiked}
            fontSize="small"
          />
          <ThumbDownIcon
            style={{ color: props.dislikeButtonColor }}
            onClick={props.removeFromLiked}
            fontSize="small"
          />
          <WatchLaterIcon
            style={{ color: props.watchLaterButtonColor }}
            onClick={props.addToWatchLater}
            fontSize="small"
          />
          {props.historyPage && (
            <DeleteIcon onClick={props.removeFromHistory} fontSize="small" />
          )}
          {props.playlistPage && (
            <DeleteIcon onClick={props.removeFromPlaylist} fontSize="small" />
          )}
          {!props.playlistPage && !props.historyPage && (
            <PlaylistAddIcon onClick={handleOpen} />
          )}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {state.playlistsArray.map((playlist) => {
                return (
                  <h3
                    key={playlist.id}
                    onClick={() => {
                      dispatch({
                        type: "Add to Playlist",
                        payload: {
                          playlistId: playlist.id,
                          video: {
                            id: props.id,
                            thumbnail: props.thumbnail,
                            source: props.source,
                            title: props.title,
                            category: props.category,
                          },
                        },
                      });
                      handleClose();
                    }}
                    className="
                playlist-name"
                  >
                    {playlist.name}
                  </h3>
                );
              })}
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Movie;
