import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Card,
  CardActions,
  Collapse,
  CardContent,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Map from "./Map";

const LocationOn = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Place = ({ place, onAdd }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300 }} className="place">
      <img src={place.image} class="placeImage" alt={place.alt} />
      <h3>{place.title}</h3>
      <CardActions>
        <Button
          size="medium"
          style={{
            backgroundColor: "#91ccff",
            color: "white",
            textTransform: "lowercase",
          }}
          onClick={() => onAdd({ place })}
        >
          Add
        </Button>
        <LocationOn
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show location"
          style={{ size: "large", color: "#91ccff", margin: "0 0 0 180px" }}
        >
          <LocationOnIcon />
        </LocationOn>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Map place={place} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Place;
