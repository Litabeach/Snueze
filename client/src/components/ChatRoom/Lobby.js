import React from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import "./style.css"
// This component doesn't need to store any data as it will pass all events up to its parent, the VideoChat component. 
const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
}) => {
  return (
    <Form className="chatForm" onSubmit={handleSubmit}>
      <Row>
        <Col sm={12} className="lobbyCol">
          <Form.Group className="lobby-form">
            <h3 className="lobby-header">Enter a room</h3>
            <Col sm={6}>
            <Form.Label htmlFor="name">
              <h4>Your Name:</h4>
            </Form.Label>
            </Col>
            <Col sm={10}>
            <Form.Control
              type="text"
              id="field"
              value={username}
              onChange={handleUsernameChange}
              required>
            </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group className="lobby-form">
          <Col sm={6}>
            <Form.Label htmlFor="room">
              <h4>Room name:</h4>
            </Form.Label>
            </Col>
            <Col sm={10}>
            <Form.Control className="room-menu" as="select" value={roomName} onChange={handleRoomNameChange}>
              <option value="Dream Team">Dream Team</option>
              <option value="Insomniacs">Insomniacs</option>
              <option value="Pillow Talk">Pillow Talk</option>
              <option value="Pregnancy and Sleep">Pregnancy and Sleep</option>
              <option value="Restless Leg Syndrome">Restless Leg Syndrome</option>
              <option value="Sleep Aids">Sleep Aids</option>
              <option value="Sleep Apnea">Sleep Apnea</option>
              <option value="Sleep for Kids">Sleep for Kids</option>
              <option value="Sleep Walking">Sleep Walking</option>
              <option value="Too Much Sleep">Too Much Sleep</option>
            </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group>
          <Col sm={10}>
            <Button className="join-btn lobby-form" type="submit" onSubmit={handleSubmit}>Join</Button>
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};
export default Lobby;