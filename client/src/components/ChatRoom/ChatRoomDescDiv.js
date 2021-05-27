
import React, { Component } from "react";
import ChatDescription from '../ChatDescriptions/ChatDescriptions';
import chatDesc from '../ChatDescriptions/chat-description.json';
import "../../pages/Community/style.css"
import { Form, Col, Row } from 'react-bootstrap'


class ChatRoomDescDiv extends Component {
  state = {
    chatDesc
  };

  render() {
    return (
      <Form.Group >
        <h3 className="list-heading">Video Chat Rooms</h3>
          <Col sm={12}>
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
          </Col>
      </Form.Group>
    );

  }
}

export default ChatRoomDescDiv;