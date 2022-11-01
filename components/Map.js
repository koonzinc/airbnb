import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';

const Map = () => {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        
    })

  return (
    <ReactMapGL mapStyle="mapbox://styles/wkoonz/cl9yjr8pw000v14o01n8fgboe" mapboxApiAccessToken={process.env.mapbox_key}>

    </ReactMapGL>
  )
}

export default Map