// Andrew Barlow
// header.js
// header React component
// 2021

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// Personal Logo
import Logo from '../assets/logo-black.svg'

const Header = ({ siteTitle }) => (
  <header>
    <Logo />

    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
