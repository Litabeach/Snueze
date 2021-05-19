import React, { useEffect, useState } from "react";
import { Bubble } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";

//change to bubble
function BubbleChart() {
  
  const [bedtime, setBedtime] = useState([]);

  // const [hours, setHours] = useState([]);


  useEffect(() => {
    getChartData();
  }, [])

  //need to comment out process.env.MONGODB_URI in server.js to use seed data.
  // Here we can either use getHours or getMinutes if its a time stamp, otherwise we can do (hours * 30 + minutes) after splitting string at colon.
  function getChartData() {
    let bubbleArray = []
 

    surveyAPI.getSurveys()
      .then(res => {
        console.log(res.data)

        let data = res.data

        data.forEach(entry => {
          let time = entry.bedtime.replace(":", ".")
          let timeFloat = parseFloat(time)
          
          bubbleArray.push({ x: entry.hoursslept, y: timeFloat, r: 15 })
        })

        console.log(bubbleArray)
        setBedtime(bubbleArray);
        // setDates(dateArray)
      })
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
          0 : '00:00', 1 : '01:00', 2 : '02:00', 3 : '03:00', 4 : '04:00',
          5 : '05:00', 6 : '06:00', 7 : '07:00', 8 : '08:00',
          9 : '09:00', 10 : '10:00',  11 : '11:00', 12 : '12:00', 13 : '13:00', 14 : '14:00',
          15 : '15:00', 16 : '16:00', 17 : '17:00', 18 : '18:00',
          19 : '19:00', 20 : '20:00', 21: '21:00',  22 : '22:00', 23 : '23:00', 24: "24:00"
        }
        
    
    
    const options = {
      scales: {
        x: {
          title: {
            beginAtZero : true,
            display: true,
            text: "Hours of Sleep"
          }
      },
    
          y: {
              title: {
                display: true,
                text: "Bed Time in Military Time",
              },
              ticks: {
                                  callback: function(value, index, values ) {
                                      // for a value (tick) equals to 8
                                      return yLabels[value];
                                      // 'junior-dev' will be returned instead and displayed on your chart
                                  }
                              }
          }
        }
      }





  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <Bubble data={data} options={options}/>
    </div>
  );
}


export default BubbleChart