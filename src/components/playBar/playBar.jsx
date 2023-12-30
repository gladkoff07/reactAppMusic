import { Box, Slider } from "@mui/material";
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9340fe",
        color: "#fff",
      }}
    >
      <IconButton
        onClick={() => handleToggleAudio(currentTrack)}
        style={{ color: "#fff" }}
      >
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
        style={{ flex: "0 0 auto" }}
      />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          width: "20%",
          padding: "0 30px",
        }}
      >
        <ListItemText
          primary='00:00'
          style={{ minWidth: "auto" }}
        />
        <Slider
          step={1}
          start={0}
          style={{ margin: "0 20px", color: "#fff" }}
        />
        <ListItemText
          primary={formattedDuration}
          style={{ minWidth: "auto" }}
        />
      </Box>
    </Box>
  );
};
