import { Container, Grid, Input, List } from "@mui/material/";
import tracksList from "../../assets/tracksList";
import { Track } from "../../components/track/track";
import { useState } from "react";

const runSerach = (query) => {
  if (!query) {
    return tracksList;
  }
  const lowerCaseQuery = query.toLowerCase();

  return tracksList.filter(
    (track) =>
      track.title.toLocaleLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLocaleLowerCase().includes(lowerCaseQuery)
  );
};

export const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList);

  const handleChange = (event) => {
    const foundTracks = runSerach(event.target.value);
    setTracks(foundTracks);
  };

  return (
    <Container maxWidth='sm'>
      <Grid
        container
        direction='column'
        justifyContent='center'
      >
        <Input
          placeholder='Search tracks'
          onChange={handleChange}
        />
        <br />
        <List className='scroller'>
          {tracks.map((track) => {
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
