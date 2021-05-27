import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";

function DoughnutChart() {

  const [quality, setQuality] = useState([]);
  const [userRes, setRes] = useState();


  useEffect(() => {
    getChartData();
  }, [])

  // gets user surveys and saves to array
  function getChartData() {
    let qualityArray = []

    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;

    surveyAPI.getSurveys()
      .then(res => {
      
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
            default:
              console.log("noData")
          }
        })

        qualityArray.push(one, two, three, four, five);
        setQuality(qualityArray)
      }})
      .catch(err => console.log(err));
  }

// data for chart
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
        'rgb(223, 134, 153)',
        'rgb(55, 126, 173)',
        'rgb(87, 110, 202)',
        'rgb(107, 75, 163)',
        'rgb(165, 84, 116)',
      ],
      hoverOffset: 4
    }]
  };

  //customization for chart
  const options = {
    mainAspectRatio: false,
    plugins: {
      title: {
          display: true,
          text: "Your Sleep Quality",
          fullSize: true,
          color: "grey",
          font: {
            size: 30,
          }
        }
    },
  }

  //conditional render
  if (userRes === "none") {
    return (
       <p></p>
    )
} else {

  return (
    <>
      <Doughnut  id="chart3" data={data} width={"500%"} options={options} />
    </>
  );
}
}


export default DoughnutChart