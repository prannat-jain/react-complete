import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  //converting object returned by map to an array of numbers
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //destructured and broken array is put into Math.max using ...
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {/* instead of returning separate ChartBar tags we use a map which get data from props*/}

      {/*Using labels as unique identifiers(key) instead of id*/}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
