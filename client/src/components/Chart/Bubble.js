import React, { useEffect, useState } from "react";
import { Bubble } from "react-chartjs-2";
import axios from 'axios';
import API from "../../utils/API";
import surveyAPI from "../../utils/surveyAPI";

function BubbleChart() {
  const [hours, setHours] = useState([]);
  const [dates, setDates] = useState([]);
  const [rec, setRec] = useState([]);

  useEffect(() => {
    getChartData();
  }, [])

  //need to comment out process.env.MONGODB_URI in server.js to use seed data.
  function getChartData() {
    let hoursArray = []
    let dateArray = [];
    let eightArray = [];

    surveyAPI.getSurveys()
    .then(res => {
      console.log(res.data)

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
    })
      .catch(err => console.log(err));
  }

const arrOne = [{
    x: 11,
    y: 0,
    r: 15
  }, {
    x: 0,
    y: 10
  }, {
    x: 10,
    y: 5
  }, {
    x: 0.5,
    y: 5.5
  }]

  const arrTwo = [{
    x: 6,
    y: 0
  }, {
    x: 7,
    y: 10
  }, {
    x: 8,
    y: 4
  }, {
    x: 3,
    y: 9
  }]

  const data = {
    datasets: [
        {
      label: 'Scatter Dataset',
      data: arrOne,
      backgroundColor: 'rgb(255, 99, 132)'
    },

{
    label: 'Second Data',
    data: arrTwo,
    backgroundColor: 'black' 
}
],
  };


const options = {
  scales: {
    x: {
      title: {
        beginAtZero : true,
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


  return (
    <div style={{ backgroundColor: "white" }}>
     
      <Bubble data={ data } options={options}/>
      
    </div>
  );
}


export default BubbleChart