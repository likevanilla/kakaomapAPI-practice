import React, { useState } from "react";
import { Map, Polygon } from "react-kakao-maps-sdk";
import "./App.css";

export default function App() {
  const [mapCenter] = useState({ lat: 37.566826, lng: 126.9786567 });

  return (
    <div className="mapWrapper">
      <Map className="map" center={mapCenter} level={8} draggable>
        {/* 성공회대학교 다각형(폴리곤) */}
        <Polygon
          path={[
            { lat: 37.48810143111946, lng: 126.82452978219033 },
            { lat: 37.48695810335867, lng: 126.8251713008845 },
            { lat: 37.486670200045545, lng: 126.82545464527402 },
            { lat: 37.48637306909926, lng: 126.8255910192975 },
            { lat: 37.48648143982792, lng: 126.82576037101748 },
            { lat: 37.486591139557376, lng: 126.82683427430024 },
            { lat: 37.48673551555281, lng: 126.82698093138627 },
            { lat: 37.48729418769895, lng: 126.82701356403113 },
            { lat: 37.48802325474698, lng: 126.82650306144517 },
            { lat: 37.48835113956948, lng: 126.82583517879134 },
            { lat: 37.48856577528182, lng: 126.82474918693414 },
          ]}
          strokeWeight={2} // 선의 두께입니다
          strokeColor={"#000000"} // 선의 색깔입니다
          strokeOpacity={0.8} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          fillColor={"#ffac13"} // 채우기 색깔입니다
          fillOpacity={0.5} // 채우기 불투명도 입니다
        />
      </Map>
    </div>
  );
}
