import React, { useState, useEffect } from 'react'
import Map, {Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';
import Link from 'next/link';
import Image from 'next/image';

function LocationMap({coords}) {


    const [viewport, setViewport] = useState({
                latitude: coords.lat,
                longitude: coords.long,
                zoom: 9
    })
    
    useEffect(() => {
        // setViewport(prevState => ({
        //     ...prevState,
        //     latitude: center.latitude,
        //     longitude: center.longitude
        // }))
        console.log(coords)
    }, [])
    
    return (
      <div className=' py-5 border-t border-gray-300 '>
        <p className='text-xl font-semibold pb-5 px-3 text-gray-700'>Where You'll be staying</p>

        <div className='w-full h-96'>
          <Map
              {...viewport}
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
              onMove={evt => setViewport(evt.viewState)}
              // mapStyle="mapbox://styles/havirsaffron/clg23etci005901oa19b32403"
              mapStyle="mapbox://styles/mapbox/streets-v9"
              // mapStyle="mapbox://styles/havirsaffron/clg29e4oq002601mw2okg9ziq"
          >
        
  
            <Marker latitude={coords.lat} longitude={coords.long}>
              <p className='cursor-pointer animate-bounce text-2xl'>📌</p>
            </Marker>


          {/* {selectedLocation && (
              <Popup
                  latitude={Number(selectedLocation.lat)}
                  longitude={Number(selectedLocation.long)}
                  onClose={() => setSelectedLocation(null)}
              >
                  <div className='flex flex-col text-center items-center bg-white'>
                      <div className='relative  w-32 h-32'>
                          <Image src={selectedLocation.img} fill className='object-contain' alt='' />
                      </div>
                      <div className='w-full'>
                          <h3>{selectedLocation.title}</h3>
                          <Link className='text-blue-500 underline' href={`/place/${selectedLocation.id}`}>Visit page</Link>
                      </div>
                  </div>
              </Popup>
          )} */}
          </Map>
        </div>
      </div>
    )

}

export default LocationMap