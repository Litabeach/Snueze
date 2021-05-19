import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";

//change to bubble
function BarChart() {
  const [wakeup, setWakeup] = useState([]);
  const [bedtime, setBedtime] = useState([]);

  const [dates, setDates] = useState([]);


  useEffect(() => {
    getChartData();
  }, [])

  //need to comment out process.env.MONGODB_URI in server.js to use seed data.
  // Here we can either use getHours or getMinutes if its a time stamp, otherwise we can do (hours * 30 + minutes) after splitting string at colon.
  function getChartData() {
    let wakeArray = []
    let bedArray = []
    let dateArray = [];

    surveyAPI.getSurveys()
      .then(res => {
        console.log(res.data)

        let data = res.data

        data.forEach(entry => {
          let date = entry.date
          let newDate = new Date(date).toLocaleDateString()
          dateArray.push(newDate)
          wakeArray.push(entry.wakeuptime)
          bedArray.push(entry.bedtime)
        })

        console.log(wakeArray)
        console.log(bedArray)
        setWakeup(wakeArray);
        setBedtime(bedArray);
        setDates(dateArray)
      })
      .catch(err => console.log(err));
  }
  const data = {
    labels: dates,
    datasets: [
      {
        label: "Bed Time",
        data: [2, 4, 4, 7],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      // {
      //   label: "Wake Up Time",
      //   data: wakeup,
      //   fill: false,
      //   borderColor: "#742774"
      // }
    ]
  };

  const yLabels = {
  1 : "7:00pm", 2 : "8:00pm", 3 : "9:00pm", 4 : "10:00pm", 5 : "11:00pm",
  6 : '12:00pm', 7 : '1:00am', 8 : '2:00am', 9 : '3:00am',
  10 : '4:00am', 11 : '5:00am', 12 : "6:00am"
}

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Dates"
        }
      },

      y: {
        title: {
          display: true,
          text: "Times"
        },
        ticks: {
          callback: function (value, index, values) {
            
            return yLabels[value];
            
          }
        }
      }
    }
  }



  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <Bar data={data} options={options}/>
    </div>
  );
}


export default BarChart