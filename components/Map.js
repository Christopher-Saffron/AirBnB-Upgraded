import React, { useState, useEffect } from 'react'
import Map, {Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapComponent({searchResults}) {
    const [selectedLocation, setSelectedLocation] = useState({})
    const [viewport, setViewport] = useState({
                latitude: 35.6331002,
                longitude: 139.6699255,
                zoom: 9
    })



    useEffect(() => {
        const coordinates = searchResults.map(result => ({
            longitude: result.long,
            latitude: result.lat,
        }))
        const center = getCenter(coordinates);
        setViewport(prevState => ({
            ...prevState,
            latitude: center.latitude,
            longitude: center.longitude
        }))
    }, [])

    // useEffect(() => {
    //     console.log(selectedLocation)
    // }, [selectedLocation])
    
    return (
        <Map
            {...viewport}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
            onMove={evt => setViewport(evt.viewState)}
            mapStyle="mapbox://styles/havirsaffron/clg23etci005901oa19b32403"
            // mapStyle="mapbox://styles/mapbox/streets-v9"
            // mapStyle="mapbox://styles/havirsaffron/clg29e4oq002601mw2okg9ziq"
        >

        {selectedLocation?.long && (
            <Popup onClose={() => setSelectedLocation({})} closeOnClick={true} anchor="bottom" latitude={selectedLocation?.lat} longitude={selectedLocation?.long} >
                        {selectedLocation.title}
            </Popup>
        )}

        {searchResults.map((result, i) => {
            return (
            <div key={result.long}>
                <Marker
                    coordinates={[result.long, result.lat]}
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                    anchor="bottom"
                >
                    <p onClick={() => setSelectedLocation(result)} className='cursor-pointer animate-bounce text-2xl'>📌</p>
                </Marker>

                
            </div>
        )
        })}
        </Map>
    )

}

export default MapComponent