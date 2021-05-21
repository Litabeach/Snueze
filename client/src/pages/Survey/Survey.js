import surveyAPI from "../../utils/surveyAPI";
import React, { useEffect, useState } from 'react';
import { InputGroup, FormControl } from "react-bootstrap";

function Survey() {
  // Setting our component's initial state
  const [survey, setSurveys] = useState([]);
  const [formObject, setFormObject] = useState({
    date: "",
    hoursslept: "",
    // wakeuptime: "",
    sleepquality: "",
    mood: "",
    notes: "",
    bedtime: "",
  });

  // Load all surveys and store them with setSurveys
  useEffect(() => {
    loadSurveys()
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
    event.preventDefault()
    if (formObject.date && formObject.bedtime && formObject.sleepquality && formObject.mood) {
      console.log("formObject");
      surveyAPI.saveSurvey({
        date: formObject.date,
        hoursslept: formObject.hoursslept,
        // wakeuptime: formObject.wakeuptime,
        sleepquality: formObject.sleepquality,
        mood: formObject.mood,
        notes: formObject.notes,
        bedtime: formObject.bedtime,
      })
        .then(() => setFormObject({
          date: "",
          hoursslept: "",
          // wakeuptime: "",
          sleepquality: "",
          mood: "",
          notes: "",
          bedtime: "",
        }))
        .then(() => loadSurveys())
        .catch(err => console.log(err));
    }
  }

  function changeHandler(event) {
    const { name, value } = event.target;

    setFormObject({ ...formObject, [name]: value })

  }

  return (
    <div>
      <h1>Record Sleep</h1>
      <div>
        <h3>Sleep date</h3>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <input type="date" name="date" onChange={changeHandler}></input>
          </InputGroup.Prepend>
        </InputGroup>

        <h3>How many hours did you sleep last night?</h3>
        <InputGroup className="mb-3">
          <InputGroup.Append>
            <input type="text" name="hoursslept" onChange={changeHandler}></input>
          </InputGroup.Append>
        </InputGroup>

        <h3>How was your quality of sleep?</h3>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <select type="rating" name="sleepquality" onChange={changeHandler} defaultValue="">
              <option value="1">I was up all night.</option>
              <option value="2">I tossed and turned.</option>
              <option value="3">I woke up a couple of times.</option>
              <option value="4">I got a decent night's sleep.</option>
              <option value="5">I slept like a baby!</option>
            </select>
          </InputGroup.Prepend>
        </InputGroup>

        <h3>How are you feeling right now?</h3>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <select type="rating" name="mood" onChange={changeHandler} defaultValue="">
              <option value="1">I feel lousy.</option>
              <option value="2">I'm not in the best mood.</option>
              <option value="3">I just feel okay.</option>
              <option value="4">I feel pretty good.</option>
              <option value="5">I feel great!</option>
            </select>
          </InputGroup.Prepend>
        </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Notes</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" type="text" name="notes" onChange={changeHandler} aria-label="With textarea" />
        </InputGroup>

        <h3>When is your bedtime?</h3>
        <InputGroup>
          <InputGroup.Prepend>
            <input type="time" name="bedtime" onChange={changeHandler}></input>
          </InputGroup.Prepend>
        </InputGroup>

        <h3>Submit</h3>
        <InputGroup>
          <InputGroup.Prepend>
            <button className="submitBtn" onClick={handleFormSubmit}>Submit</button>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
    </div>
  )

}

export default Survey;


