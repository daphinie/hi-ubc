import ReactMapGL, { Marker } from "react-map-gl";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function Map({ place }) {
  const [viewport, setViewport] = useState({
    latitude: place.latitude,
    longitude: place.longitude,
    width: "268px",
    height: "268px",
    zoom: 15,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker
          key={place.id}
          latitude={place.latitude}
          longitude={place.longitude}
        >
          <LocationOnIcon
            style={{ size: "small", color: "red" }}
          ></LocationOnIcon>
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default Map;
