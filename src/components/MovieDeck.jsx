import React from "react";
import MovieCard from "./MovieCard";
import { Grid } from "semantic-ui-react";

const MovieDeck = props => {
  return (
    <Grid stackable columns={3}>
      {props.movies.map((movie, id) => (
        <MovieCard movie={movie} key={id} />
      ))}
    </Grid>
  );
};
export default MovieDeck;
