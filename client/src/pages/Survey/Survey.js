import surveyAPI from "../../utils/surveyAPI";
import React, { useEffect, useState } from 'react';
import { Container, Form, Col, fieldset, Row, InputGroup, Button, FormControl } from "react-bootstrap";
import "./style.css";
import alertSuccess from "../../components/Alert";

function Survey() {
  // Setting our component's initial state
  const [survey, setSurveys] = useState([]);
  const [formObject, setFormObject] = useState({
    date: "",
    hoursslept: "",
    sleepquality: "",
    mood: "",
    notes: "",
    bedtime: "",
  });

  // Load all surveys and store them with setSurveys
  useEffect(() => {
    loadSurveys();
  }, []);

  // Loads all surveys and sets them to surveys
  function loadSurveys() {
    surveyAPI.getSurveys()
      .then(res =>
        setSurveys(res.data)
      )
      .catch(err => console.log(err));
  }



  // When the form is submitted, use the API.saveSurvey method to save the survey data
  // Then reload surveys from the database
  function handleFormSubmit(event) {
    console.log("formObject-START");
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
        .then(() => loadSurveys(), alert("Sleep recorded!"))
        .catch(err => console.log(err));    
  }

  function changeHandler(event) {
    const { name, value } = event.target;
    console.log(value);
    setFormObject({ ...formObject, [name]: value });

  }

  return (
    <div className="wrapper">
    <Container className="mx-auto">
      <h4>Record Your Sleep</h4>
      <Form className="survey-form">
        <Form.Group as={Row} controlId="formHorizontalDate">
          <Form.Label column sm={12}>
            Date
    </Form.Label>
          <Col sm={8}>
            <Form.Control required type="date" name="date" onChange={changeHandler} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={12}>
            How many hours did you sleep last night?
    </Form.Label>
          <Col sm={6}>
            <Form.Control min={0} max={24} name="hoursslept" required type="number" maxLength="2" onChange={changeHandler} />
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row} onChange={changeHandler}>
            <Form.Label as="legend" column sm={12} required>
              How was your quality of sleep?
      </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="1"
                value="1"
                name="sleepquality"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="2"
                value="2"
                name="sleepquality"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="3"
                value="3"
                name="sleepquality"
                id="formHorizontalRadios3"
              />
              <Form.Check
                type="radio"
                label="4"
                value="4"
                name="sleepquality"
                id="formHorizontalRadios3"
              />
              <Form.Check
                type="radio"
                label="5"
                value="5"
                name="sleepquality"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <fieldset>
          <Form.Group as={Row} required onChange={changeHandler}>
            <Form.Label as="legend" column sm={12}>
              How are you feeling right now?
    </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="1"
                value="1"
                name="mood"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="2"
                value="2"
                name="mood"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="3"
                value="3"
                name="mood"
                id="formHorizontalRadios3"
              />
              <Form.Check
                type="radio"
                label="4"
                value="4"
                name="mood"
                id="formHorizontalRadios3"
              />
              <Form.Check
                type="radio"
                label="5"
                value="5"
                name="mood"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={12}>
            Was there anything about your day that may have affected your sleep? (optional)
    </Form.Label>
          <Col sm={12}>
            <Form.Control as="textarea" type="text" name="notes" onChange={changeHandler} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={12}>
            When do you plan to go to bed tonight?
    </Form.Label>
          <Col sm={8}>
            <Form.Control required type="time" name="bedtime" onChange={changeHandler} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10 }}>
            <Button type="submit" onClick={handleFormSubmit}>Submit</Button>
          </Col>
        </Form.Group>
      </Form>
      </Container>
    </div>
  )

}

export default Survey;


