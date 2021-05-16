import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";

function DoughnutChart() {

  const [quality, setQuality] = useState([]);
 
  
    useEffect(() => {
      getChartData();
    }, [])
  
    //need to comment out process.env.MONGODB_URI in server.js to use seed data.
    function getChartData() {
      let qualityArray = []

      let good = 1;
      let bad = 0;
      let okay = 0;

      surveyAPI.getSurveys()
      .then(res => {
        console.log(res.data)
  
        let data = res.data
  
        data.forEach(entry => {
          if (entry.sleepquality == "good") {
            good++
          } else if (entry.sleepquality == "bad") {
            bad++
          } else {
            okay++
          }
        })
  
        qualityArray.push(good);
        qualityArray.push(bad);
        qualityArray.push(okay);
        setQuality(qualityArray)
      })
        .catch(err => console.log(err));
    }

  
    const data = {
        labels: [
          'Good',
          'Bad',
          'Okay'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: quality,
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
      <Doughnut data={data} />
    </div>
  );
}


export default DoughnutChart