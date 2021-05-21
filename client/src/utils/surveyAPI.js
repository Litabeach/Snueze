import axios from "axios";

export default {
  // Gets all surveys from user

  getSurveys: function() {
      return axios.get("/api/survey/user");
    },
  // Gets the survey with the given id
  getSurvey: function(id) {
    return axios.get("/api/survey/" + id);
  },
  // Saves a survey to the database
  saveSurvey: function(surveyData) {
    console.log("surveydata", surveyData);
    return axios.post("/api/survey", surveyData);
  }
};