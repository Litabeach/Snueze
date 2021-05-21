import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";

// sleep quality = 1)I was up all night 2) I tossed and turned 3) I wokeup a couple of times 4) I got a decent night's sleep 5) I slept like a baby.

function DoughnutChart() {

  const [quality, setQuality] = useState([]);
  const [userRes, setRes] = useState();


  useEffect(() => {
    getChartData();
  }, [])

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

        if (!res.data) {
          setRes("none")
       } else {

        let data = res.data

        data.forEach(entry => {
          switch (entry.sleepquality) {
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

        qualityArray.push(one, two, three, four, five);
        console.log(qualityArray)
        setQuality(qualityArray)
      }})
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

  if (userRes == "none") {
    return (
        <h3>No data to show yet! Keep tracking your sleep to see your patterns and insights to your sleep behavior</h3>
    )
} else {

  return (
    <div className="App" style={{ marginTop: "200px" }}>
      <Doughnut data={data} />
    </div>
  );
}
}


export default DoughnutChart