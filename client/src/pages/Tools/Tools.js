
import React from "react";
import Meditation from "../../components/Meditation"
import { Container } from 'react-bootstrap'
import Quote from "../../components/Quote"

function Tools() {

    return (
      <Container fluid>
      <Quote />
      
      <h1>Meditate</h1>
      <h4 className="subheading">Sometimes we need a little help drifting off to dreamland. Choose your duration on the left, and your sleep sounds on the right, then hit play to drift off into a comfortable sleep.</h4>

        <Meditation/>
        </Container>
    );
  }


export default Tools;

