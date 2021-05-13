import surveyAPI from "../../utils/surveyAPI";
import React, { useEffect, useState } from 'react';
import Jumbotron from "../../components/Jumbotron";
// import DateFnsUtils from '@date-io/date-fns'; // choose your lib
// import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

function Survey() {
    // Setting our component's initial state
    const [survey, setSurveys] = useState([])
    const [selectedDate, handleDateChange] = useState(new Date());
    const [formObject, setFormObject] = useState({
      date: "",
      bedtime: "",
      wakeuptime: "",
      sleepquality: "",
      mood: "",
      notes: "",
    });
    
    var surveyQuestions = [
      {
        question: "Choose date:",
        answers: "date picker", //replace with date picker
      }, 
      {
        question: "What time did you go to sleep last night?",
        answers: "timepicker", //replace with timepicker
      },
      {
        question: "What time did you wake up this morning?",
        answers: "wakeuptime picker", //replace with timepicker
      },
      {
        question: "How was your quality of sleep?",
        answers: {
          a: "1",
          b: "2",
          c: "3",
          d: "4", 
          e: "5"
        }
      },
      {
        question: "How are you feeling today?",
        answers: {
          a: "1",
          b: "2",
          c: "3", 
          d: "4",
          e: "5" 
        },
      },
      {
        question: "Write any notes about your day that might affect tonight's sleep.",
        answers: "text area", //replace with text area
      },
    ];

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
      if (formObject.date) {
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

    return (
      <Jumbotron>
      <h1>Survey</h1>
  </Jumbotron>
    )

}

export default Survey;

{/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
<DatePicker value={selectedDate} onChange={handleDateChange} />
<TimePicker value={selectedDate} onChange={handleDateChange} />
<DateTimePicker value={selectedDate} onChange={handleDateChange} />
</MuiPickersUtilsProvider> */}