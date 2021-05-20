import React from "react";
import "./card.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Card() {
  return (
    <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default DeleteBtn;


