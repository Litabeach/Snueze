import { CollectionsBookmarkRounded, FormatBoldRounded } from "@material-ui/icons";
import React, { useState } from "react";
import surveyAPI from "../../utils/surveyAPI";
import {Form, Button, Col} from 'react-bootstrap'

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
                    
                    if (justDate === date){
                        let noteTest = dateData.notes
                        console.log("NOTES" + noteTest)
                        notes.push(dateData.notes);
                    } 
                })

                let fake = ["You didn't write any notes on this day!"]
                console.log(notes)
                if (notes.length === 0 || notes[0].length === 0){
                    setNote(fake);
                } else {
                    setNote(notes)
                }
              
            })
            .catch(err => console.log(err));
    }


    return (
        <Form className="search-notes">
            <h3>Search Past Notes</h3>
            <Col sm={6}>
            <Form.Group className="form-group">
            <Form.Control type="date" name="date" onChange={handleInputChange}></Form.Control>
            </Form.Group>
            </Col>
            <Button className="submitBtn" onClick={() => handleNoteSearch(searchDate)}>Submit</Button>
            <h5>{note}</h5>
        </Form>
    );
}


export default Notes