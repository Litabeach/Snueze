import React, { useEffect, useState } from "react";
import { Bubble } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";
import { MDBContainer } from "mdbreact"

function BubbleChart() {

  const [bedtime, setBedtime] = useState([]);
  const [userRes, setRes] = useState();


  useEffect(() => {
    getChartData();
  }, [])

  function getChartData() {
    let bubbleArray = []

    surveyAPI.getSurveys()
      .then(res => {
        console.log(res.data)

        if (!res.data) {
          setRes("none")
       } else {

        let data = res.data

        data.forEach(entry => {
          let time = entry.bedtime.replace(":", ".")
          let timeFloat = parseFloat(time)

          bubbleArray.push({ x: entry.hoursslept, y: timeFloat, r: 15 })
        })

        console.log(bubbleArray)
        setBedtime(bubbleArray);
      }})
      .catch(err => console.log(err));
  }



  const data = {
    datasets: [
      {
        label: 'Bed Time Vs Hours Slept',
        data: bedtime,
        backgroundColor: 'rgb(255, 99, 132)'
      },
    ],
  };

  const yLabels = {
    1: '01:00', 2: '02:00', 3: '03:00', 4: '04:00',
    5: '05:00', 6: '06:00', 7: '07:00', 8: '08:00',
    9: '09:00', 10: '10:00', 11: '11:00', 12: '12:00', 13: '13:00', 14: '14:00',
    15: '15:00', 16: '16:00', 17: '17:00', 18: '18:00',
    19: '19:00', 20: '20:00', 21: '21:00', 22: '22:00', 23: '23:00', 24: "00:00"
  }



  const options = {
    scales: {
      x: {
        title: {
          beginAtZero: true,
          display: true,
          text: "Hours of Sleep"
        }
      },

      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Bed Time in Military Time",
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



  if (userRes === "none") {
    return (
        <p></p>
    )
} else {

  return (
    <MDBContainer style={{ backgroundColor: "white" }}>
      <Bubble id="chart1" data={data} options={options} />
    </MDBContainer>
  );
}
}


export default BubbleChart