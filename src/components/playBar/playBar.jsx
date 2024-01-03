import { Box, Slider } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AudioContext } from "../../context/audioContext";
import {
  Avatar,
  IconButton,
  ListItemAvatar,
  ListItemText,
} from "@mui/material/";
import { PlayArrow, Pause } from "@mui/icons-material";
import secondsToMMSS from "../../utils/secondsToMMSS";

const TimeControl = () => {
  const [currentTime, setCurrentTime] = useState(0);

  const { audio, currentTrack } = useContext(AudioContext);

  const { duration } = currentTrack;

  const formattedDuration = secondsToMMSS(duration);
  const formattedCurrentTime = secondsToMMSS(currentTime);
  const sliderCurrentTime = Math.round((currentTime / duration) * 100);

  const handleChangeCurrentTime = (_, value) => {
    const time = Math.round((value / 100) * duration);
    setCurrentTime(time);
    audio.currentTime = time;
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        width: "40%",
        padding: "0 30px",
      }}
    >
      <ListItemText
        primary={formattedCurrentTime}
        style={{ minWidth: "auto" }}
      />
      <Slider
        step={1}
        min={0}
        max={100}
        value={sliderCurrentTime}
        onChange={handleChangeCurrentTime}
        style={{ margin: "0 20px", color: "#fff" }}
      />
      <ListItemText
        primary={formattedDuration}
        style={{ minWidth: "auto" }}
      />
    </Box>
  );
};

export const PlayBar = () => {
  const { currentTrack, isPlaying, handleToggleAudio } =
    useContext(AudioContext);
  const { title, artists, preview } = currentTrack;

  return (
    <Box
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        height: "70px",
        padding: "0 5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9340fe",
        color: "#fff",
      }}
    >
      <Avatar
        variant='rounded'
        style={{ width: "50px", height: "50px" }}
      >
        <img
          src={preview}
          alt=''
        />
      </Avatar>
      <IconButton
        onClick={() => handleToggleAudio(currentTrack)}
        style={{ color: "#fff", margin: "0 1%" }}
      >
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <ListItemText
        primary={title}
        secondary={artists}
        style={{ flex: "0 0 auto" }}
      />
      <TimeControl />
    </Box>
  );
};
