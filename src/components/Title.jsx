import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Title() {
  return (
    <div className="titleContainer">
      <Typography variant="h3" component="h1">{`My Asteroid App`}</Typography>
    </div>
  );
}

//https://data.nasa.gov/api/odata/v4/gh4g-9sfh?id=1
//https://data.nasa.gov/resource/gh4g-9sfh.json?id=4