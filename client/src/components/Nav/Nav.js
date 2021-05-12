import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function Nav() {
  return (
    //this has bootstrap styling, will need to install bootstrap and link it in index.js if we choose to use this styling
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Sleepify Snooze Slumber
      </a>
        <Link className="navLink" to="/community">Community</Link>
        <Link className="navLink" to="/login">Login</Link>
        <Link className="navLink" to="/resources">Resources</Link>
        {/* in the future MyBed will be a dropdown with stats, survey, journal and tools */}
        <Link className="navLink" to="/mybed">MyBed</Link>
        <Link className="navLink" to="/journal">Journal</Link>
        <Link className="navLink" to="/Stats">Stats</Link>
        <Link className="navLink" to="/survey">Survey</Link>
        <Link className="navLink" to="/tools">Tools</Link>
    </nav>
  );
}

export default Nav;