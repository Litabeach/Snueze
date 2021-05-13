import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Snüze</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/mybed" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              My Bed
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/survey">Sleep</a>
              <a class="dropdown-item" href="/journal">Dream</a>
              <a class="dropdown-item" href="/stats">Reflect</a>
              <a class="dropdown-item" href="/tools">Aides</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/resources">Resources</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/community">Community</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;
