import React from "react";
import { Form, Row, Col, Button, Dropdown } from 'react-bootstrap';
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
    <Form className="chatForm">
    <Row>
    <Col sm={10}>
    <Form.Group className="chatForm">  
      <h3 className="lobby-header">Enter a room</h3>
          <Form.Label htmlFor="name">
            <h4>Your Name:</h4>
          </Form.Label>
          <Form.Control
            type="text"
            id="field"
            value={username}
            onChange={handleUsernameChange}
            required>
            </Form.Control>
      </Form.Group>  
    </Col>
    <Col sm={12}>
      <Form.Group className="chatForm">
        <Form.Label htmlFor="room">
        <h4>Room name:</h4>
        </Form.Label>
        <Dropdown required className="dropdown-link" id="room" value={roomName} onChange={handleRoomNameChange} required>
          <Dropdown.Toggle id="dropdown-basic">
            Select Room
          </Dropdown.Toggle>
          <Dropdown.Menu required className="room-menu">
            <Dropdown.Item className="room-item" value="Dream Team">Dream Team</Dropdown.Item>
            <Dropdown.Item className="room-item" value="Insomniacs">Insomniacs</Dropdown.Item>
            <Dropdown.Item className="room-item" value="Pillow Talk">Pillow Talk</Dropdown.Item>
            <Dropdown.Item className="room-item" value="Pregnancy and Sleep">Pregnancy and Sleep</Dropdown.Item>
            <Dropdown.Item className="room-item" value="Restless Leg Syndrome">Restless Leg Syndrome</Dropdown.Item>
            <Dropdown.Item className="room-item" value="Sleep Aids">Sleep Aids</Dropdown.Item>
            <Dropdown.Item className="room-item" value="Sleep Apnea">Sleep Apnea</Dropdown.Item>
            <Dropdown.Item className="room-item" value="Sleep for Kids">Sleep for Kids</Dropdown.Item>
            <Dropdown.Item className="room-item" value="Sleep Walking">Sleep Walking</Dropdown.Item>
            <Dropdown.Item className="room-item" value="Too Much Sleep">Too Much Sleep</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          required
        /> */}
      </Form.Group>
      </Col>
      <Col>
      <Form.Group>
        <Button className="join-btn" type="submit" onSubmit={handleSubmit}>Join</Button>
      </Form.Group> 
      </Col>
      </Row>
    </Form>
  );
};
export default Lobby;