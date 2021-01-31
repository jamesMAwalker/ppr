import React from "react"
import { Link } from "gatsby"

import { LogoColor, PALogo } from './Logo'

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="inner-header">
        <div className="nav-left">
          <div className="logo">
            <Link to="/">
              <LogoColor />
            </Link>
          </div>
          <h2 className="nav-header">
            <span>PLANT POWER</span><span className='racing'> RACING</span>
          </h2>
        </div>
        <div className="navigation">
          <nav className="nav">
            <Link to="/about">
              <span className="hover-shadows">About</span>
            </Link>
            <Link to="/team">
              <span className="hover-shadows">Team</span>
            </Link>
            <Link to="/contact">
              <span className="hover-shadows">Contact</span>
            </Link>
          </nav>
          <div className="PA-square">
            <Link>
              <PALogo />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
