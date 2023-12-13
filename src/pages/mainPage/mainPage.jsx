import { Container, Grid, Input, List } from "@mui/material/";
import tracksList from "../../assets/tracksList";
import { Track } from "../../components/track/track";

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
        <List className='scroller'>
          {tracksList.map((track) => {
            return (
              <Track
                key={track.id}
                {...track}
              />
            );
          })}
        </List>
      </Grid>
    </Container>
  );
};
