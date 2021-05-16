import React from "react"
import LineChart from "./LineChart"
import BarChart from "./BarChart"
import Doughnut from "./DoughnutChart"
import Pie from "./PieChart"

function Chart() {


    return (
        <div>
            <LineChart />
            {/* <BarChart />
            <Doughnut /> */}
            <Pie /> 
        </div>
    )

};

export default Chart;