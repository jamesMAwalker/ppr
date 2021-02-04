import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import Header from "../components/header"
import { InstaIcon, ScrollIcon, StravaIcon } from "../components/icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Footer from "../components/footer"
import SponsorsBand from "../components/sponsors"

const Layout = ({ children, location: { pathname } }) => {
  // + Scroll position tracking
  const [footerRef, footerInView] = useInView({
    threshold: 0,
  })

  const [teamRef, aboutInView] = useInView({
    threshold: 0,
  })

  const [sponsorsRef, sponsorsInView] = useInView({
    threshold: 0,
  })

  // - Scroll position state/setter/listener
  const [linkContent, setLinkContent] = useState("gallery")

  const updateLinkContent = () => {
    if (pathname === "/") {
      if (aboutInView && !sponsorsInView) {
        setLinkContent("team")
      } else if (sponsorsInView) {
        setLinkContent("sponsors")
      } else {
        setLinkContent("gallery")
      }
    }
  }

  useEffect(() => {
    updateLinkContent()
  }, [footerInView, aboutInView, sponsorsInView])



  // + Page location tracking
  const [pageLocation, setPageLocation] = useState({
    "/": true,
    "/gallery": false,
    "/team": false,
  })

  useEffect(() => {
    const newLocationState = {}

    // if current page is x, set x of location state to true
    Object.keys(pageLocation).forEach(page => {
      if (page === pathname) {
        newLocationState[page] = true
      } else {
        newLocationState[page] = false
      }
    })

    setPageLocation(newLocationState)
  }, [])

  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        {!footerInView && pageLocation["/"] && (
          <div className="social-icons">
            <div className="icon-wrapper">
              <InstaIcon classN="social-icon" />
              <InstaIcon classN="shadow pink" />
              <InstaIcon classN="shadow turquoise" />
            </div>
            <div className="icon-wrapper">
              <StravaIcon classN="social-icon" />
              <StravaIcon classN="shadow pink" />
              <StravaIcon classN="shadow turquoise" />
            </div>
          </div>
        )}
        {children}
        {!footerInView && pageLocation["/"] && (
          <nav className="fixed-link">
            <AniLink
              cover
              bg="rgb(77, 238, 254)"
              direction="left"
              to={`/${linkContent}`}
            >
              <div className="text hover-shadows">
                {linkContent}
                <ScrollIcon />
              </div>
            </AniLink>
          </nav>
        )}
      </main>
      <span className="vp-triggers">
        <span ref={teamRef} className="extension extension--about"></span>
        <span
          ref={sponsorsRef}
          className="extension extension--sponsors"
        ></span>
      </span>
      <SponsorsBand />
      <span ref={footerRef} className="footer-trigger"></span>
      <Footer />
    </div>
  )
}

export default Layout
