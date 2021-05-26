import React, { Component } from "react";
import ChatRoom from '../../components/ChatRoom';
import ChatDescription from '../../components/ChatDescriptions/ChatDescriptions';
import chatDesc from '../../components/ChatDescriptions/chat-description.json';
import { Container, Row, Col, Form } from "react-bootstrap";
import "./style.css"


class Community extends Component {
  state = {
    chatDesc
  }

  render() {
    return (
      <Container fluid>
        <h1>Community Chat Rooms</h1>
        <h5 className="subheading">Sometimes all we're really looking for is a person to connect with over our problems or someone to go to for advice. Utilize our collection of chat rooms to talk to real people who are going through the same thing as you.</h5>
        <Row>
          <Col sm={6} className="lobbyCol">
            <ChatRoom />
          </Col>
          <Col sm={6} className="lobbyCol">
            <h3 className="lobby-header">Chat Rooms</h3>
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
        </Row>
      </Container>
    );

  }
}

export default Community;


