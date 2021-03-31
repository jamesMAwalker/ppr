import React, { useEffect, useState } from "react"

import "../styles/styles.scss"
import About from "../components/about"
import ContactSection from "../components/contact-section"
import HeroGrid from "../components/hero-grid"
import SupporterKit from "../components/supporter-kit"

const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [mobileVH, setMobileVH] = useState(null)

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

  useEffect(() => {
    const tabBP = getComputedStyle(document.documentElement).getPropertyValue(
      "--tablet"
    )
    setIsMobile(window.innerWidth <= parseInt(tabBP, 10))
  }, [])
  
  return (
    <div className="content-container">
      <HeroGrid isMobile={isMobile}/>
      <About isMobile={isMobile} />
      <SupporterKit isMobile={isMobile} />
      <ContactSection isMobile={isMobile} mobileVH={mobileVH} />
    </div>
  )
}

export default IndexPage
