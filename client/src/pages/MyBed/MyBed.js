
import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";


function MyBed() {

  return (
    <div>
      <Jumbotron>
      My Bed
      </Jumbotron>

      <Link to="/Survey">Sleep<a href="/survey"><img src="https:/via.placeholder.com/150"></img></a>
      </Link>

      <Link to="/Journal">Journal<a href="https:// placeholder.com"><img src="https:/via.placeholder.com/150"></img></a>
      </Link>   

      <Link to="/Stats">Stats<a href="https:// placeholder.com"><img src="https:/via.placeholder.com/150"></img></a>
      </Link>

      <Link to="/Tools">Tools<a href="https:// placeholder.com"><img src="https:/via.placeholder.com/150"></img></a>
      </Link>

    </div>



  );
}


export default MyBed;

