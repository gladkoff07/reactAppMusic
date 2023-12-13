import {
  Avatar,
  IconButton,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material/";
import { PlayArrow } from "@mui/icons-material";
import style from "./track.module.css";
import secondsToMMSS from "../../utils/secondsToMMSS";

export const Track = (track) => {
  const { preview, title, artists, duration } = track;
  const formattedDuration = secondsToMMSS(duration);
  return (
    <>
      <ListItem>
        <IconButton>
          <PlayArrow />
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
