import React, { useEffect, useState } from "react"
import gsap from "gsap"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Logo } from "./Logo"
import { InstaIcon, ScrollIcon, StravaIcon } from "./icons"

const MobileMenu = ({ btnVisible, menuVisible, toggleMenu }) => {
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
          transform: "scaleY(1)",
          opacity: 1,
        })
    } else {
      gsap
        .timeline()
        .to(".menu-body", 0.15, {
          transform: "scaleY(.75)",
          opacity: 0,
        })
        .to(".menu-body", 0.4, {
          visibility: "collapse",
        })
    }
  }

  return (
    <>
      <button
        className={`
        mobile-navigation 
        ${!btnVisible ? "btn-visible" : ""}
        ${menuVisible ? "menu-open" : ""}
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
            bg="var(--pink)"
            direction="left"
            to="/"
          ><p>HOME</p></AniLink>
          <span>▪</span>
          <AniLink
            cover
            bg="var(--pink)"
            direction="left"
            to="/"
          ><p>CONTACT</p></AniLink>
          <span>▪</span>
          <AniLink
            cover
            bg="var(--pink)"
            direction="left"
            to="/team"
          ><p>TEAM</p></AniLink>
          <span>▪</span>
          <AniLink
            cover
            bg="var(--pink)"
            direction="left"
            to="/sponsors"
          ><p>SPONSORS</p></AniLink>
          <span>▪</span>
          <AniLink
            cover
            bg="var(--pink)"
            direction="left"
            to="/gallery"
          ><p>GALLERY</p></AniLink>
        </div>
        <div className="menu-footer">
          <div className="social">
            <InstaIcon />
            <StravaIcon />
          </div>
          <div className="copyright">
            <Logo />
            <p>PLANT ▪ POWER ▪ RACING</p>
            <p>©2021</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
