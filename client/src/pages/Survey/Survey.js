import surveyAPI from "../../utils/surveyAPI";
import React, { useState } from 'react';
import { Container, Form, Col, Row, Button, Alert } from "react-bootstrap";
import "./style.css";
import Quote from "../../components/Quote"

function Survey() {
  // Setting our component's initial state
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [formObject, setFormObject] = useState({
    date: "",
    hoursslept: "",
    sleepquality: "",
    mood: "",
    notes: "",
    bedtime: "",
  });

 

  // When the form is submitted, use the API.saveSurvey method to save the survey data
  // Then reload surveys from the database
  function handleFormSubmit(event) {
    event.preventDefault()
    console.log("formObject-START");
    if (formObject.date && formObject.hoursslept && formObject.sleepquality && formObject.mood && formObject.bedtime) {
      surveyAPI.saveSurvey({
        date: formObject.date,
        hoursslept: formObject.hoursslept,
        sleepquality: formObject.sleepquality,
        mood: formObject.mood,
        notes: formObject.notes,
        bedtime: formObject.bedtime,
      })
        .then(() => setFormObject({
          date: "",
          hoursslept: "",
          sleepquality: "",
          mood: "",
          notes: "",
          bedtime: "",
        }))

     // .then(() => loadSurveys()) 
        .then(() => setShow(true))
        .catch(err => {
          console.log(err.response)
          setError(true)
          setErrorMsg("Oops! " + err.response.data.msg + ". Please fill out another date.")
          
        });

      }    
   else {
     setError(true)
     setErrorMsg("Please make sure you fill out all fields before you submit!")

    }
  }

  function changeHandler(event) {
    const { name, value } = event.target;
    console.log(value);
    setFormObject({ ...formObject, [name]: value });
  }

  return (

    <Container fluid>
      <Quote />
      <h1>Record Your Sleep</h1>
      <h5 className="subheading">Tracking your sleep behavior is the first step to better sleep health. Fill out this short, daily questionnaire to get to know your sleep better. You can track your patterns and habits on the Insights page.</h5>
      {show ? <Alert className="successAlert" variant="success" onClose={() => {setShow(false); window.location.reload()}} dismissible><p>Recorded successfully!</p></Alert> : null} 
      {error ? <Alert className="dangerAlert" variant="warning" onClose={() => setError(false)} dismissible><p>{errorMsg}</p></Alert> : null} 
      <Form className="survey-form">
        <Row>
          <Col sm={6} className="surveyCol">
            <Form.Group as={Row} controlId="recordDate">
              <Form.Label column sm={12}>
                <h4>Date</h4>
              </Form.Label>
              <Col sm={12}>
                <Form.Control required type="date" name="date" onChange={changeHandler} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}  className="formBedtime">
              <Form.Label column sm={12}>
                <h4>Bedtime</h4>
              </Form.Label>
              <Col sm={12}>
                <Form.Control required type="time" name="bedtime" onChange={changeHandler} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}  className="formHours">
              <Form.Label column sm={12}>
                <h4>Hours slept</h4>
              </Form.Label>
              <Col sm={12}>
                <Form.Control min={0} max={24} name="hoursslept" required type="number" maxLength="2" onChange={changeHandler} />
              </Col>
            </Form.Group>
          </Col>
          <Col sm={6} className="surveyCol">
            <fieldset>
              <Form.Group as={Row} className="formQuality" onChange={changeHandler}>
                <Form.Label as="legend" column sm={12} required>
                  <h4>How was your quality of sleep?</h4>
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="I was up all night"
                    value="1"
                    name="sleepquality"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="I tossed and turned"
                    value="2"
                    name="sleepquality"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="I woke up a couple of times"
                    value="3"
                    name="sleepquality"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check
                    type="radio"
                    label="I got a decent night's sleep"
                    value="4"
                    name="sleepquality"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check
                    type="radio"
                    label="I slept like a baby"
                    value="5"
                    name="sleepquality"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <fieldset>
              <Form.Group as={Row} className="formMood" required onChange={changeHandler}>
                <Form.Label as="legend" column sm={12}>
                  <h4>Your mood the next day</h4>
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="I feel lousy"
                    value="1"
                    name="mood"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="I'm not in the best mood"
                    value="2"
                    name="mood"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="I just feel okay"
                    value="3"
                    name="mood"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check
                    type="radio"
                    label="I feel pretty good"
                    value="4"
                    name="mood"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check
                    type="radio"
                    label="I feel wonderful"
                    value="5"
                    name="mood"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="surveyCol">
            <Form.Group as={Row} controlId="formNotes">
              <Form.Label column sm={12}>
                <h4>Was there anything about your day that may have affected your sleep? (optional)</h4>
              </Form.Label>
              <Col sm={12}>
                <Form.Control as="textarea" type="text" name="notes" onChange={changeHandler} />
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="surveyCol">
            <Form.Group as={Row}>
              <Col sm={{ span: 12 }}>
              
                <Button type="submit" onClick={handleFormSubmit}>Submit</Button>
              </Col>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  )

}


export default Survey;

