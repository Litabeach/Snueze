  
import React, { Component } from "react";
import ChatDescription from '../ChatDescriptions/ChatDescriptions';
import chatDesc from '../ChatDescriptions/chat-description.json';
import "../../pages/Community/style.css"


class ChatRoomDescDiv extends Component {
  state = {
    chatDesc
  };

  render() {
    return (
   
        <div>
        <h3 className="chat-h3">Video Chat Rooms</h3>
        <div className="chat-desc-div">
        {this.state.chatDesc.map(chatDesc => (
          <div key={chatDesc.id}>
        
           
            <ChatDescription
              id={chatDesc.id}
              title={chatDesc.title}
              description={chatDesc.description}
            />
           
           
          </div>
          
        ))}
        
        </div>
        
        </div>
    );

  }
}

export default ChatRoomDescDiv;