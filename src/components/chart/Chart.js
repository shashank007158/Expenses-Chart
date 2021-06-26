import React from "react"
import ChartBar from "./ChartBar"

const Chart = (props) => {
  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value)
  const maxValue = Math.max(...valueArray)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  )
}
export default Chart
