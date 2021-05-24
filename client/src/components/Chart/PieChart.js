import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import surveyAPI from "../../utils/surveyAPI";
import {MDBContainer} from "mdbreact"
import { PlayCircleFilledWhite } from "@material-ui/icons";

function PieChart() {
    const [mood, setMood] = useState([]);
    const [userRes, setRes] = useState();
  
    useEffect(() => {
      getChartData();
    }, [])
  
  
    function getChartData() {
      let moodArray = []

      let one = 0;
      let two = 0;
      let three = 0;
      let four = 0;
      let five = 0;

      surveyAPI.getSurveys()
      .then(res => {
        console.log(res.data)

        if (!res.data) {
          setRes("none")
       } else {
  
        let data = res.data
  
        data.forEach(entry => {
          switch (entry.mood) {
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
          }
        })
  
        moodArray.push(one, two, three, four, five);
        console.log(moodArray)
        setMood(moodArray)
      }})
        .catch(err => console.log(err));
    }
    const data = {
        labels: [
          "I feel lousy",
          "I'm not in the best mood",
          "I just feel okay",
          "I feel pretty good",
          "I feel great"
        ],
        datasets: [{
          label: 'My First Dataset',
          data: mood,
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

      const options = {
        plugins: {
          title: {
              display: true,
              text: "Your Mood Patterns",
              fullSize: true,
              font: {
                size: 30,
              }
            }
        },
      }

      if (userRes === "none") {
        return (
           <p></p>
        )
    } else {

  return (
    <MDBContainer style={{ marginTop: "200px" }}>

      <Pie  id="chart4" data={data} options={options} />

    </MDBContainer>
  );
    }
}


export default PieChart