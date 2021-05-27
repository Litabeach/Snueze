
import React, { Component } from "react";
import ChatRoom from '../../components/ChatRoom';
import ChatDescription from '../../components/ChatDescriptions/ChatDescriptions';
import chatDesc from '../../components/ChatDescriptions/chat-description.json';
import { Container, Row, Col, Form } from "react-bootstrap";
import "./style.css"


class Community extends Component {
  state = {
    chatDesc
  };

  render() {
    return (
      <Container fluid>
        <h1>Community Chat Rooms</h1>
        <h5 className="subheading">Sometimes all we're really looking for is a person to connect with over our problems or someone to go to for advice. Utilize our collection of video chat rooms to talk to real people who are going through the same thing as you.</h5>
          <Col sm={12} className="chatRoomCol">
            <div className="communtiychatroomdiv">
              <div className="enter-chat">
                <ChatRoom />
              </div>
            </div>
          </Col>
      </Container>

    );

  }
}

export default Community;