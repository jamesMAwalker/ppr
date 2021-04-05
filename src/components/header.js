import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"

import PACard from '../components/pa-card'

import { LogoColor } from './Logo'

const Header = ({ galleryScrolled, pageLocation }) => {
  console.log('galleryScrolled: ', galleryScrolled);
  const [innrNavVis, setInnrNavVis] = useState(0)



  useEffect(() => {
    if (pageLocation === "/gallery") {
      const newVis = galleryScrolled ? 0 : 1
      setInnrNavVis(newVis)
    } else {
      setInnrNavVis(1)
    }
  }, [galleryScrolled])

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
                  <ScrollLink to="about" smooth offset={-120}>
                    <span className="hover-shadows">About</span>
                  </ScrollLink>
                  <Link to="/team">
                    <span className="hover-shadows">Team</span>
                  </Link>
                  <Link to="/sponsors">
                    <span className="hover-shadows">Sponsors</span>
                  </Link>
                  <ScrollLink to="events" smooth offset={-125}>
                    <span className="hover-shadows">Events</span>
                  </ScrollLink>
                  <ScrollLink to="contact" smooth offset={-125}>
                    <span className="hover-shadows">Contact</span>
                  </ScrollLink>
                </>
              ) : (
                <>
                  <Link to="/#about" >
                    <span className="hover-shadows">About</span>
                  </Link>
                  <Link to="/team">
                    <span className="hover-shadows">Team</span>
                  </Link>
                  <Link to="/sponsors">
                    <span className="hover-shadows">Sponsors</span>
                  </Link>
                  <Link to="/#events">
                    <span className="hover-shadows">Events</span>
                  </Link>
                  <Link to="/#contact">
                    <span className="hover-shadows">Contact</span>
                  </Link>
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
