import React from "react";
import {Container} from 'react-bootstrap'
import "./style.css"

function NoMatch() {
  return (
    <Container fluid>
      <p id="quoteDisplay1" className="quoteDisplay">Dear sleep, I'm sorry we broke up this morning. I want you back! — Anonymous Snuze User</p>
    <h1>404 Page Not Found</h1>
    </Container>
  );
}

export default NoMatch;
