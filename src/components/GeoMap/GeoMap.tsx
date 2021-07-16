import React, { useContext, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  MarkerProps,
} from "react-simple-maps";
import { GlobalContext } from "../../context/GlobalContext";

const GeoMap = () => {
  const { data } = useContext(GlobalContext);

  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  const markers: MarkerProps = {
    offset: -30,
    name: data.name,
    coordinates: [data.coord.lon, data.coord.lat],
  };
  return (
    <ComposableMap width={700}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: { fill: "#6d6c99" },
                hover: { fill: "#7e7ccc" },

                pressed: { border: "0", outline: 0 },
              }}
            />
          ))
        }
      </Geographies>
      <Marker key={markers.name} coordinates={markers.coordinates}>
        <g
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(-12, -24)"
        >
          <circle cx="12" cy="10" r="3" />
          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
        </g>
        <text
          textAnchor="middle"
          y={markers.offset}
          style={{
            fontFamily: "system-ui",
            fill: "#fff",
            fontSize: "1.5em",
            fontWeight: "bold",
          }}
        >
          {markers.name}
        </text>
      </Marker>
    </ComposableMap>
  );
};

export default GeoMap;
