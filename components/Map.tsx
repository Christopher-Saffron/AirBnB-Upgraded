import React, { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from "next/link";
import Image from "next/image";
import { SearchResult } from "@/lib/getSearchResults";

function MapComponent({ searchResults }: { searchResults: [SearchResult] }) {
  const [selectedLocation, setSelectedLocation] =
    useState<SearchResult | null>();
  const [viewport, setViewport] = useState({
    latitude: 35.6331002,
    longitude: 139.6699255,
    zoom: 9,
  });

  useEffect(() => {
    const coordinates = searchResults.map((result: SearchResult) => ({
      longitude: result.long,
      latitude: result.lat,
    }));
    const center: any = getCenter(coordinates);
    setViewport((prevState) => ({
      ...prevState,
      latitude: center.latitude,
      longitude: center.longitude,
    }));
  }, []);

  return (
    <Map
      {...viewport}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      onMove={(evt) => setViewport(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {searchResults.map((result, index) => (
        <Marker
          key={index}
          latitude={Number(result.lat)}
          longitude={Number(result.long)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedLocation(result as any);
            }}
          >
            <p className="cursor-pointer animate-bounce text-2xl">📌</p>
          </button>
        </Marker>
      ))}

      {selectedLocation && (
        <Popup
          latitude={Number(selectedLocation.lat)}
          longitude={Number(selectedLocation.long)}
          onClose={() => setSelectedLocation(null)}
        >
          <div className="flex flex-col text-center items-center bg-white">
            <div className="relative  w-32 h-32">
              <Image
                src={selectedLocation.img}
                fill
                className="object-contain"
                alt=""
              />
            </div>
            <div className="w-full">
              <h3>{selectedLocation.title}</h3>
              <Link
                className="text-blue-500 underline"
                href={`/place/${selectedLocation.id}`}
              >
                Visit page
              </Link>
            </div>
          </div>
        </Popup>
      )}
    </Map>
  );
}

export default MapComponent;
