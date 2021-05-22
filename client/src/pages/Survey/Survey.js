import surveyAPI from "../../utils/surveyAPI";
import React, { useEffect, useState } from 'react';
import { Container, Form, Col, fieldset, Row, InputGroup, Button, FormControl } from "react-bootstrap";
import "./style.css";

function Survey() {
  // Setting our component's initial state
  const [survey, setSurveys] = useState([]);
  const [formObject, setFormObject] = useState({
    date: "",
    hoursslept: "",
    sleepquality: "",
    mood: "",
    notes: "",
    bedtime: "",
  });

  // Load all surveys and store them with setSurveys
  useEffect(() => {
    loadSurveys();
  }, []);

  // Loads all surveys and sets them to surveys
  function loadSurveys() {
    surveyAPI.getSurveys()
      .then(res =>
        setSurveys(res.data)
      )
      .catch(err => console.log(err));
  }

  const sleepQuotes = [
    "There is no sunrise so beautiful that it is worth waking me up to see it. — Mindy Kaling, Is Everybody Hanging Without Me?",
    "I think sleeping was my problem in school. If school had started at four in the afternoon, I'd be a college graduate today. — George Foreman, Former Professional Boxer",
    "Laugh and the world laughs with you, snore and you sleep alone. — Anthony Burgess, Inside Mr. Enderby",
    "I don't feel old. I don't feel anything till noon. That's when it's time for my nap. — Bob Hope, British-American Comedian",
    "Never go to bed mad. Stay up and fight. — Phyllis Diller, Phyllis Diller's Housekeeping Hints",
    "I think it is good that books still exist, but they do make me sleepy. — Frank Zappa, The Real Frank Zappa Book",
    "If you're going to do something tonight that you'll be sorry for tomorrow morning, sleep late. — Henny Youngman, English-American Comedian",
    "When the going gets tough, the tough take a nap. — Tom Hodgkinson, British Writer",
    "I'm so good at sleeping that I can do it with my eyes closed. — Anonymous",
    "Early to rise, early to bed, makes a man healthy, wealthy, and dead. — James Thurber, American Cartoonist",
    "No wonder Sleeping Beauty looked so good…she took long naps, never got old, and didn't have to do anything but snore to get her Prince Charming. — Olive Green, Author",
    "Dear sleep, I'm sorry we broke up this morning. I want you back! — Anonymous",
    "I love to sleep. Do you? Isn't it great? It really is the best of both worlds. You get to be alive and unconscious. — Rita Rudner, American Comedian",
    "Your eyes water when you yawn because you miss your bed and it makes you sad. — Anonymous",
    "My mother told me to follow my dreams, so I took a nap. — Unknown",
    "Happiness is waking up, looking at the clock and finding that you still have two hours left to sleep. — Charles M. Schulz, American Cartoonist",
    "No civilized person goes to bed the same day he gets up. — Richard Harding Davis, American Journalist",
    "I always say ‘morning' instead of ‘good morning,' because if it was a good morning, I'd still be asleep. — Anonymous",
    "Don't give up on your dreams so soon, sleep longer. — Anonymous",
    "A day without a nap is like a cupcake without frosting. — Terri Guillemets, Quotation Anthologist",
    "I love sleep. My life has the tendency to fall apart when I'm awake, you know? — Ernest Hemingway, American Author",
    "Sleep is like a cat: It only comes to you if you ignore it. -— Gillian Flynn, Gone Girl",
  ]


  // When the form is submitted, use the API.saveSurvey method to save the survey data
  // Then reload surveys from the database
  function handleFormSubmit(event) {
    console.log("formObject-START");
    if (formObject.date && formObject.hoursslept && formObject.sleepquality && formObject.mood && formObject.bedtime) {
      surveyAPI.saveSurvey({
        date: formObject.date,
        hoursslept: formObject.hoursslept,
        sleepquality: formObject.sleepquality,
        mood: formObject.mood,
        notes: formObject.notes,
        bedtime: formObject.bedtime,
      })
        .then(() => setFormObject({
          date: "",
          hoursslept: "",
          sleepquality: "",
          mood: "",
          notes: "",
          bedtime: "",
        }))
        .then(() => loadSurveys(), alert("Sleep recorded!"))
        .catch(err => console.log(err));
    }
  }

  function changeHandler(event) {
    const { name, value } = event.target;
    console.log(value);
    setFormObject({ ...formObject, [name]: value });
  }

  var counter = 0;

  function randomize () {
    var randomNumber = Math.floor(Math.random() * sleepQuotes.length);
    return randomNumber;
  }

  function change() {
    document.getElementById('quoteDisplay1').innerHTML = sleepQuotes[randomize()];
    document.getElementById('quoteDisplay2').innerHTML = sleepQuotes[randomize()];
    document.getElementById('quoteDisplay3').innerHTML = sleepQuotes[randomize()];
    document.getElementById('quoteDisplay4').innerHTML = sleepQuotes[randomize()];
    counter++;
    if (counter >= sleepQuotes.length) {
      counter = 0;
      //clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
  }

  return (
    
    <Container fluid>
    <h1>Record Your Sleep</h1>
    {change}   

      <Row>
      <Col sm={6}>
          <Form.Label id="quoteDisplay1" className="quoteDisplay">
            "You miss 100% of the naps you don't take. — Unknown"
       </Form.Label>
       <Form.Label id="quoteDisplay2" className="quoteDisplay">
       "No day is so bad it can't be fixed with a nap. — Carrie Snow, American Stand-Up Comic"
       </Form.Label>
       <Form.Label id="quoteDisplay3" className="quoteDisplay">
       "I don't need a hairstylist, my pillow gives me a new hairstyle every morning. — Unknown"
       </Form.Label>
       <Form.Label id="quoteDisplay4" className="quoteDisplay">
       "I already want to take a nap tomorrow. — Anonymous"
       </Form.Label>
        </Col>
        <Col sm={6}>
          <Form className="survey-form">
            <Form.Group as={Row} controlId="formHorizontalDate">
              <Form.Label column sm={12}>
                <h3>Date</h3>
    </Form.Label>
              <Col sm={8}>
                <Form.Control required type="date" name="date" onChange={changeHandler} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={12}>
                <h3>How many hours did you sleep last night?</h3>
    </Form.Label>
              <Col sm={4}>
                <Form.Control min={0} max={24} name="hoursslept" required type="number" maxLength="2" onChange={changeHandler} />
              </Col>
            </Form.Group>

            <fieldset>
              <Form.Group as={Row} onChange={changeHandler}>
                <Form.Label as="legend" column sm={12} required>
                  <h3>How was your quality of sleep?</h3>
      </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="I was up all night"
                    value="1"
                    name="sleepquality"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="I tossed and turned"
                    value="2"
                    name="sleepquality"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="I woke up a couple of times"
                    value="3"
                    name="sleepquality"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check
                    type="radio"
                    label="I got a decent night's sleep"
                    value="4"
                    name="sleepquality"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check
                    type="radio"
                    label="I slept like a baby"
                    value="5"
                    name="sleepquality"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <fieldset>
              <Form.Group as={Row} required onChange={changeHandler}>
                <Form.Label as="legend" column sm={12}>
                  <h3>How are you feeling right now?</h3>
    </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="I feel lousy"
                    value="1"
                    name="mood"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="I'm not in the best mood"
                    value="2"
                    name="mood"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="I just feel okay"
                    value="3"
                    name="mood"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check
                    type="radio"
                    label="I feel pretty good"
                    value="4"
                    name="mood"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check
                    type="radio"
                    label="I feel wonderful"
                    value="5"
                    name="mood"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={12}>
                <h3>Was there anything about your day that may have affected your sleep? (optional)</h3>
    </Form.Label>
              <Col sm={12}>
                <Form.Control as="textarea" type="text" name="notes" onChange={changeHandler} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={12}>
                <h3>When do you plan to go to bed tonight?</h3>
    </Form.Label>
              <Col sm={8}>
                <Form.Control required type="time" name="bedtime" onChange={changeHandler} />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 10 }}>
                <Button type="submit" onClick={handleFormSubmit}>Submit</Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
        
      </Row>
    </Container>
  )

}

export default Survey;


