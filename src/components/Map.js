import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SimpleMap = () => {
  const mapRef = useRef(null);
  const latitude = 33.6844;
  const longitude = 73.0479;

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer
      center={[33.713, 73.1615]}
      zoom={13}
      ref={mapRef}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[33.713, 73.1615]} />
      {/* Additional map layers or components can be added here */}
    </MapContainer>
  );
};

export default SimpleMap;
