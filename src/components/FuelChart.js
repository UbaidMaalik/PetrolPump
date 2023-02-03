import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import { getAllTransections } from "../actions/transection";

const FuelChart = ({ getAllTransections, total_transections }) => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        height: 280,
        id: "basic-bar",

        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 2,
          dashArray: 0,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "Petrol",
        data: [],
      },
      {
        name: "Diesel",
        data: [],
      },
      {
        name: "Supreme",
        data: [],
      },
    ],
  });

  useEffect(() => {
    getAllTransections();
  }, []);

  useEffect(() => {
    setChartData({
      options: { ...chartData.options },
      series: [
        {
          name: "Petrol",
          data: total_transections ? total_transections.petrol : [],
        },
        {
          name: "Diesel",
          data: total_transections ? total_transections.diesel : [],
        },
        {
          name: "Supreme",
          data: total_transections ? total_transections.supreme : [],
        },
      ],
    });
  }, [total_transections]);

  return (
    <div>
      {total_transections && (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          width="900"
          height="400"
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  total_transections: state.transection.total_transections,
});
export default connect(mapStateToProps, { getAllTransections })(FuelChart);
