import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Image, Container } from "react-bootstrap";
import "./MyBed.css";

function MyBed() {

  return (
      <Container>
        <CardGroup>
          <Card className="card">
            <Link to="/survey">
              <Card.Img as={Image} className="cardImg" variant="top" src="img/sleep.jpeg" alt="Sleep Image" />
              <Card.ImgOverlay>
                <Card.Title>Record your sleep</Card.Title>
              </Card.ImgOverlay>
            </Link>
          </Card>
          <Card className="card">
            <Link to="/journal">
              <Card.Img as={Image} className="cardImg" variant="top" src="img/dream.png" alt="Dream Image" />
              <Card.ImgOverlay>
                <Card.Title>Log your dreams</Card.Title>
              </Card.ImgOverlay>
            </Link>
          </Card>
          </CardGroup>
          <CardGroup>
          <Card className="card">
            <Link to="/stats">
              <Card.Img as={Image} className="cardImg" variant="top" src="img/analyze.jpg" alt="Chart Image" />
              <Card.ImgOverlay>
                <Card.Title>Analyze your sleep habits</Card.Title>
              </Card.ImgOverlay>
            </Link>
          </Card>
          <Card className="card">
            <Link to="/tools">
              <Card.Img as={Image} className="cardImg" variant="top" src="img/reflect.jpg" alt="Reflect Image" />
              <Card.ImgOverlay>
                <Card.Title>Reflect and relax</Card.Title>
              </Card.ImgOverlay>
            </Link>
          </Card>
        </CardGroup>
      </Container>
  );
}

export default MyBed;
