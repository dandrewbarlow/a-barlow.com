import * as React from 'react'
import { Link } from 'gatsby';

// import Index from "../pages/index";
// import About from "../pages/about";
// import Art from "../pages/art";
// import Projects from "../pages/projects";

function Menu() {
  return (
      <nav
      className='navbar-menu'
      >
        <ul>
          <Link className="navbar-item" to="/about">About Me</Link>
          <Link className="navbar-item" to="/art">Art</Link>
          <Link className="navbar-item" to="/projects">Projects</Link>
        </ul>
      </nav>
  )
}

export default Menu;