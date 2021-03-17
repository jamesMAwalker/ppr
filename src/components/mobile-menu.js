import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

import { ScrollIcon } from './icons'

const MobileMenu = ({ isVisible }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    toggleMenu()
    setMenuOpen(!menuOpen)
  }

  const toggleMenu = () => {
    if (!menuOpen) {
      gsap
        .timeline()
        .to(".menu-body", 0.01, {
          visibility: "visible",
        })
        .to(".menu-body", 0.3, {
          transform: "scaleY(1)",
          opacity: 1,
        })
    } else {
      gsap
        .timeline()
        .to(".menu-body", 0.3, {
          transform: "scaleY(0)",
          opacity: 0,
        })
        .to(".menu-body", 0.4, {
          visibility: "collapse",
        })
    }
  }

  return (
    <>
      <div
        className={`
        mobile-navigation 
        ${!isVisible ? "btn-visible" : ""}
        ${menuOpen ? "menu-open" : ""}
        `}
        onClick={handleMenuOpen}
      >
        <ScrollIcon />
      </div>
      <div className="menu-body">
        <p>HOME</p>
        <p>CONTACT</p>
        <p>TEAM</p>
        <p>SPONSORS</p>
        <p>GALLERY</p>
      </div>
    </>
  )
}

export default MobileMenu
