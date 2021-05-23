import React, { useEffect, useState, useRef } from "react";
import journalAPI from "../../utils/journalAPI";
import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./style.css"
import dateFormat from 'dateformat';
import microphoneicon from './microphone.png';
import micstopicon from './stopbutton.png';
import { Container, Form, Col, Row, InputGroup, Button, FormControl } from "react-bootstrap";
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
  console.log(entries);

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
        <Col sm={4}>
          <h3 className="dream-journal-header">Write a Dream</h3>
          
          <Form.Group as={Row} controlId="formHorizontalDate">
            <Form.Label column sm={12}>
              <h4>Date</h4>
            </Form.Label>
            <Col sm={12}>
              <Form.Control required type="date" className="dreamform journal-date" name="date" onChange={handleInputChange} value={formObject.date} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={12}>
              <h4>Title</h4>
            </Form.Label>
            <Col sm={12}>
              <Form.Control className="dreamform journal-title" name="title" required type="text" onChange={handleInputChange} value={formObject.title} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={12}>
              <h4>What was your dream about?</h4>
            </Form.Label>
            <Col sm={12}>
              <Form.Control as="textarea" type="text" name="body" className="dreamform journal-body" onChange={handleInputChange} value={formObject.body} />
            </Col>
          </Form.Group>
          <Row>
            <Col sm={6}>
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
            </Col>
            <Col sm={6}>
              <Button className="dream-submit"
                disabled={!(formObject.body && formObject.title)}
                onClick={handleFormSubmit}
              > Save
              </Button>
            </Col>
          </Row>
        </Col>

        <Col sm={8} >
          {entries.length ? (
            <Form.Group className="dream-list">
                <List>
              <h3 className="dream-list-header">Past Dreams</h3>
              {entries.map(entry => (
                <ListItem key={entry._id}>
                  <h5>{entry.title}</h5>
                  <br />
                  <p>{entry.body}</p>
                  <br />
                  <p>{dateFormat(entry.date).slice(0, 16)}</p>
                  <DeleteBtn onClick={() => deleteEntry(entry._id)} />
                </ListItem>
              ))}
            </List>
            </Form.Group>
          
          ) : (
            <h4>No dreams have been recorded yet</h4>
          )}
          
        </Col>
      </Row>
      
      </Form>
    </Container>
  )
};
export default Journal;