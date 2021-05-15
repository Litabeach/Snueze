import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";

function BarChart() {

  useEffect(() => {
    getChartData();
  }, [])

  //need to comment out process.env.MONGODB_URI in server.js to use seed data.
  function getChartData() {
    let wakeupArray = []


    surveyAPI.getSurveys()
    .then(res => {
      console.log(res.data)

      let data = res.data

      data.forEach(entry => {
        wakeupArray.push(entry.wakeuptime)
      })

      console.log(wakeupArray)
      // setWakeUp(wakeupArray)
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
    <div style={{ backgroundColor: "white" }}>
      <Bar data={data} />
    </div>
  );
}


export default BarChart