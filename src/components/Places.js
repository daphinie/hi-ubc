import Place from "./Place";
import { Grid } from "@mui/material";

const Places = ({ places, onAdd }) => {
  return (
    <Grid
      container
      justify="flex-start"
      align-items="flex-start"
      direction="row"
    >
      {places.map((place) => (
        <Place key={place.id} place={place} onAdd={onAdd} />
      ))}
    </Grid>
  );
};

export default Places;
