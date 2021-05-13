import React from "react";

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
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

      <div>
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
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Lobby;