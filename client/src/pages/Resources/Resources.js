import React, { Component } from "react";
import ResourceLink from "../../components/ResourceLink/ResourceLink"
import resources2 from "../../components/ResourceLink2/resourcelink2.json";
import ResourceLink2 from "../../components/ResourceLink/ResourceLink"
import resources from "../../components/ResourceLink/resourcelink.json";
import Jumbotron from "../../components/Jumbotron/Jumbotron"



class Resources extends Component {
  state = {
    resources, resources2
  };

  render() {
    return (
      <div>
      {/* <h1 className="resourceh1">Resources</h1> */}
      <Jumbotron>Resources</Jumbotron>
      <div className="resourcecontainer">
        <h5 className="subheading">When You Can't Get To Sleep</h5>
        {this.state.resources.map(resources => (
          <div key={resources.id}>
            <br></br>
            <ResourceLink
              id={resources.id}
              title={resources.title}
              description={resources.description}
              link={resources.link}
              image1={resources.image1}
              alt1={resources.alt1}
            />
            <br></br>
          </div>
          
        ))}
      </div>

      <div className="resourcecontainer">
        <h3 className="resourceh3">When You Aren't Sleeping Enough Hours</h3>
        {this.state.resources2.map(resources2 => (
          <div key={resources2.id}>
            <br></br>
            <ResourceLink2
              id={resources2.id}
              title={resources2.title}
              description={resources2.description}
              link={resources2.link}
              image1={resources2.image1}
              alt1={resources2.alt1}
            />
            <br></br>
          </div>
          
        ))}
      </div>
      </div>
    );
  }
}

export default Resources;


