import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";
import { MDBContainer } from "mdbreact"

function LineChart() {
  const [hours, setHours] = useState([]);
  const [dates, setDates] = useState([]);
  const [rec, setRec] = useState([]);
  const [userRes, setRes] = useState();
  
  useEffect(() => {
    getChartData();
  }, [])

  function getChartData() {
    let hoursArray = []
    let dateArray = [];
    let eightArray = [];

    surveyAPI.getSurveys()
    .then(res => {
      console.log(res.data)

      if (!res.data) {
        setRes("none")
     } else {

      let data = res.data

      data.forEach(entry => {
        let date = entry.date
        let newDate = new Date(date).toLocaleDateString()
        eightArray.push(8)
        dateArray.push(newDate)
        hoursArray.push(entry.hoursslept)
      })

      console.log(hoursArray)
      console.log(eightArray)
      setHours(hoursArray);
      setDates(dateArray);
      setRec(eightArray);
    }})
      .catch(err => console.log(err));
  }

  
const data = 
{ 
  labels: dates,
  datasets: [
    {
      label: "Hours Slept",
      data: hours,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    
  //get an array of 8's for each day
    {
      label: "Recommended Hours",
      data: rec,
      fill: false,
      borderColor: "#742774"
    }
  ],
  
};

//attempts to customize. Keeping until charts are finalized.

// const testLine = new Chart (React.createRef(), {
//   type: "line",
//   data: data,
//   options: options,
//   legend: legend,
// })

// const yLabels = {
//   0 : 'newb', 2 : 'codecademy', 4 : 'code-school', 6 : 'bootcamp', 8 : 'junior-dev',
//   10 : 'mid-level', 12 : 'senior-dev', 14 : 'full-stack-dev', 16 : 'famous-speaker',
//   18 : 'unicorn', 20 : 'harambe'
// }

// const options = {
//   scales: {
//       yAxes: [{
//           ticks: {
//               callback: function(value, index, values ) {
//                   // for a value (tick) equals to 8
//                   return yLabels[value];
//                   // 'junior-dev' will be returned instead and displayed on your chart
//               }
//           }
//       }]
//   }
// }
// const legend = {
//   display: true,
//   position: "bottom",
//   labels: {
//     fontColor: "#323130",
//     fontSize: 14
//   }
// };

// const options = {
//   title: {
//     display: true,
//     text: "Chart Title"
//   },
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           suggestedMin: 0,
//           suggestedMax: 100
//         }
//       }
//     ]
//   }
// };
// const options = {
//   scales: {
//     xAxes: [{
//       scaleLabel: {
//         display: true,
//         labelString: 'Years'
//       }
//     }],
//     yAxes: [{
//       ticks: {
//           beginAtZero: true,
//       }
//     }],
//   }     
// }

const options = {
  plugins: {
    title: {
        display: true,
        text: "Your Hours Slept",
        fullSize: true,
        font: {
          size: 30
        }
      }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Dates"
      }
  },

      y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Hours"
          }
      }
    }
  }

  if (userRes == "none") {
    return (
        <p></p>
    )
} else {

  return (
    <MDBContainer style={{ backgroundColor: "white" }}>
     
      <Line data={ data } options={ options }/>
      
    </MDBContainer>
  );
}
}


export default LineChart