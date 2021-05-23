import React from "react"
import Chart from "../../components/Chart"
import Quote from "../../components/Quote"
import { Container } from 'react-bootstrap'

function Stats() {


    return (
        <Container>
            <Quote />
            <h1>Insights</h1>
                <Chart />
        </Container>
    )

};

export default Stats;
