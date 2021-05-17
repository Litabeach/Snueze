import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";

// sleep quality = 1)I was up all night 2) I tossed and turned 3) I wokeup a couple of times 4) I got a decent night's sleep 5) I slept like a baby.

function DoughnutChart() {

  const [quality, setQuality] = useState([]);
 
  
    useEffect(() => {
      getChartData();
    }, [])
  
    //need to comment out process.env.MONGODB_URI in server.js to use seed data.
    function getChartData() {
      let qualityArray = []

      let one = 0;
      let two = 0;
      let three = 0;
      let four = 0;
      let five = 0;

      surveyAPI.getSurveys()
      .then(res => {
        console.log(res.data)
  
        let data = res.data
  
        data.forEach(entry => {
          switch (entry.sleepquality) {
            case "I was up all night":
              one++;
              break;
            case "I tossed and turned":
              two++;
              break;
            case "I wokeup a couple of times":
              three++;
              break;
            case "I got a decent night's sleep":
              four++;
              break;
            case "I slept like a baby":
              five++;
              break;
          }
        })
  
        qualityArray.push(one, two, three, four, five);
        console.log(qualityArray)
        setQuality(qualityArray)
      })
        .catch(err => console.log(err));
    }

  
    const data = {
        labels: [
          "I was up all night",
          "I tossed and turned",
          "I wokeup a couple of times",
          "I got a decent night's sleep",
          "I slept like a baby"
        ],
        datasets: [{
          label: 'My First Dataset',
          data: quality,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(72, 151, 33)',
            'rgb(209, 20, 10)',
          ],
          hoverOffset: 4
        }]
      };

  return (
    <div className="App" style={{ marginTop: "200px" }}>
      <Doughnut data={data} />
    </div>
  );
}


export default DoughnutChart