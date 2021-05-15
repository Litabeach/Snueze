import React, { useEffect, useState } from "react";
import { Line, Chart } from "react-chartjs-2";
import axios from 'axios';
import API from "../../utils/API";
import surveyAPI from "../../utils/surveyAPI";

function LineChart() {
  const [wakeUp, setWakeUp] = useState([]);


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
      setWakeUp(wakeupArray)
    })
      .catch(err => console.log(err));
  }

//   var yLabels = {
//     0 : 'newb', 2 : 'codecademy', 4 : 'code-school', 6 : 'bootcamp', 8 : 'junior-dev',
//     10 : 'mid-level', 12 : 'senior-dev', 14 : 'full-stack-dev', 16 : 'famous-speaker',
//     18 : 'unicorn', 20 : 'harambe'
// }
const data = 
{
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: wakeUp,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: wakeUp,
      fill: false,
      borderColor: "#742774"
    }
  ]
  
}

const testLine = new Chart (React.createRef(), {
  type: "line",
  data: data
})

// const options = {
//   scales: {
//       yAxes: [{
//           ticks: {
//               callback: function(value) {
//                   // for a value (tick) equals to 8
//                   return yLabels[value];
//                   // 'junior-dev' will be returned instead and displayed on your chart
//               }
//           }
//       }]
//   }
// }




  return (
    <div style={{ backgroundColor: "white" }}>
      <Line data={data}
      // options={options} 
      />
      <testLine />
    </div>
  );
}


export default LineChart