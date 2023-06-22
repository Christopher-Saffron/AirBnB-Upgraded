import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function LocationMap({ coords }) {
  const [viewport, setViewport] = useState({
    latitude: coords.lat,
    longitude: coords.long,
    zoom: 9,
  });

  return (
    <div className=" py-5 border-t border-gray-300 px-5">
      <p className="text-xl font-semibold pb-5 px-3 text-gray-700">
        Where You'll be staying
      </p>

      <div className="w-full h-96">
        <Map
          {...viewport}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
          onMove={(evt) => setViewport(evt.viewState)}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker latitude={coords.lat} longitude={coords.long}>
            <p className="cursor-pointer animate-bounce text-2xl">📌</p>
          </Marker>
        </Map>
      </div>
    </div>
  );
}

export default LocationMap;
