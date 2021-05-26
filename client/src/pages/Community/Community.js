import React, { Component } from "react";
import ChatRoom from '../../components/ChatRoom';
import ChatDescription from '../../components/ChatDescriptions/ChatDescriptions';
import chatDesc from '../../components/ChatDescriptions/chat-description.json';
import { Row } from "react-bootstrap";


class Community extends Component {
  state = {
    chatDesc
  };

  render() {
    return (


      <main className="container">
        <h1>Community Chat Rooms</h1>
        <div className="chatCopyDiv">
          <h5 className="subheading">Sometimes all we're really looking for is a person to connect with over our problems or someone to go to for advice. Utilize our collection of chat rooms to talk to real people who are going through the same thing as you.</h5>
        </div>
        <Row>
        <div className="enter-chat">
        <ChatRoom />
        </div>
    
        <h3 className="chat-h3">Chat Rooms</h3>
        <div className="chat-desc-div">
        {this.state.chatDesc.map(chatDesc => (
          <div key={chatDesc.id}>
            <br></br>
           
            <ChatDescription
              id={chatDesc.id}
              title={chatDesc.title}
              description={chatDesc.description}
            />
            <br></br>
           
          </div>
        ))}
        
        </div>
        </Row>

      </main>
    );

  }
}

export default Community;


