
import React from "react";
import {Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";


function MyBed() {

    return (
        <Jumbotron>
            <h1>My Bed</h1>
            <div>
            <Link to="/Journal"><button>
              Journal
            </button>
            </Link>
          
            <Link to="/Resources"><button>
              Resources
            </button>
            </Link>
            <Link to="/Stats"><button>
              Stats
            </button>
            </Link>
          
            <Link to="/Tools"><button>
             Tools
            </button>
            </Link>
            <Link to="/Community"><button>
             Community
            </button>
            </Link>
          </div>
            
          
        </Jumbotron>
    );
  }


export default MyBed;

