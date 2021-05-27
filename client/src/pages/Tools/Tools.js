
import React from "react";
import Meditation from "../../components/Meditation"
import { Container } from 'react-bootstrap'
import Quote from "../../components/Quote"
import "./style.css"

function Tools() {

    return (
      <div>
      <p id="quoteDisplay1" className="quoteDisplay">I think it is good that books still exist, but they do make me sleepy. — Frank Zappa, The Real Frank Zappa Book</p>
      <Container className ="myBedContainer" fluid>      
      <h1>Meditate</h1>
      <h4 className="subheading">Sometimes we need a little help drifting off to dreamland. Choose your duration on the left, and your sleep sounds on the right, then hit play to drift off into a comfortable sleep.</h4>

        <Meditation/>
        </Container>
        </div>
    );
  }


export default Tools;

