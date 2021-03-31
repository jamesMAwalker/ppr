import React, { useEffect, useState } from "react"
import gsap from "gsap"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Logo } from "./Logo"
import { InstaIcon, ScrollIcon, StravaIcon } from "./icons"

const MobileMenu = ({ btnVisible, isMobile, menuVisible, pageLocation, toggleMenu }) => {
  const [btnDisabled, setBtnDisabled] = useState(false)

  const handleMenuOpen = () => {
    setBtnDisabled(true)
    setTimeout(() => {
      toggleMenuVis()
      toggleMenu()
      setBtnDisabled(false)
    }, 100)
  }

  const toggleMenuVis = () => {
    if (!menuVisible) {
      gsap
        .timeline()
        .to(".menu-body", 0.01, {
          visibility: "visible",
        })
        .to(".menu-body", 0.2, {
          transform: "translateY(0)",
          opacity: 1,
        })
    } else {
      gsap
        .timeline()
        .to(".menu-body", 0.15, {
          transform: "translateY(5vh)",
          opacity: 0,
        })
        .to(".menu-body", 0.4, {
          visibility: "collapse",
        })
    }
  }

  return (
    <>
      {pageLocation !== "/" && !btnVisible && !menuVisible && isMobile && (
        <div className="current-page">▪{pageLocation}</div>
      )}
      <button
        className={`
        mobile-nav-btn 
        ${!btnVisible ? "btn-visible" : ""}
        ${menuVisible ? "btn-open-style" : ""}
        `}
        disabled={btnDisabled}
        onClick={handleMenuOpen}
      >
        <ScrollIcon />
      </button>
      <div className="menu-body">
        <div className="menu-options">
          <AniLink
            cover
            duration={4}
            bg="
              url('https://res.cloudinary.com/jameswalker-work/image/upload/v1616922764/cover-slider-2_ohaszl.png')
              center / contain
              var(--black)
              no-repeat  
            "
            direction="left"
            to="/"
          >
            <p onClick={handleMenuOpen}>HOME</p>
          </AniLink>
          <span>▪</span>
          <AniLink cover bg="var(--pink)" direction="left" to="/">
            <p onClick={handleMenuOpen}>CONTACT</p>
          </AniLink>
          <span>▪</span>
          <AniLink
            cover
            bg="linear-gradient(pink, lightblue)"
            direction="left"
            to="/team"
          >
            <p onClick={handleMenuOpen}>TEAM</p>
          </AniLink>
          <span>▪</span>
          <AniLink cover bg="var(--pink)" direction="left" to="/sponsors">
            <p onClick={handleMenuOpen}>SPONSORS</p>
          </AniLink>
          <span>▪</span>
          <AniLink cover bg="var(--pink)" direction="left" to="/gallery">
            <p onClick={handleMenuOpen}>GALLERY</p>
          </AniLink>
        </div>
        <div className="menu-footer">
          <div className="social">
            <InstaIcon />
            <StravaIcon />
          </div>
          <AniLink
            className="copyright"
            cover
            bg="var(--pink)"
            direction="right"
            to="/"
          >
            <Logo />
            <p>PLANT ▪ POWER ▪ RACING</p>
            <p>©2021</p>
          </AniLink>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
