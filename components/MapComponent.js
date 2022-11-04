import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const MapComponent = ({ searchResults }) => {

  const [selectedLocation, setSelectedLocation] = useState();
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  console.log(center);

  const [viewport, setViewport] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
    width: "100%",
    height: "100%",
  });

  return (
    <Map
      mapboxAccessToken="pk.eyJ1Ijoid2tvb256IiwiYSI6ImNsYTE3dW83ZjA0dm4zbnBxOWFjNHQ5emYifQ.rG0jMKGGTOSejtEoZkIGSw"
      mapStyle="mapbox://styles/wkoonz/cl9yjr8pw000v14o01n8fgboe"
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p onClick={() => setSelectedLocation(result)}className="cursor-pointer text-2xl animate-bounce">📌</p>
          </Marker>
        </div>
      ))}
    </Map>
  );
};

export default MapComponent;
