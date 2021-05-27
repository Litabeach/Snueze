import React from "react";
import { Card, Col } from "react-bootstrap"

function ResourceLink(props) {
    return (
        <Col sm={12}>
                <Card.Body className="resource-card">
                <Card.Title><span><a href={props.link} className="resource-links"><img src={props.image1} className="img-fluid resource-img"
                    alt={props.alt1} />
                    {props.title}</a></span></Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
        </Col>
    );
}

export default ResourceLink;