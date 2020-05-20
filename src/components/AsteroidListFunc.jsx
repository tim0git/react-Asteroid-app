import React from "react";
import AsteroidDataCard from "./AsteroidDataCard";

export default function AsteroidListFunc({ data }) {
  return (
    <div className="gridDataCard">
      {data.map((asteroid) => {
        return <AsteroidDataCard key={asteroid.id} data={asteroid} />;
      })}
    </div>
  );
}
