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
        backgroundColor: 'rgb(255, 99, 132)'
      },
    ],
  };

  //object for y axis labels
  const yLabels = {
    1: '01:00', 2: '02:00', 3: '03:00', 4: '04:00',
    5: '05:00', 6: '06:00', 7: '07:00', 8: '08:00',
    9: '09:00', 10: '10:00', 11: '11:00', 12: '12:00', 13: '13:00', 14: '14:00',
    15: '15:00', 16: '16:00', 17: '17:00', 18: '18:00',
    19: '19:00', 20: '20:00', 21: '21:00', 22: '22:00', 23: '23:00', 24: "00:00"
  }


//chart customization
  const options = {
    plugins: {
      title: {
          display: true,
          text: "Your Hours Slept Vs Bed Time",
          fullSize: true,
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


//conditional rendering
  if (userRes === "none") {
    return (
        <p></p>
    )
} else {

  return (
    <MDBContainer>
      <Bubble id="chart1" data={data} options={options} />
    </MDBContainer>
  );
}
}


export default BubbleChart