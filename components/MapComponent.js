import Map from "react-map-gl";

const MapComponent = () => {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1Ijoid2tvb256IiwiYSI6ImNsYTE3dW83ZjA0dm4zbnBxOWFjNHQ5emYifQ.rG0jMKGGTOSejtEoZkIGSw"
      mapStyle="mapbox://styles/wkoonz/cl9yjr8pw000v14o01n8fgboe"
      viewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 11, 
        width: '100%',
        height: '100%'
      }}
    ></Map>
  );
};

export default MapComponent
