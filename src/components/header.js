import React, { useEffect, useState } from "react"
import gsap from "gsap"

import { Link } from "gatsby"
import { Link as ScrollLink } from "react-scroll"


import PACard from '../components/pa-card'

import { LogoColor } from './Logo'

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
      gsap.to(".nav", .3, {
        ease: "expo.in",
        x: "-35vh",
      })
      gsap.to(".about-menu .shade", .3, {
        ease: "expo.in",
        delay: .6,
        scaleX: 0,
      }
      )
      setTimeout(() => {
        setAboutMenuOpen(true)
      }, 100);
    } 
    else {
      gsap.to(".about-menu .shade", 0.5, {
        ease: "expo.in",
        scaleX: 1
      })
      gsap.to(".navigation nav", 0.3, {
        ease: "expo.in",
        delay: 0.3,
        x: "0",
      })
      setTimeout(() => {
        setAboutMenuOpen(false)
      }, 100);
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
                  <ScrollLink to="events" smooth offset={-125}>
                    <span className="hover-shadows">Events</span>
                  </ScrollLink>
                  <Link to="posts" smooth offset={-125}>
                    <span className="hover-shadows">Writing</span>
                  </Link>
                  <ScrollLink to="about" smooth offset={-120}>
                    <span className="hover-shadows last">
                      About
                      <button onClick={toggleAboutMenu}>
                        {aboutMenuOpen ? "-" : "+"}
                      </button>
                    </span>
                  </ScrollLink>
                  <div className="about-menu">
                    <div className="shade" />
                    <ScrollLink to="about" smooth offset={-120}>
                      <span>STORY</span>
                    </ScrollLink>
                    <Link to="/team">
                      <span>TEAM</span>
                    </Link>
                    <ScrollLink to="contact" smooth offset={-125}>
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
                  <Link to="/#about">
                    <span className="hover-shadows">about</span>
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
                    <Link to="about" >
                      <span>STORY</span>
                    </Link>
                    <Link to="/team">
                      <span>TEAM</span>
                    </Link>
                    <Link to="contact" >
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
