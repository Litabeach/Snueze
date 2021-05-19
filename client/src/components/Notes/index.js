import { CollectionsBookmarkRounded } from "@material-ui/icons";
import React, { useState } from "react";
import surveyAPI from "../../utils/surveyAPI";


function Notes() {

   
    const [searchDate, setSearchDate] = useState();
    const [note, setNote] = useState();

    function handleInputChange(event) {
        const { value } = event.target;
        console.log("Handle change" + value);
        setSearchDate(value);
    };

   
    function handleNoteSearch(date) {
        console.log(searchDate)

        let notes = [];
        
     surveyAPI.getSurveys()
            .then(res => {
                console.log(res.data)

                let data = res.data

                data.forEach(dateData => {
                    let splitDate = dateData.date.split("T")
                    let justDate = splitDate[0]
                    
                    if (justDate == date){
                        notes.push(dateData.notes);
                    } 
                })

                console.log(notes)
                setNote(notes);
               
               
              
            })
            .catch(err => console.log(err));
    }






    return (
        <div>
            <div className="form-group">
            <input type="date" name="date" onChange={handleInputChange}></input>
               
            </div>
            <button className="submitBtn" onClick={() => handleNoteSearch(searchDate)}>Submit</button>
            <h1>{note}</h1>
        </div>
    );
}


export default Notes