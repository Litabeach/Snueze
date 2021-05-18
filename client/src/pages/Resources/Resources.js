import React, { Component } from "react";
import ResourceLink from "../../components/ResourceLink/ResourceLink"
import resources from "../../components/ResourceLink/resourcelink.json";


class Resources extends Component {
    state = {
        resources
    };
  
    render() {
      return (
     <div>
         <h1 className="resourceh1">Resources</h1>
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
      );
    }
  }
  
  export default Resources;
  

