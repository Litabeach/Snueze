import React, { useEffect, useState, useRef } from "react";
import journalAPI from "../../utils/journalAPI";
import DeleteBtn from "../../components/DeleteBtn";
import { List } from "../../components/List";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./style.css"
import dateFormat from 'dateformat';
import microphoneicon from './microphone.png';
import micstopicon from './stopbutton.png';
import { Container, Form, Col, Row, ListGroup, Button, Alert } from "react-bootstrap";
import Quote from "../../components/Quote";
import Accordion from 'react-bootstrap/Accordion';

function Journal() {
  // Setting our component's initial state
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [entries, setEntries] = useState([""])
  const [formObject, setFormObject] = useState({
    date: "",
    title: "",
    body: ""
  })
  // Load all journal entries and store them with setEntries
  useEffect(() => {
    loadEntries()
  }, [])
  // Loads all journal entries and sets them to entries
  function loadEntries() {
    journalAPI.getEntries()
      .then(res => {
        setEntries(res.data)
      }
        // setEntries(res.data)
      )
      .catch(err => console.log(err));
  };
  // Deletes an entry from the database with a given id, then reloads entries from the db
  function deleteEntry(id) {
    journalAPI.deleteEntry(id)
      .then(res => loadEntries())
      .catch(err => console.log(err));
  }
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };
  // When the form is submitted, use the API.saveEntry method to save the journal entry data
  // Then reload entries from the database
  function handleFormSubmit(event) {

    event.preventDefault();

    if (formObject.title && formObject.body) {
      journalAPI.saveEntry({
        title: formObject.title,
        body: formObject.body,
        date: formObject.date
      })
        .then(() => setFormObject({
          title: "",
          body: "",
          date: ""
        }))
        .then(() => loadEntries())
        .then(() => setShow(true))
        .catch(err => {
          console.log(err)
          setError(true)
          setErrorMsg("Oops! Something went wrong. Please double check you are logged in and try again!.")
        });
    } else {
      setError(true)
          setErrorMsg("Please fill out all fields before submitting!")
    }
   
  };


  //speech to text

  const commands = [
    {
      command: 'reset',
      callback: () => resetTranscript()
    },
    {
      command: 'clear',
      callback: () => resetTranscript()
    }
  ]

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <Container className="mircophone-container-nav">
        Browser does not Support Speech Recognition.
      </Container>
    )
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
    setFormObject({ ...formObject, body: transcript })
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("hide");
  };

  return (
    <Container fluid>
      <p id="quoteDisplay1" className="quoteDisplay">My mother told me to follow my dreams, so I took a nap. — Unknown</p>
      <h1>Dream Journal</h1>
      <h5 className="subheading">Dreams are direct links to our emotional and mental health. Keep and review your dream journal here. We promise we won't peek.</h5>
      
      <Form className="journal-form">
        <Row>
          <Col sm={7} className="journalCol">
            <Form.Group as={Row}>
              <Form.Label column sm={12}>
                <h4>Date</h4>
              </Form.Label>
              <Col sm={7}>
                <Form.Control required type="date" name="date" value={formObject.date} onChange={handleInputChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="formTitle">
              <Form.Label column sm={11}>
                <h4>Title</h4>
              </Form.Label>
              <Col sm={12}>
                <Form.Control required name="title" type="text" value={formObject.title} onChange={handleInputChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={11}>
                <h4>What was your dream about?   
                  <span className="micSpan"data-tip="Click me to use speech to text. Say 'reset' to clear your thoughts, or hit the stop button when you are finished">
                    <div className="microphone-wrapper-nav popup">
                      <div className="mircophone-container-journal">
                        <span className="popuptext" id="myPopup">{transcript}</span>
                        <div
                          className="microphone-icon-container-nav"
                          ref={microphoneRef}
                          onClick={handleListing} >
                          <img src={microphoneicon} className="microphone-icon-nav" alt="microphoneJournal" />
                        </div>
                        {isListening && (
                          <img src={micstopicon} className="microphone-stop-nav" alt="microphoneStop" onClick={stopHandle} />
                        )}
                      </div>
                    </div>
                  </span>
                </h4>
              </Form.Label>
              <Col sm={12}>
                <Form.Control required as="textarea" type="text" name="body" className="dreamform journal-body" id="formBody" value={formObject.body} onChange={handleInputChange} />
              </Col>
            </Form.Group>
            <Row>
              <Col sm={12}>
                <Form.Group as={Row} className="journalSubmit">
                {show ? <Alert className="successAlert" variant="success" onClose={() => setShow(false)} dismissible><p>Entry saved successfully!</p></Alert> : null} 
      {error ? <Alert className="dangerAlert" variant="warning" onClose={() => setError(false)} dismissible><p>{errorMsg}</p></Alert> : null} 
                  <Button type="submit"
                    onClick={handleFormSubmit} >
                    Submit
                  </Button>
                  
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col sm={5} className="dreamsCol">
            <h3 className="dream-list-header">Past Dreams</h3>
            {entries.length ? (
              <List>
                <Accordion>
                  {entries.map((entry, index) => (
                    <ListGroup.Item key={entry.id}>
                      <Accordion.Toggle as={ListGroup} eventKey={index + 1}>
                        <h6 className="list-title"> {entry.title} </h6>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={index + 1}>
                        <p className="list-date">{dateFormat(entry.date).slice(0, 16)}</p>
                      </Accordion.Collapse>
                      <Accordion.Collapse eventKey={index + 1}>
                        <p className="list-body">{entry.body}
                          <DeleteBtn onClick={() => deleteEntry(entry._id)} /></p>
                      </Accordion.Collapse>
                    </ListGroup.Item>
                  ))}
                </Accordion>
              </List>
            ) : (
              <h4 className="noDreams">No dreams have been recorded yet</h4>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  )
};
export default Journal;