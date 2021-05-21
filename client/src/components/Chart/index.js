import React, {useState, useEffect} from "react"
import LineChart from "./LineChart"
import Doughnut from "./DoughnutChart"
import Pie from "./PieChart"
import Bubble from "./Bubble"
import surveyAPI from "../../utils/surveyAPI";
import Notes from "../Notes"

function Chart() {
    const [avgHours, setAvgHours] = useState();
    const [avgBedtime, setAvgBedtime] = useState();
    const [userRes, setRes] = useState();


    useEffect(() => {
        getHourData();
        // getBedData();
    }, [])

    function getHourData() {
        let hoursArray = [];
        let bedArray = [];

        surveyAPI.getSurveys()
            .then(res => {

                if (!res.data) {
                   setRes("none")
                } else {

                let data = res.data
                data.forEach(entry => {
                    hoursArray.push(entry.hoursslept)
                    let time = entry.bedtime.replace(":", ".")
                    let timeInt = parseInt(time)
                    bedArray.push(timeInt)
                  })

                let bedDuplicates = []

                const tempBedArray = [...bedArray].sort()

                for (let i = 0; i < tempBedArray.length; i++) {
                    if (tempBedArray[i + 1] === tempBedArray[i]) {
                        bedDuplicates.push(tempBedArray[i])
                    }
                }
                

                let hourDuplicates = []

                const tempArray = [...hoursArray].sort()

                for (let i = 0; i < tempArray.length; i++) {
                    if (tempArray[i + 1] === tempArray[i]) {
                        hourDuplicates.push(tempArray[i])
                    }
                }
                console.log(bedArray)
                console.log(bedDuplicates)
                setAvgBedtime(bedDuplicates);
                console.log(hourDuplicates)
                setAvgHours(hourDuplicates);
            }})
        
    }

    if (!userRes || userRes == "none") {
        return (
            <h3>No data to show yet! Keep tracking your sleep to see your patterns and insights to your sleep behavior</h3>
        )
    } else {

    return (
        <div>  
            <h3>Insights</h3>
            {avgHours >= 8 && avgBedtime <= 22 && avgBedtime >= 5 ?
            <h4>You're sleeping great! Keep up the good rest.</h4>
            : <p></p>}
            {avgHours <= 5 ?
            <h4>Tossing and turning? Your stats indicate you aren't sleeping enough hours. Check out the second section of our Resource page for some helpful links for your sleep health!</h4>
           : <p></p>}   
           {avgBedtime >= 22 || avgBedtime <= 12 ?
            <h4>Looks like you are consistently going to bed late. Check out the first section of our Resource page for some helpful links for your sleep health!</h4>
            : <p></p>}  
            <Notes />
            <Bubble />
            <LineChart />
            <Doughnut />
            <Pie />
        </div>
           
    )
}
};

export default Chart;