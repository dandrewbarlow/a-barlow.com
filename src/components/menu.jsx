import * as React from 'react'
import { Link } from 'gatsby';

import Index from "../pages/index";
import About from "../pages/about";
import Art from "../pages/art";
import Projects from "../pages/projects";

function Menu() {
  return (
      <nav>
        <ul>
          <Link to="/about">About Me</Link>
          <Link to="/art">Art</Link>
          <Link to="/projects">Projects</Link>
        </ul>
      </nav>
  )
}

export default Menu;