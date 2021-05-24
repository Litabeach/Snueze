import React, { useEffect, useState, useRef } from "react";
import journalAPI from "../../utils/journalAPI";
import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./style.css"
import dateFormat from 'dateformat';
import microphoneicon from './microphone.png';
import micstopicon from './stopbutton.png';
import { Container, Form, Col, Row, ListGroup, Button } from "react-bootstrap";
import Quote from "../../components/Quote"

function Journal() {
  // Setting our component's initial state
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
        console.log("entries", res.data)
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
        .then(() => loadEntries(alert("Dream saved!")))
        .catch(err => console.log(err));
    }
  };
  console.log("entries", entries.id);

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
      <Quote />
      <h1>Dream Journal</h1>
      <Form className="journal-form">
        <Row>
          <Col sm={12} className="journalCol">

            <Form.Group as={Row} controlId="formDate">
              <Form.Label column sm={12}>
                <h4>Date</h4>
              </Form.Label>
              <Col sm={6}>
                <Form.Control required type="date" className="dreamform journal-date" name="date" onChange={handleInputChange} value={formObject.date} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formTitle">
              <Form.Label column sm={12}>
                <h4>Title</h4>
              </Form.Label>
              <Col sm={12}>
                <Form.Control required type="text" className="dreamform journal-title" name="title" required type="text" onChange={handleInputChange} value={formObject.title} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBody">
              <Form.Label column sm={12}>
                <h4>What was your dream about?</h4>
              </Form.Label>
              <Col sm={12}>
                <Form.Control required as="textarea" type="text" name="body" className="dreamform journal-body" onChange={handleInputChange} value={formObject.body} />
              </Col>
            </Form.Group>
            <Row>
              <Col sm={5}>
                <Form.Group as={Row} className="microphone">
                  <div className="microphone-wrapper-nav popup">
                    <div className="mircophone-container-journal">
                      <span className="popuptext" id="myPopup">{transcript}</span>
                      <div
                        className="microphone-icon-container-nav"
                        ref={microphoneRef}
                        onClick={handleListing} >
                        <img src={microphoneicon} className="microphone-icon-nav" />
                      </div>
                      {isListening && (
                        <img src={micstopicon} className="microphone-stop-nav" onClick={stopHandle} />
                      )}
                    </div>
                  </div>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group as={Row} className="formSubmit">
                  <Button type="submit"
                    onClick={handleFormSubmit} >
                    Save
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="dreamsCol">
            <Form.Group>
              <h3 className="dream-list-header">Past Dreams</h3>
              <Col sm={12}>
                {entries.length ? (
                  <List>
                    {entries.map(entry => (
                      <ListGroup.Item key={entry.id}>
                        <h6 className="list-title">{entry.title}</h6>
                        <p className="list-body">{entry.body}</p>
                        <p className="list-date">{dateFormat(entry.date).slice(0, 16)}</p>
                        <DeleteBtn onClick={() => deleteEntry(entry.id)} />
                      </ListGroup.Item>
                    ))}
                  </List>
                ) : (
                  <h4>No dreams have been recorded yet</h4>
                )}
              </Col>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  )
};
export default Journal;