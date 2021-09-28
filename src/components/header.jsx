import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "./menu"
import Icon from "../images/icon.png";

const Header = ({ siteTitle }) => (
  <div id="menubar">
    <header>
        <Link id="icon" to="/">
            <img src={Icon} alt="Icon"/>
        </Link>

        <Link to="/">
            <h1>
                {siteTitle}
            </h1>
        </Link>
    </header>
            
        <Menu />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;