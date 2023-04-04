import React, { useState } from 'react'
import Map from 'react-map-gl';

function MapComponent() {
    const [viewport, setViewport] = useState({
                latitude: 35.6673581,
                longitude: 139.6929497,
                zoom: 11
            })
    
      return <Map
      
        {...viewport}
        width={'100%'}
        height={'100%'}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
        onMove={evt => setViewport(evt.viewState)}
        mapStyle="mapbox://styles/havirsaffron/clg23etci005901oa19b32403"
      />;

}

export default MapComponent