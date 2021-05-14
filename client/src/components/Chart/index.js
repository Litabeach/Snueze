import React from "react"
import LineChart from "./LineChart"
import BarChart from "./BarChart"
import Doughnut from "./DoughnutChart"

function Chart() {


    return (
        <div>
            <LineChart />
            <BarChart />
            <Doughnut />
        </div>
    )

};

export default Chart;