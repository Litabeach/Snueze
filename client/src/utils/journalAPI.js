import axios from "axios";

export default {
  // Gets all journal entries
  getEntries: function() {
    return axios.get("/api/journal");
  },
  // Gets the journal entry with the given id
  getEntry: function(id) {
    return axios.get("/api/journal/" + id);
  },
  // Deletes the journal entry with the given id
  deleteEntry: function(id) {
    return axios.delete("/api/journal/" + id);
  },
  // Saves a journal entry to the database
  saveEntry: function(journalData) {
    return axios.post("/api/journal", journalData);
  }
};