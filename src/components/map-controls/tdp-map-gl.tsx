import Map, {
  FullscreenControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import { IViewState } from "./types";
import { MAPBOX_TOKEN, defaultState } from "../../utils/constants";
import { useState } from "react";

import "mapbox-gl/dist/mapbox-gl.css";

const TdpMapGL = () => {
  const [viewState, setViewState] = useState<IViewState>(defaultState);

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={MAPBOX_TOKEN}
      style={{ width: "100vw", height: "100vh" }}
    >
      <FullscreenControl position={"top-left"} />
      <NavigationControl position={"top-left"} />
      <ScaleControl />
    </Map>
  );
};

export default TdpMapGL;
