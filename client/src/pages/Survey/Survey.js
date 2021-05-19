import surveyAPI from "../../utils/surveyAPI";
import React, { useEffect, useState } from 'react';

function Survey() {
  // Setting our component's initial state
  const [survey, setSurveys] = useState([]);
  const [formObject, setFormObject] = useState({
    date: "",
    bedtime: "",
    wakeuptime: "",
    sleepquality: "",
    mood: "",
    notes: "",
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
  };

  // When the form is submitted, use the API.saveSurvey method to save the survey data
  // Then reload surveys from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.date && formObject.bedtime && formObject.wakeuptime && formObject.sleepquality && formObject.mood) {
      surveyAPI.saveSurvey({
        date: formObject.date,
        bedtime: formObject.bedtime,
        wakeuptime: formObject.wakeuptime,
        sleepquality: formObject.sleepquality,
        mood: formObject.mood
      })
        .then(() => setFormObject({
          date: "",
          bedtime: "",
          wakeuptime: "",
          sleepquality: "",
          mood: ""
        }))
        .then(() => loadSurveys())
        .catch(err => console.log(err));
    }
  }

  function changeHandler(event) {    
    const { name, value } = event.target;
    console.log(value)
    setFormObject({...formObject, [name]: value})
    
  }

  return (

    <form className="survey">
      <h1>Survey</h1>
      <div><h3>Enter date:</h3>
        <input type="date" name="date" onChange={changeHandler}></input>
      </div>
      <div><h3>What time did you go to bed last night?</h3>
        <input type="time" name="bedtime" onChange={changeHandler}></input>
      </div>
      <div><h3>What time did you wake up this morning?</h3>
        <input type="time" name="wakeuptime" onChange={changeHandler}></input>
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
      <div>
        <button onClick={handleFormSubmit}>Submit</button>
      </div>
    </form>
  )

}

export default Survey;




