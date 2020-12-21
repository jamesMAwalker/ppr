import React from "react"
import { Link } from "gatsby"

import { LogoColor } from './Logo'

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">
            <LogoColor />
          </Link>
        </div>
        <div className="navigation">
          <nav className="nav">
            <Link to="/about">About</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
