import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from 'axios';
import API from "../../utils/API";
import surveyAPI from "../../utils/surveyAPI";

function LineChart() {

  useEffect(() => {
    getChartData();
  }, [])

  //need to comment out process.env.MONGODB_URI in server.js to use seed data.
  async function getChartData() {
    surveyAPI.getSurveys()
    .then(res => {
      console.log(res)
    })
      .catch(err => console.log(err));
  }

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

  return (
    <div className="App">
      <Line data={data} />
    </div>
  );
}


export default LineChart