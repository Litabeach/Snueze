import React from "react"
import LineChart from "./LineChart"
import BarChart from "./BarChart"
import Doughnut from "./DoughnutChart"
import Pie from "./PieChart"
import Bubble from "./Bubble"

function Chart() {


    return (
        <div>
              <Bubble /> 
             <LineChart /> 

            
            
                <Doughnut />
            
                <Pie /> 
            
               
            
        </div>
    )

};

export default Chart;