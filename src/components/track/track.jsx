import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material/";
import { PlayArrow } from "@mui/icons-material";
import style from "./track.module.css";

export const Track = (track) => {
  const { preview, title, artists, duration } = track;
  return (
    <>
      <ListItem>
        <Button>
          <PlayArrow />
        </Button>
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
          primary={duration}
          className={style["text-duration"]}
        />
      </ListItem>
      <Divider />
    </>
  );
};
