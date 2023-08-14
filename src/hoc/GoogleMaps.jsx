import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 40.192333,
  lng: 29.072639,
};

export default function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "todo",
  });

  const [map, setMap] = useState(null);
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  ) : (
    <></>
  );
}
