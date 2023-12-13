import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const SummaryChart = ({ details }) => {
  const data = {
    labels: ["Safe", "Probation", "Loose your job"],
    datasets: [
      {
        label: "Work Chart",
        data: [details[0].value, details[1].value, details[2].value],
        backgroundColor: ["#049805", "#FEAE0D", "#FF0036"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="flex flex-col items-center justify-center my-8 md:w-1/2 mx-auto">
      <Doughnut data={data} />
    </div>
  );
};

export default SummaryChart;
