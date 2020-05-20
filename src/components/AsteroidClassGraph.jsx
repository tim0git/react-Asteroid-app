import React from "react";
import { Chart } from "react-google-charts";
import classArrayModifyer from "../utils/utils";
export default function AsteroidClassGraph({ data }) {
  let inputData = classArrayModifyer(data);

  return (
    <div className="classChartContainer">
      <Chart
        className="classChart"
        width={"350x"}
        height={"400px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={inputData}
        options={{
          legend: "right",
          scale: 100,
          title: "Classification Pie Chart"
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}
