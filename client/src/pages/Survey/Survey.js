import surveyAPI from "../../utils/surveyAPI";
import React, { useEffect, useState } from 'react';

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
    <form className="survey">
      <h1>Record Sleep</h1>
      <div><h3>Sleep date</h3>
        <input type="date" name="date" onChange={changeHandler}></input>
      </div>
      <div>
        <h3>How many hours did you sleep last night?</h3>
        <input type="text" name="hoursslept" onChange={changeHandler}></input>
      </div>
      <div>
        <h3>How was your quality of sleep?</h3>
        <select type="rating" name="sleepquality" onChange={changeHandler} defaultValue="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <h3>How are you feeling right now?</h3>
        <select type="rating" name="mood" onChange={changeHandler} defaultValue="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <h3>Additional thoughts...</h3>
        <textarea type="text" name="notes" onChange={changeHandler}></textarea>
      </div>
      <div><h3>When is your bedtime?</h3>
        <input type="time" name="bedtime" onChange={changeHandler}></input>
      </div>
      <div>
        <button className="submitBtn" onClick={handleFormSubmit}>Submit</button>
      </div>
    </form>
  )

}

export default Survey;



      // <div><h3>What time did you wake up this morning?</h3>
      //   <input type="time" name="wakeuptime" onChange={changeHandler}></input>
      // </div>

