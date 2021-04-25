import React, { useEffect, useState } from "react"
import gsap from "gsap"

import { Link } from "gatsby"
import { Link as ScrollLink } from "react-scroll"


import PACard from '../components/pa-card'
import { LogoColor } from './Logo'

import { navMenuOpen, navMenuClose } from '../animations/navAnimations'

const Header = ({ galleryScrolled, pageLocation }) => {
  const [innrNavVis, setInnrNavVis] = useState(0)
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false)

  useEffect(() => {
    if (pageLocation === "/gallery") {
      const newVis = galleryScrolled ? 0 : 1
      setInnrNavVis(newVis)
    } else {
      setInnrNavVis(1)
    }
  }, [galleryScrolled, pageLocation])

  const toggleAboutMenu = (e) => {
    e.stopPropagation()

    /*
    - if menu is closed
      + then set styles
      + setMenuOpen
    - if menu is open
      + set styles
      + then close
    */
    if (!aboutMenuOpen) {
      navMenuOpen(".nav", ".about-menu .shade")
      setTimeout(() => {
        setAboutMenuOpen(true)
      }, 100);
    } 
    else {
      navMenuClose(".nav", ".about-menu .shade")
      setTimeout(() => {
        setAboutMenuOpen(false)
      }, 600);
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="inner-header">
          <div className="nav-left">
            <div className="logo">
              <Link to="/">
                <LogoColor />
              </Link>
            </div>
            <h2 className="nav-header" style={{ opacity: `${innrNavVis}` }}>
              <Link to="/">
                <span>PLANT POWER</span>
                <span className="racing"> RACING</span>
              </Link>
            </h2>
          </div>
          <div className="navigation">
            <nav className="nav" style={{ opacity: `${innrNavVis}` }}>
              {pageLocation === "/" ? (
                <>
                  <Link to="/sponsors">
                    <span className="hover-shadows">Sponsors</span>
                  </Link>
                  <ScrollLink to="events" smooth="true" offset={-125}>
                    <span className="hover-shadows">Events</span>
                  </ScrollLink>
                  <Link to="posts" smooth="true" offset={-125}>
                    <span className="hover-shadows">Writing</span>
                  </Link>
                  <ScrollLink to="about" smooth="true" offset={-120}>
                    <span className="hover-shadows last">
                      About
                      <button onClick={toggleAboutMenu}>
                        {aboutMenuOpen ? "-" : "+"}
                      </button>
                    </span>
                  </ScrollLink>
                  <div className="about-menu">
                    <div className="shade" />
                    <ScrollLink to="about" smooth="true" offset={-120}>
                      <span>STORY</span>
                    </ScrollLink>
                    <Link to="/team">
                      <span>TEAM</span>
                    </Link>
                    <ScrollLink to="contact" smooth="true" offset={-125}>
                      <span>CONTACT</span>
                    </ScrollLink>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/sponsors">
                    <span className="hover-shadows">Sponsors</span>
                  </Link>
                  <Link to="/#events">
                    <span className="hover-shadows">Events</span>
                  </Link>
                  <Link to="/posts">
                    <span className="hover-shadows">Writing</span>
                    </Link>
                    <Link to={null} disabled>
                    <span className="hover-shadows last">
                      About
                      <button onClick={toggleAboutMenu}>
                        {aboutMenuOpen ? "-" : "+"}
                      </button>
                    </span>
                  </Link>
                  <div className="about-menu">
                    <div className="shade" />
                    <Link to="/#about" >
                      <span>STORY</span>
                    </Link>
                    <Link to="/team">
                      <span>TEAM</span>
                    </Link>
                    <Link to="/#contact" >
                      <span>CONTACT</span>
                    </Link>
                  </div>
                </>
              )}
            </nav>
            <PACard />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
