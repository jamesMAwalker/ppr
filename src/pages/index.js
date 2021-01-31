import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"

import Header from "../components/header"

import "../styles/styles.scss"
// import Hero from "../components/hero"
import Blurb from "../components/blurb"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"
import HeroGrid from "../components/hero-grid"
import SupporterKit from "../components/supporter-kit"

import { debounce } from '../utilities/debounce';

const IndexPage = () => {
  const [dimensions, setDimensions] = useState({
    height: '',
    width: '',
  })


  useEffect(() => {
    /*
      TODO
      Figure out what's going on with this whole dimensions issue.  
    */
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    })
    let vh = dimensions.height * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }, 1000)

    window.addEventListener("resize", debouncedHandleResize)

    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  }, [])
  
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
