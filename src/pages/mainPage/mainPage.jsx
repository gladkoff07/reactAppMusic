import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Input,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material/";
import tracksList from "../../assets/tracksList";
import { PlayArrow } from "@mui/icons-material";

export const MainPage = () => {
  return (
    <Container maxWidth='sm'>
      <Grid
        container
        direction='column'
        justifyContent='center'
      >
        <Input placeholder='Search...' />
        <br />
        <List>
          {tracksList.map((item) => {
            return (
              <>
                <ListItem key={item.id}>
                  <Button>
                    <PlayArrow />
                  </Button>
                  <ListItemAvatar>
                    <Avatar variant='rounded'>
                      <img
                        src={item.preview}
                        alt=''
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={item.artists}
                  />
                  <ListItemText
                    primary={item.duration}
                    classes='text-duration'
                  />
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      </Grid>
    </Container>
  );
};
