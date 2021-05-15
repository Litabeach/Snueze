import React, { useEffect, useState, useRef } from "react";
import journalAPI from "../../utils/journalAPI";
import DeleteBtn from "../../components/DeleteBtn";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import microPhoneIcon from "../../images/microphone.png";
import stopButton from "../../images/stopbutton.png";
// import SpeechToText from "../../components/SpeechToText/SpeechToText"

function Journal() {
  // Setting our component's initial state
  const [entries, setEntries] = useState([])
  const [formObject, setFormObject] = useState({
    title: "",
    body: "",
    date: ""
  })

  // Load all journal entries and store them with setEntries
  useEffect(() => {
    // loadEntries()
  }, [])

  // Loads all journal entries and sets them to entries
  function loadEntries() {
    journalAPI.getEntries()
      .then(res =>
        setEntries(res.data)
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

  //speech to text
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
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
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };

  return (
    <div>
      <div>
        <h1>Journal Page</h1>
        <br />
        <input
          onChange={handleInputChange}
          name="title"
          placeholder="Title (required)"
          value={formObject.title}
        />
        <br />
        <textarea
          onChange={handleInputChange}
          name="body"
          placeholder="What did you dream about?"
          value={formObject.body, transcript}

        />
        <br />
        <button
          disabled={!(formObject.title && formObject.body)}
          onClick={handleFormSubmit}
        >
          Submit Dream
            </button>
      </div>

      {/* <SpeechToText /> */}
      <div className="microphone-wrapper">
        <div className="mircophone-container-nav">
          <div
            className="microphone-icon-container-nav"
            ref={microphoneRef}
            onClick={handleListing}
          >
            <img src={microPhoneIcon} className="microphone-icon-nav" />
          </div>
          <div className="microphone-status">
            {isListening ? "Listening........." : "Click to start Listening"}
          </div>
          {isListening && (

            <img src={stopButton} className="microphone-stop-nav" onClick={stopHandle} />

          )}
        </div>
      </div>
      {Journal.length ? (
          <div>
            {Journal.map(entry=> {
              return (
                <ul key={entry._id}>
                  <h2>{entry.title}</h2>
                  <br />
                  <p>{entry.body}</p>
                  <br />
                  <p>{entry.date}</p>
                  <DeleteBtn onClick={() =>deleteEntry(entry._id)} />
                </ul>
              )
            })}
          </div>
          ) : (
            <h3>No dreams have been recorded yet</h3>
          )}
    </div>
    
  )

};

export default Journal;