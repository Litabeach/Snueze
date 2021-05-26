import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Image, Container } from "react-bootstrap";
import "./MyBed.css";

function MyBed() {

  return (
      <Container className ="myBedContainer">
        <CardGroup>
          <Card className="card">
            <Link to="/survey">
              <Card.Img as={Image} className="cardImg " variant="top" src="img/Snuzephotobutton2.png" alt="Sleep Image" />
               <Card.ImgOverlay>
                <Card.Title>Record your sleep</Card.Title>
               </Card.ImgOverlay> 
            </Link>
          </Card>
          <Card className="card">
            <Link to="/journal">
              <Card.Img as= {Image} className="cardImg" variant="top" src="img/Snuze_photo_button_4(1).png" alt="on phone in bed image" />
               <Card.ImgOverlay> 
                <Card.Title>Log your dreams</Card.Title>
              </Card.ImgOverlay>
            </Link>
          </Card>
          </CardGroup>
          <CardGroup>
          <Card className="card">
            <Link to="/stats">
              <Card.Img as={Image} className="cardImg" variant="top" src="img/Snuze_photo_button_3_(1).png" alt="Chart Image" />
               <Card.ImgOverlay> 
                <Card.Title className = "cardPadding">Analyze your sleep habits</Card.Title>
               </Card.ImgOverlay> 
            </Link>
          </Card>
          <Card className="card">
            <Link to="/tools">
              <Card.Img as={Image} className="cardImg" variant="top" src="img/Snuze_photo_button1.png" alt="Reflect Image" />
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
