import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";
import { Container } from "react-bootstrap"


function LineChart() {
  const [hours, setHours] = useState([]);
  const [dates, setDates] = useState([]);
  const [rec, setRec] = useState([]);
  const [userRes, setRes] = useState();
  
  useEffect(() => {
    getChartData();
  }, [])

  // finds user surveys from db and saves relative values to arrays
  function getChartData() {
    let hoursArray = []
    let dateArray = [];
    let eightArray = [];

    surveyAPI.getSurveys()
    .then(res => {
      
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

      setHours(hoursArray);
      setDates(dateArray);
      setRec(eightArray);
    }})
      .catch(err => console.log(err));
  }

//set data for chart
const data = 
{ 
  labels: dates,
  datasets: [
    {
      label: "Hours Slept",
      data: hours,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      color: "white",
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

// chart customization
const options = {
  plugins: {
    title: {
        display: true,
        text: "Your Hours Slept",
        fullSize: true,
        font: {
          size: 30
        },
        color: "grey"
      }
  },
  scales: {
    x: [{
      title: {
        display: true,
        text: "Dates",
        color: "grey",
        gridLines: [null, "white"]
      }, 
      gridLines: [null, "white"], 
  }],

      y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Hours",
            color: "grey",
            gridLines: [null, "white"]
          },
          gridLines: [null, "white"]
      }
    },
    // elements: { 
    //   line: { 
    //     color: "yellow",
    //     borderColor: "yellow",
    //     backgroundColor: "yellow",
    //     borderWidth: "3px"
    //   }
    // }
}

  //conditional render logic
  if (userRes === "none") {
    return (
        <p></p>
    )
} else {

  return (
    <>
      <Line id="chart2" data={ data } options={ options }/>
    </>
  );
}
}


export default LineChart