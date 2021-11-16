import React, { useEffect, useState } from "react"
import gsap from "gsap"

import { Link } from "gatsby"
import { Link as ScrollLink } from "react-scroll"

import PACard from "../components/pa-card"
import { LogoColor } from "./Logo"

import { navMenuOpen, navMenuClose } from "../animations/navAnimations"

const Header = ({ galleryScrolled, pageLocation, setCursor }) => {
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
      }, 100)
    } else {
      navMenuClose(".nav", ".about-menu .shade")
      setTimeout(() => {
        setAboutMenuOpen(false)
      }, 600)
    }
  }

  const cursorOpen = () => {
    setCursor("open")
  }
  const cursorFocus = () => {
    setCursor("focus")
  }

  return (
    <header className="header">
      <div className="container">
        <div className="inner-header">
          <div className="nav-left">
            <div
              className="logo"
              onMouseEnter={cursorFocus}
              onMouseLeave={cursorOpen}
            >
              <Link to="/">
                <LogoColor />
              </Link>
            </div>
            <h2 className="nav-header" style={{ opacity: `${innrNavVis}` }}>
              <Link to="/" onMouseEnter={cursorFocus} onMouseLeave={cursorOpen}>
                <span>PLANT POWER</span>
                <span className="racing"> RACING</span>
              </Link>
            </h2>
          </div>
          <div className="navigation">
            <nav className="nav" style={{ opacity: `${innrNavVis}` }}>
              {pageLocation === "/" ? (
                <>
                  <Link
                    to="/sponsors"
                    onMouseEnter={cursorFocus}
                    onMouseLeave={cursorOpen}
                  >
                    <span className="hover-shadows">Sponsors</span>
                  </Link>
                  <ScrollLink
                    to="events"
                    smooth="true"
                    offset={-125}
                    onMouseEnter={cursorFocus}
                    onMouseLeave={cursorOpen}
                  >
                    <span className="hover-shadows">Events</span>
                  </ScrollLink>
                  <Link
                    to="posts"
                    smooth="true"
                    offset={-125}
                    onMouseEnter={cursorFocus}
                    onMouseLeave={cursorOpen}
                  >
                    <span className="hover-shadows">Writing</span>
                  </Link>
                  <ScrollLink
                    to="about"
                    smooth="true"
                    offset={-120}
                    onMouseEnter={cursorFocus}
                    onMouseLeave={cursorOpen}
                  >
                    <span className="hover-shadows last">
                      About
                      <button onClick={toggleAboutMenu}>
                        {aboutMenuOpen ? "-" : "+"}
                      </button>
                    </span>
                  </ScrollLink>
                  <div
                    className="about-menu"
                    onMouseEnter={cursorFocus}
                    onMouseLeave={cursorOpen}
                  >
                    <div className="shade" />
                    <ScrollLink
                      to="about"
                      smooth="true"
                      offset={-120}
                      onMouseEnter={cursorFocus}
                      onMouseLeave={cursorOpen}
                    >
                      <span>STORY</span>
                    </ScrollLink>
                    <Link
                      to="/team"
                      onMouseEnter={cursorFocus}
                      onMouseLeave={cursorOpen}
                    >
                      <span>TEAM</span>
                    </Link>
                    <ScrollLink
                      to="contact"
                      smooth="true"
                      offset={-125}
                      onMouseEnter={cursorFocus}
                      onMouseLeave={cursorOpen}
                    >
                      <span>CONTACT</span>
                    </ScrollLink>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/sponsors"
                    onMouseEnter={cursorFocus}
                    onMouseLeave={cursorOpen}
                  >
                    <span className="hover-shadows">Sponsors</span>
                  </Link>
                  <Link
                    to="/#events"
                    onMouseEnter={cursorFocus}
                    onMouseLeave={cursorOpen}
                  >
                    <span className="hover-shadows">Events</span>
                  </Link>
                  <Link
                    to="/posts"
                    onMouseEnter={cursorFocus}
                    onMouseLeave={cursorOpen}
                  >
                    <span className="hover-shadows">Writing</span>
                  </Link>
                  <Link
                    to={null}
                    disabled
                    onMouseEnter={cursorFocus}
                    onMouseLeave={cursorOpen}
                  >
                    <span className="hover-shadows last">
                      About
                      <button onClick={toggleAboutMenu}>
                        {aboutMenuOpen ? "-" : "+"}
                      </button>
                    </span>
                  </Link>
                  <div className="about-menu">
                    <div className="shade" />
                    <Link
                      to="/#about"
                      onMouseEnter={cursorFocus}
                      onMouseLeave={cursorOpen}
                    >
                      <span>STORY</span>
                    </Link>
                    <Link
                      to="/team"
                      onMouseEnter={cursorFocus}
                      onMouseLeave={cursorOpen}
                    >
                      <span>TEAM</span>
                    </Link>
                    <Link
                      to="/#contact"
                      onMouseEnter={cursorFocus}
                      onMouseLeave={cursorOpen}
                    >
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
