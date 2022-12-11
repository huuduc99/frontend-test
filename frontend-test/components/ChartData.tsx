import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  options: any;
  chartData: any;
  styles: any;
}

function ChartData({ options, chartData, styles }: Props) {
  return (
    <Line
      options={options}
      data={chartData}
      style={styles}
    />
  )
}

export default ChartData