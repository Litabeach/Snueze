import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from 'axios';
import API from "../../utils/API";
import surveyAPI from "../../utils/surveyAPI";

// mood = 1)I feel lousy. 2) I'm not in the best mood. 3) I just feel okay. 4) I feel pretty good 5) I feel great.

function PieChart() {
    const [mood, setMood] = useState([]);
 
  
    useEffect(() => {
      getChartData();
    }, [])
  
    //need to comment out process.env.MONGODB_URI in server.js to use seed data.
    function getChartData() {
      let moodArray = []

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
          switch (entry.mood) {
            case "I feel lousy":
              one++;
              break;
            case "I'm not in the best mood":
              two++;
              break;
            case "I just feel okay":
              three++;
              break;
            case "I feel pretty good":
              four++;
              break;
            case "I feel great":
              five++;
              break;
          }

          // if (entry.mood == "good") {
          //   good++
          // } else if (entry.mood == "bad") {
          //   bad++
          // } else {
          //   okay++
          // }
        })
  
        moodArray.push(one, two, three, four, five);
        // moodArray.push(bad);
        // moodArray.push(okay);
        console.log(moodArray)
        setMood(moodArray)
      })
        .catch(err => console.log(err));
    }
    const data = {
        labels: [
          "I feel lousy",
          "I'm not in the best mood",
          "I just feel okay",
          "I feel pretty good",
          "I feel great"
        ],
        datasets: [{
          label: 'My First Dataset',
          data: mood,
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
      <Pie data={data} />
    </div>
  );
}


export default PieChart