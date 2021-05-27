import React, { useState, useEffect } from "react"
import LineChart from "./LineChart"
import Doughnut from "./DoughnutChart"
import Pie from "./PieChart"
import Bubble from "./Bubble"
import surveyAPI from "../../utils/surveyAPI";
import Notes from "../Notes"
import { Link } from "react-router-dom"
import { Container, Form, Row, Col } from 'react-bootstrap'
import "./style.css"

function Chart() {
    const [avgHours, setAvgHours] = useState();
    const [avgBedtime, setAvgBedtime] = useState();
    const [userRes, setRes] = useState();

    useEffect(() => {
        getHourData();
    }, [])

    function getHourData() {
        let hoursArray = [];
        let bedArray = [];

        surveyAPI.getSurveys()
            .then(res => {

                if (res.data.length === 0) {
                    setRes("none")
                } else {

                    let data = res.data
                    data.forEach(entry => {
                        hoursArray.push(entry.hoursslept)
                        let time = entry.bedtime.replace(":", ".")
                        let timeInt = parseInt(time)
                        bedArray.push(timeInt)
                    })

                    let maxHour = mostFrequent(hoursArray, hoursArray.length)
                    console.log("maxhour" + maxHour)

                    let maxBed = mostFrequent(bedArray, bedArray.length)
                    console.log("maxbed" + maxBed)

                    console.log("bed array" + bedArray)
                    console.log("hours array" + hoursArray)

                    if (!maxBed) {
                        setAvgBedtime(bedArray)
                    } else {
                        setAvgBedtime(maxBed);
                    }

                    if (!maxHour) {
                        setAvgHours(hoursArray)
                    } else {
                        setAvgHours(maxHour);
                    }

                    setRes("success")
                }
            })
    }

    function mostFrequent(arr, n) {

        // Sort the array
        arr.sort();

        // find the max frequency using linear
        // traversal
        let max_count = 1, res = arr[0];
        let curr_count = 1;

        for (let i = 1; i < n; i++) {
            if (arr[i] === arr[i - 1])
                curr_count++;
            else {
                if (curr_count > max_count) {
                    max_count = curr_count;
                    res = arr[i - 1];
                }
                curr_count = 1;
            }
        }
        if (curr_count > max_count) {
            max_count = curr_count;
            res = arr[n - 1];
        }
        return res;
    }

    if (!userRes) {
        return (
            <p></p>
        )
    } else if (userRes === "none") {
        return (
            <h5 className="insights-section">No data to show yet! Keep tracking your sleep to see your patterns and insights to your sleep behavior.</h5>
        )
    } else if (userRes === "success") {

        return (
            <Container fluid>
            <Form className="insights">
                <Row>
                    <Col sm={12}>
                        <Form.Group as={Row} className="insights-section">
                            <Col sm={12}>
                                <Form.Text>
                                    <h3>Based on your sleep statistics...</h3>
                                    <div className="returnInsights">
                                        {avgHours <= 5 ?
                                            <h5>Tossing and turning? Your stats indicate you aren't sleeping enough hours. Check out the "When You Aren't Sleeping Enough Hours" section of our  <Link to="/resources">Resource</Link> page for some helpful links for your sleep health!</h5>
                                            : <h5>You are sleeping enough hours a night! Great work!</h5>}
                                        {avgBedtime >= 23 || avgBedtime <= 12 ?
                                            <h5>Looks like you are going to bed late. Check out the "When You Can't Get To Sleep" section of our <Link to="/resources">Resource</Link> page for some helpful links for your sleep health!</h5>
                                            : <h5>Your bedtimes are right on time. Nighty night!</h5>}
                                    </div>
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <br></br>
                        <Form.Group className="search-section">
                            <Col sm={12}>
                                <Notes />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm={12} className="all-charts">
                        <Form.Group className="charts-section">
                            <Row>
                                <Col sm={12} className="insights-chart">
                                    <Bubble />
                                </Col>
                                <Col sm={12} className="insights-chart">
                                    <LineChart />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} className="insights-chart">
                                    <Doughnut />
                                </Col>
                                <Col sm={6} className="insights-chart">
                                    <Pie />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            </Container>
        )
    }
};

export default Chart;