import React from "react";
import {Card} from "react-bootstrap";

function ResourceLink2(props) {
    return (
        <>
            <Card className="resource">
                <Card.Body className="resource-card">
                <Card.Title><span><a href={props.link} className="resource-links"><img src={props.image1} className="img-fluid resource-img"
                    alt={props.alt1} />
                    {props.title}</a></span></Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default ResourceLink2;