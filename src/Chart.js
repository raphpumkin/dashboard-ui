import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  const [chart, setChart] = useState({
    series: [
      {
        name: "calories",
        data: [159, 237, 262, 305, 356],
      },
      {
        name: "Fat&nbsp;(g)",
        data: [160.0, 190.0, 160.0, 300.7, 260.0],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        categories: [
          "frozen yoghurt",
          "Ice cream sandwich",
          "Eclair",
          "Cupcake",
          "Gingerbread",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  return (
    <ReactApexChart
    options={chart.options}
    series={chart.series}
    type="area"
    height={400}
  />
  )
}

export default Chart