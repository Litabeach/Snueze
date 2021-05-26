import React from 'react';
import "./style.css";
import Accordion from 'react-bootstrap/Accordion';
import { ListGroup } from "react-bootstrap";
import { List } from "../List/index";


function ChatDescription(props) {
    return (
        <div className="chat-desc-item">
            <List>
            <Accordion>
            <ListGroup.Item key={props.id} className="chat-title">
                <Accordion.Toggle as={ListGroup}  eventKey={props.id}>
                    <h6 className="list-title">{props.title}</h6>
                </Accordion.Toggle> <br />
                <Accordion.Collapse eventKey={props.id}>
                    <p className="list-body">{props.description}</p>
                </Accordion.Collapse>
                </ListGroup.Item>
            </Accordion>
            </List>
        </div>
    );
}

export default ChatDescription;

