import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";

function PieChart() {

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
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

  return (
    <div className="App">
      <Pie data={data} />
    </div>
  );
}


export default PieChart