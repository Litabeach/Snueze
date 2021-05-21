import React, { useEffect, useState, useRef } from "react";
import journalAPI from "../../utils/journalAPI";
import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import "./style.css"
import dateFormat from 'dateformat';

function Journal() {
  // Setting our component's initial state
  let [entries, setEntries] = useState([""])
  const [formObject, setFormObject] = useState({
    title: "",
    body: "",
    date: ""
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
        .then(() => loadEntries())
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
      <div className="mircophone-container-nav">
        Browser does not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
    setFormObject({ ...formObject, body: transcript })
  };

  return (
    <div>
      <div>
        <Jumbotron >
       <h1> Dream Journal </h1>
        </Jumbotron>
        <br />
        <h3 class="dreamjournalh3">Write a Dream</h3>
        <input className="dreamform journal-title"
          onChange={handleInputChange}
          name="title"
          placeholder="Title (required)"
          value={formObject.title}
        />
        <input type="date" name="date" className="dreamform journal-date" onChange={handleInputChange} value={formObject.title}/>
        <br />
        <textarea className="dreamform journal-body"
          onChange={handleInputChange}
          name="body"
          placeholder="What did you dream about?"
          value={formObject.body}
        />

        {/* <textarea class="speech-transcript">{transcript}</textarea> */}

        <p class="speech-transcript">{transcript}</p>

        <div className="microphone-wrapper-nav">
          <div className="mircophone-container-journal">
            <div
              className="microphone-icon-container-nav"
              ref={microphoneRef}
              onClick={handleListing}
            >
              <img src="../../public/img/microphone.png" className="microphone-icon-nav" />
            </div>

            {isListening && (

              <img src="img/stopbutton.png" className="microphone-stop-nav" onClick={stopHandle} />

            )}
          </div>

        </div>
        <button className="dream-submit"
          disabled={!(formObject.body && formObject.title)}
          onClick={handleFormSubmit}
        >
          Submit Dream
            </button>
      </div>
      {entries.length ? (
        <List>
          <h3>Your Journal Entries</h3>
          {entries.map(entry => (
            <ListItem key={entry._id}>
              <h2>{entry.title}</h2>
              <br />
              <p>{entry.body}</p>
              <br />
              <p>{dateFormat(entry.date).slice(0, 16)}</p>
              <DeleteBtn onClick={() => deleteEntry(entry._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>No dreams have been recorded yet</h3>
      )}
     
    </div>
  )
};
export default Journal;