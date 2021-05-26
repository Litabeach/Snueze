import React from 'react';
import {Alert} from 'react-bootstrap';

function alertSuccess() {
  const [show, setShow] = React.useState(flase)
  return (
      <Alert show={show} variant="success">
      Sleep recorded successfully!
    </Alert>
  )
}

export default alertSuccess;