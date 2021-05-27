import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Image, Container } from "react-bootstrap";
import "./MyBed.css";
import Quote from "../../components/Quote"

function MyBed() {

  return (
      <Container fluid className ="myBedContainer">
      <Quote />
        <CardGroup>
          <Card className="card">
            <Link to="/record">
              <Card.Img as={Image} className="cardImg " variant="top" src="img/Snuzephotobutton2.png" alt="Sleep Image" />
               <Card.ImgOverlay>
                <Card.Title>Record your sleep</Card.Title>
               </Card.ImgOverlay> 
            </Link>
          </Card>
          <Card className="card">
            <Link to="/dream">
              <Card.Img as= {Image} className="cardImg" variant="top" src="img/Snuze_photo_button_4(1).png" alt="on phone in bed image" />
               <Card.ImgOverlay> 
                <Card.Title>Log your dreams</Card.Title>
              </Card.ImgOverlay>
            </Link>
          </Card>
          </CardGroup>
          <CardGroup>
          <Card className="card">
            <Link to="/insights">
              <Card.Img as={Image} className="cardImg" variant="top" src="img/Snuze_photo_button_3_(1).png" alt="Chart Image" />
               <Card.ImgOverlay> 
                <Card.Title className = "cardPadding">Analyze your sleep habits</Card.Title>
               </Card.ImgOverlay> 
            </Link>
          </Card>
          <Card className="card">
            <Link to="/meditate">
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
