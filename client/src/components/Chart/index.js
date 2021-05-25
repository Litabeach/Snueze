import React, { useState, useEffect } from "react"
import LineChart from "./LineChart"
import Doughnut from "./DoughnutChart"
import Pie from "./PieChart"
import Bubble from "./Bubble"
import surveyAPI from "../../utils/surveyAPI";
import Notes from "../Notes"
import { Link } from "react-router-dom"
import { Form, Row, Col } from 'react-bootstrap'
import { MDBContainer } from 'mdbreact'
import "./style.css"

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

                    console.log("bed array" + bedArray)
                    console.log("bed duplicates" + bedDuplicates)
                    console.log("hours array" + hoursArray)
                    console.log("hours duplicates" + hourDuplicates)

                    if (bedDuplicates.length === 0) {
                        setAvgBedtime(bedArray)
                    } else {
                        setAvgBedtime(bedDuplicates);
                    }

                    if (hourDuplicates.length === 0) {
                        setAvgHours(hoursArray)
                    } else {
                        setAvgHours(hourDuplicates);
                    }

                    setRes("success")
                }
            })
    }

    if (!userRes) {
        return (
            <p></p>
        )
    } else if (userRes === "none") {
        return (
            <h5 className="spacer">No data to show yet! Keep tracking your sleep to see your patterns and insights to your sleep behavior.</h5>
        )
    } else if (userRes === "success") {

        return (
            <>

    
            <Form className="insights">
                <Row>
                    <Col sm={12}>
                        <Form.Group as={Row} className="insights-section">
                            <Col sm={6}>
                                <Form.Text>
                               <h3>Based on your sleep statistics...</h3>
                                {avgHours <= 5 ?
                                    <p>Tossing and turning? Your stats indicate you aren't sleeping enough hours. Check out the second section of our  <Link to="/resources">Resource</Link> page for some helpful links for your sleep health!</p>
                                    : <p>You are sleeping enough hours a night! Great work!</p>}
                                {avgBedtime >= 23 || avgBedtime <= 12 ?
                                    <p>Looks like you are going to bed late. Check out the first section of our <Link to="/resources">Resource</Link> page for some helpful links for your sleep health!</p>
                                    : <p>Your bedtimes are right on time. Nighty night!</p>}
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group className="search-section">
                            <Col sm={6}>
                                <Notes />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm={12}>
                        <MDBContainer  className="charts-top-section">
                            <Row>
                                <Col sm={12}>
                                    <Bubble />
                                </Col>
                                <Col sm={12}>
                                    <LineChart />
                                </Col>
                            </Row>
                        </MDBContainer>
                        <MDBContainer className="charts-bottom-section">
                            <Row>
                                <Col sm={6}>
                                    <Doughnut />
                                </Col>
                                <Col sm={6}>
                                    <Pie />
                                </Col>
                            </Row>
                        </MDBContainer>
                    </Col>
                </Row>
            </Form>

            </>
        )
    }
};

export default Chart;