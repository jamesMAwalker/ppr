import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import Header from "../components/header"
import { InstaIcon, ScrollIcon, StravaIcon } from "../components/icons"
import { Logo } from "../components/Logo"
import Footer from "../components/footer"
import SponsorsBand from "../components/sponsors-band"
import Meta from "../components/meta-tags"
import MobileMenu from "../components/mobile-menu"

const Layout = ({ children, location: { pathname } }) => {
  // + Mobile version tracking
  const [isMobile, setIsMobile] = useState(false)
  const [mobileVH, setMobileVH] = useState(null)
  const [btnVisible, setBtnVisible] = useState(true)
  const [menuVisible, setMenuVisible] = useState(false)

  // set mobile vp units & create js breakpoint for mobile
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

  // useInView set up
  const [footerRef, footerInView] = useInView({
    threshold: 0,
  })

  const [teamRef, aboutInView] = useInView({
    threshold: 0,
  })

  const [sponsorsRef, sponsorsInView] = useInView({
    threshold: 0,
  })

  const [mobileMenuRef, menuInView] = useInView({
    threshold: 0,
  })

  // scroll position set/get
  const [linkContent, setLinkContent] = useState("gallery")

  // function to change link 
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

  // change link content based on visibility of triggers
  useEffect(() => {
    updateLinkContent()
  }, [footerInView, aboutInView, sponsorsInView])

  // change mm btnVisible when menuInView changes 
  useEffect(() => {
    setBtnVisible(!btnVisible)

    gsap.fromTo(
      ".mobile-nav-btn",
      0.4,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    )
  }, [menuInView])

  // + Page location tracking state set/get
  const [pageLocation, setPageLocation] = useState({
    "/": true,
    "/gallery": false,
    "/team": false,
  })

  // track current page
  useEffect(() => {
    const newLocationState = {}
    // if current page is x, set x of location state to true
    Object.keys(pageLocation).forEach((page) => {
      if (page === pathname) {
        newLocationState[page] = true
      } else {
        newLocationState[page] = false
      }
    })

    setPageLocation(newLocationState)
  }, [])

  // Stop scroll while mobile menu is open
  useEffect(() => {
    if (menuVisible) {
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = "scroll"
    }
  }, [menuVisible])


  // pass props to child page elements
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { btnVisible: btnVisible, setBtnVisible: () => setBtnVisible(!btnVisible) })
  )

  return (
    <>
      <Meta />
      <MobileMenu
        pageLocation={
          pathname !== "/" 
          ? pathname.replace("/", '')
          : pathname
        }
        btnVisible={btnVisible}
        menuVisible={menuVisible}
        toggleMenu={() => setMenuVisible(!menuVisible)}
      />
      <div className="layout">
        <Header />
        {pageLocation["/"] && (
          <span className="mm-trigger" ref={mobileMenuRef}></span>
        )}
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
          {childrenWithProps}
          {!footerInView && pageLocation["/"] && (
            <nav className="fixed-link">
              <AniLink
                cover
                bg="rgb(77, 238, 254)"
                direction="left"
                to={linkContent ? `/${linkContent}` : "/"}
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
        <SponsorsBand isMobile={isMobile} />
        <span ref={footerRef} className="footer-trigger"></span>
        <Footer isMobile={isMobile} />
      </div>
    </>
  )
}

export default Layout
