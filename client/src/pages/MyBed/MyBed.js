
import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import Card from "react-bootstrap/Card";
import { CardGroup, Image } from "react-bootstrap";
import "./MyBed.css";

function MyBed() {

  return (
    <div>

      <Jumbotron>
        My Bed
      </Jumbotron>
      <div>
      <CardGroup>
        <Card className="card">
          <Link to="/survey">Sleep
          <Card.Img as={Image} className="cardImg" variant="top" src="img/sleep.jpeg" />
          </Link>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card">
          <Link to="/journal">Dream
            <Card.Img as={Image} className="cardImg" variant="top" src="img/dream.png" />
          </Link>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
</CardGroup>
<CardGroup>
        <Card className="card">
          <Link to="/stats">Analyze
            <Card.Img  as={Image} className="cardImg" variant="top" src="img/analyze.jpg" />
          </Link>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card">
          <Link to="/tools">Reflect
            <Card.Img  as={Image} className="cardImg" variant="top" src="img/reflect.jpg" />
          </Link>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </CardGroup>
      </div>
    </div>

  );
}


export default MyBed;

// <Link to="/Survey">Sleep<a href="/survey"><img src="https:/via.placeholder.com/150"></img></a>
// </Link>
// </div>
// <div className="col-xs-4">
// <Link to="/Journal">Journal<a href="https:// placeholder.com"><img src="https:/via.placeholder.com/150"></img></a>
// </Link>
// </div>
// </div >
