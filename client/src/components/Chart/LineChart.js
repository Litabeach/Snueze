import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";
import { MDBContainer } from "mdbreact";

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

// chart customization
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

  //conditional render logic
  if (userRes === "none") {
    return (
        <p></p>
    )
} else {

  return (
    <MDBContainer>
     
      <Line id="chart2" data={ data } options={ options }/>
      
    </MDBContainer>
  );
}
}


export default LineChart