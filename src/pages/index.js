import React from "react"

import "../styles/styles.scss"
import Blurb from "../components/blurb"
import ContactSection from "../components/contact-section"
import HeroGrid from "../components/hero-grid"
import SupporterKit from "../components/supporter-kit"

const IndexPage = () => {
  
  return (
    <div className='content-container'>
      <HeroGrid />
      <Blurb />
      <SupporterKit />
      <ContactSection />
    </div>
  )
}

export default IndexPage
