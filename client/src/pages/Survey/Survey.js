import surveyAPI from "../../utils/surveyAPI";

function Survey() {
    // Setting our component's initial state
    const [survey, setSurveys] = useState([])
    const [formObject, setFormObject] = useState({
      date: "",
      bedtime: "",
      wakeuptime: "",
      sleepquality: "",
      mood: ""
    })
  
    // Load all surveys and store them with setSurveys
    useEffect(() => {
      loadSurveys()
    }, [])
  
    // Loads all surveys and sets them to surveys
    function loadSurveys() {
        surveyAPI.getSurveys()
        .then(res => 
          setSurveys(res.data)
        )
        .catch(err => console.log(err));
    };
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
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
    };

    return (
        <div>

        </div>
    )

};

export default Survey;