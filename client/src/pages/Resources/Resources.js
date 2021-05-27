import React, { Component } from "react";
import ResourceLink from "../../components/ResourceLink/ResourceLink"
import resources2 from "../../components/ResourceLink2/resourcelink2.json";
import ResourceLink2 from "../../components/ResourceLink/ResourceLink"
import resources from "../../components/ResourceLink/resourcelink.json";
import "./style.css"
import { Container, Row, Col } from 'react-bootstrap'
import Quote from "../../components/Quote"


class Resources extends Component {
  state = {
    resources, resources2
  };

  render() {
    return (

    <div>
      <p id="quoteDisplay1" className="quoteDisplay">No civilized person goes to bed the same day he gets up. — Richard Harding Davis, American Journalist</p>
      
      <Container className ="myBedContainer">
      <h1>Resources</h1>
        <Row>
          <Col sm={12} className="resourcecontainer">
            <h3 className="sectionHeader">Having trouble falling asleep?</h3>
            <div className="section">
            {this.state.resources.map(resources => (
              <div key={resources.id}>
                <ResourceLink
                  id={resources.id}
                  title={resources.title}
                  description={resources.description}
                  link={resources.link}
                  image1={resources.image1}
                  alt1={resources.alt1}
                />
              </div>
            ))}
            </div>
          </Col>
          </Row>
          <Row>
          <Col sm={12} className="resourcecontainer">
            <h3 className="sectionHeader">Not sleeping enough hours?</h3>
            {this.state.resources2.map(resources2 => (
              <div key={resources2.id}>
                <ResourceLink2
                  id={resources2.id}
                  title={resources2.title}
                  description={resources2.description}
                  link={resources2.link}
                  image1={resources2.image1}
                  alt1={resources2.alt1}
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Resources;


