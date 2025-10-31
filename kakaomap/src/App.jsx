import React, { useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import "./App.css";

export default function App() {
  const [mapCenter] = useState({ lat: 37.566826, lng: 126.9786567 });

  return (
    <div className="mapWrapper">
      <Map className="map" center={mapCenter} level={8} draggable />
    </div>
  );
}
