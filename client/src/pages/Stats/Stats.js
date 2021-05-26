import React from "react"
import Chart from "../../components/Chart"
import Quote from "../../components/Quote"
import { Container } from 'react-bootstrap'
import { MDBContainer } from 'mdbreact'
import "./style.css"

function Stats() {


    return (
        <Container fluid>
            <Quote />
            <MDBContainer>
            <h1>Insights</h1>
            <h4 className="insights-h4">Remember that questionnaire you've been filling out? Here you can look at your sleep patterns and statistics, revisit notes from previous days, and find insights to stop whatever's in the way of you getting your good night's rest.</h4>
            </MDBContainer>
            <br></br>
                <Chart />
        </Container>
    )

};

export default Stats;
