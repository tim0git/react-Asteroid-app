import React from "react";
import { Chart } from "react-google-charts";
import yearArrayModifier from "../utils/yearArrayModifier";

export default function YearMassGraph({ data }) {
  console.dir(data);
  
  let inputData = yearArrayModifier(data);
  return (
    <div className="classChartContainer">
      <Chart
        className="classChart"
        width={"320px"}
        height={"350px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={inputData}
        options={{
          chart: {
            title: "Year vs Mass",
          },
        }}
      />
    </div>
  );
}
