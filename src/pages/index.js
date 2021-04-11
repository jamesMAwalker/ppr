import React, { useEffect, useRef, useState } from "react"

import About from "../components/about"
import ContactSection from "../components/contact-section"
import EventsSection from "../components/events"
import HeroGrid from "../components/hero-grid"
import SupporterKit from "../components/supporter-kit"

import "../styles/styles.scss"


const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [mobileVH, setMobileVH] = useState(null)
  const contentRef = useRef(null)

  // Calculate viewport & setup breakpoints
  useEffect(() => {
    // Set mobile version viewport units
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--mVh", `${vh}px`)

    // Breakpoint sensor for conditional rendering
    const tabBP = getComputedStyle(document.documentElement).getPropertyValue(
      "--tablet"
    )
    setMobileVH(vh)
    setIsMobile(window.innerWidth <= parseInt(tabBP, 10))
  }, [])
  
  return (
    <div className="content-container" style={{ overflowX: 'visible' }} ref={contentRef}>
        <HeroGrid isMobile={isMobile} />
        <About isMobile={isMobile} />
        <SupporterKit isMobile={isMobile} />
        <EventsSection isMobile={isMobile} />
        <ContactSection isMobile={isMobile} mobileVH={mobileVH} />
    </div>
  )
}

export default IndexPage
