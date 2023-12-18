import { Box } from "@mui/material";
import { useContext } from "react";
import { AudioContext } from "../../context/audioContext";
import {
  Avatar,
  IconButton,
  ListItemAvatar,
  ListItemText,
} from "@mui/material/";
import { PlayArrow, Pause } from "@mui/icons-material";
import secondsToMMSS from "../../utils/secondsToMMSS";

export const PlayBar = () => {
  const { currentTrack, isPlaying, handleToggleAudio } =
    useContext(AudioContext);

  const { title, artists, preview, duration } = currentTrack;
  const formattedDuration = secondsToMMSS(duration);

  return (
    <Box
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        height: 70,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#9340fe",
      }}
    >
      <IconButton onClick={() => handleToggleAudio(currentTrack)}>
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <ListItemAvatar>
        <Avatar variant='rounded'>
          <img
            src={preview}
            alt=''
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={artists}
      />
      <ListItemText primary={formattedDuration} />
    </Box>
  );
};
