
import React, { useState } from "react";
import surveyAPI from "../../utils/surveyAPI";
import { Form, Row, Col, Button } from 'react-bootstrap'

function Notes() {


    const [searchDate, setSearchDate] = useState();
    const [note, setNote] = useState();

    function handleInputChange(event) {
        const { value } = event.target;
        setSearchDate(value);
    };


    function handleNoteSearch(date) {
       
        let notes = [];

        surveyAPI.getSurveys()
            .then(res => {

                let data = res.data

                data.forEach(dateData => {
                    let splitDate = dateData.date.split("T")
                    let justDate = splitDate[0]

                    if (justDate === date) {
                        notes.push(dateData.notes);
                    }
                })

                let fake = ["You didn't write any notes on this day!"]
                if (notes.length === 0 || notes[0].length === 0) {
                    setNote(fake);
                } else {
                    setNote(notes)
                }

            })
            .catch(err => console.log(err));
    }


    return (
        <Row>
            <Col sm={12}>
                <h4>Search Past Notes</h4>
                <h5>Wondering what else might have happened to you on a particular day? Search below to see notes you've kept.</h5>
                <Form.Group as={Row} className="form-group">
                    <Col sm={3}>
                        <Form.Control type="date" name="date" onChange={handleInputChange}></Form.Control>
                    </Col>
                    <Col sm={3}>
                        <Button className="btn" onClick={() => handleNoteSearch(searchDate)}>Search</Button>
                    </Col>
                    <Col sm={6}>
                        <Form.Text>
                            <h5>{note}</h5>
                        </Form.Text>
                    </Col>
                </Form.Group>

            </Col>
        </Row>
    )
}


export default Notes