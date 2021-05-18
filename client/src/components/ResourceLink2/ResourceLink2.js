import React from "react";

function ResourceLink2(props) {
    return (
        <div className="resource-card">
            <h5><a href={props.link} className="resource-links"><img src={props.image1} className="img-fluid resource-img"
                alt={props.alt1} />
            {props.title} </a> </h5>
            <p>{props.description} </p>
            {/* <p><a href={props.link} className="links">Visit {props.title} <br />
            </a></p> */}
        </div>


    );
}

export default ResourceLink2;