import React, { useEffect, useState } from "react";
import { Bubble } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";

function BubbleChart() {

  const [bedtime, setBedtime] = useState([]);
  const [userRes, setRes] = useState();


  useEffect(() => {
    getChartData();
  }, [])

  //get user surveys and save to arrays
  function getChartData() {
    let bubbleArray = []

    surveyAPI.getSurveys()
      .then(res => {

        if (!res.data) {
          setRes("none")
       } else {

        let data = res.data

        data.forEach(entry => {
          let time = entry.bedtime.replace(":", ".")
          let timeFloat = parseFloat(time)
          bubbleArray.push({ x: entry.hoursslept, y: timeFloat, r: 15 })
        })

        setBedtime(bubbleArray);
      }})
      .catch(err => console.log(err));
  }


// data for chart
  const data = {
    datasets: [
      {
        label: 'Bed Time Vs Hours Slept',
        data: bedtime,
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  //object for y axis labels
  const yLabels = {
    0: "12:00AM", 1: '1:00AM', 2: '2:00AM', 3: '3:00AM', 4: '4:00AM',
    5: '5:00AM', 6: '6:00AM', 7: '7:00AM', 8: '8:00AM',
    9: '9:00AM', 10: '10:00AM', 11: '11:00AM', 12: '12:00PM', 13: '1:00PM', 14: '2:00PM',
    15: '3:00PM', 16: '4:00PM', 17: '5:00PM', 18: '6:00PM',
    19: '7:00PM', 20: '8:00PM', 21: '9:00PM', 22: '10:00PM', 23: '11:00PM'
  }


//chart customization
  const options = {
    plugins: {
      title: {
          display: true,
          text: "Your Hours Slept Vs Bed Time",
          fullSize: true,
          color: "grey",
          font: {
            size: 30
          }
        }
    },
    scales: {
      x: {
        title: {
          beginAtZero: true,
          display: true,
          text: "Hours of Sleep",
          color: "grey",
        }
      },

      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Bedtime",
          color: "grey",
          font: { 
            size: 14
          }
        },
        ticks: {
          stepSize: 1,
          callback: function (value, index, values) {

            return yLabels[value];

          }
        }
      }
    }
  }


//conditional rendering
  if (userRes === "none") {
    return (
        <p></p>
    )
} else {

  return (
    <>
      <Bubble id="chart1" data={data} options={options} />
    </>
  );
}
}


export default BubbleChart