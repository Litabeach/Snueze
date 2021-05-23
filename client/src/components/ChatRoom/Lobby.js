import React from "react";
import { Form } from 'react-bootstrap';
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
    <Form onSubmit={handleSubmit}>
    <Form.Group>
    <h2>Enter a room</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
    </Form.Group>
    <Form.Group>
        <label htmlFor="room">Room name:</label>
        <select id="room" value={roomName} onChange={handleRoomNameChange} required>
            <option selected> Select</option>
            <option value="Room One">Room One</option>
            <option value="Room Two">Room Two</option>
            <option value="Room Three">Room Three</option>
            <option value="Room Four">Room Four</option>
          </select>
        {/* <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          required
        /> */}
      </Form.Group>
      <Form.Group>
      <button type="submit">Submit</button>
      </Form.Group>  
    </Form>
  );
};
export default Lobby;