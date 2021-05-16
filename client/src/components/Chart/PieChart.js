import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from 'axios';
import API from "../../utils/API";
import surveyAPI from "../../utils/surveyAPI";

function PieChart() {
    const [mood, setMood] = useState([]);
 
  
    useEffect(() => {
      getChartData();
    }, [])
  
    //need to comment out process.env.MONGODB_URI in server.js to use seed data.
    function getChartData() {
      let moodArray = []

      let good = 1;
      let bad = 0;
      let okay = 0;

      surveyAPI.getSurveys()
      .then(res => {
        console.log(res.data)
  
        let data = res.data
  
        data.forEach(entry => {
          if (entry.mood == "good") {
            good++
          } else if (entry.mood == "bad") {
            bad++
          } else {
            okay++
          }
        })
  
        moodArray.push(good);
        moodArray.push(bad);
        moodArray.push(okay);
        setMood(moodArray)
      })
        .catch(err => console.log(err));
    }
    const data = {
        labels: [
          "Good",
          "Bad",
          "Okay",
        ],
        datasets: [{
          label: 'My First Dataset',
          data: mood,
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