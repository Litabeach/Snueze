import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";

function PieChart() {
    const [mood, setMood] = useState([]);
 
  
    useEffect(() => {
      getChartData();
    }, [])
  
  
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
            case "1":
              one++;
              break;
            case "2":
              two++;
              break;
            case "3":
              three++;
              break;
            case "4":
              four++;
              break;
            case "5":
              five++;
              break;
          }
        })
  
        moodArray.push(one, two, three, four, five);
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