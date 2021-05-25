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
    <Form className="chatForm" onSubmit={handleSubmit}>
    <Form.Group className="chatForm">
    <h2 className="chatH2">Enter a room</h2>
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
    <Form.Group className="chatForm">
        <label htmlFor="room">Room name:</label>
        <select id="room" value={roomName} onChange={handleRoomNameChange} required>
            <option selected> Select Room</option>
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
          </select>
        {/* <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          required
        /> */}
      </Form.Group>
      <Form.Group className="chatForm">
      <button className="chatButton" type="submit">Submit</button>
      </Form.Group>  
    </Form>
  );
};
export default Lobby;