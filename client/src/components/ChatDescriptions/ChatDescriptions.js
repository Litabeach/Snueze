import React from 'react';
import "./style.css";
import Accordion from 'react-bootstrap/Accordion';


function ChatDescription(props) {
    return (
        <div className="chat-desc-item">
            <Accordion>
                <Accordion.Toggle className="chatTitle" eventKey={props.id}>
                    <h4 className="room-desc-title">{props.title}</h4>
                </Accordion.Toggle> <br />
                <Accordion.Collapse className="chatBody" eventKey={props.id}>
                    <h5 className="room-desc-body">{props.description}</h5>
                </Accordion.Collapse>
            </Accordion>

        </div>
    );
}

export default ChatDescription;

