import {
  Avatar,
  IconButton,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material/";
import { PlayArrow, Pause } from "@mui/icons-material";
import style from "./track.module.css";
import secondsToMMSS from "../../utils/secondsToMMSS";
import { useContext } from "react";
import { AudioContext } from "../../context/audioContext";

export const Track = (track) => {
  const { preview, title, artists, duration } = track;
  const formattedDuration = secondsToMMSS(duration);
  const { handleToggleAudio, currentTrack, isPlaying } =
    useContext(AudioContext);
  const isCurrentTrack = currentTrack.id === track.id;

  return (
    <>
      <ListItem className={isCurrentTrack && style.playing}>
        <IconButton onClick={() => handleToggleAudio(track)}>
          {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
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
        <ListItemText
          primary={formattedDuration}
          className={style["text-duration"]}
        />
      </ListItem>
      <Divider />
    </>
  );
};
