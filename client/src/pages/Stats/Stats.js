import React from "react"
import Chart from "../../components/Chart"
import Quote from "../../components/Quote"
import { Container } from 'react-bootstrap'
import "./style.css"

function Stats() {


    return (
        <Container fluid>
            <Quote />
                <h1>Insights</h1>
                <h5 className="subheading">Remember that questionnaire you've been filling out? Here you can look at your sleep patterns and statistics, revisit notes from previous days, and find insights to stop whatever's in the way of you getting your good night's rest.</h5>
            <Chart />
        </Container>
    )

};

export default Stats;
