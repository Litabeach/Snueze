import React, { useState, useCallback, useEffect } from "react";
import Lobby from "./Lobby";
import Room from "./Room";

const VideoChat = () => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState("");

//sets the username to the value from Lobby
  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

//sets the roomName to the value from Lobby
  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value);
  }, []);


// API call to send the data as JSON to the endpoint, receive and parse the response. setToken stores the token in our state. Dependent on username and roomName
  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const data = await fetch('/video/token', {
      method: 'POST',
      body: JSON.stringify({
        identity: username,
        room: roomName
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
    setToken(data.token);
  }, [username, roomName]);

  //sends user back to lobby after logout
  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

let render;
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  } else {
    render = (
      <Lobby
         username={username}
         roomName={roomName}
         handleUsernameChange={handleUsernameChange}
         handleRoomNameChange={handleRoomNameChange}
         handleSubmit={handleSubmit}
      />
    );
  }
  return render;
};


export default VideoChat;