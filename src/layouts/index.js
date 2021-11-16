import React, { useEffect, useState } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { CustomCursor } from '../components/cursor'
import Header from "../components/header"
import { InstaIcon, ScrollIcon, StravaIcon } from "../components/icons"
import Footer from "../components/footer"
import SponsorsBand from "../components/sponsors-band"
import Meta from "../components/meta-tags"
import MobileMenu from "../components/mobile-menu"

const Layout = ({ children, location: { pathname } }) => {
  // + Mobile version tracking
  const [isMobile, setIsMobile] = useState(false)
  const [btnVisible, setBtnVisible] = useState(true)
  const [menuVisible, setMenuVisible] = useState(false)
  const [galleryScrolled, setGalleryScrolled] = useState(false)
  const [isHomePage, setIsHomePage] = useState(false)


  // set mobile vp units & create js breakpoint for mobile
  useEffect(() => {
    // Set mobile version viewport units
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--mVh", `${vh}px`)

    // Breakpoint sensor for conditional rendering
    const tabBP = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--tablet",
        10
      )
    )
    setIsMobile(window.innerWidth <= tabBP)
    setIsHomePage(pathname === "/")

    // gsap requisites
    gsap.config({
      nullTargetWarn: false,
    })
    gsap.registerPlugin(ScrollTrigger)
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
  const [eventsRef, eventsInView] = useInView({
    threshold: 0,
  })
  const [contactRef, contactInView] = useInView({
    threshold: 0,
  })
  const [mobileMenuRef, menuInView] = useInView({
    threshold: 0,
  })

  // scroll position set/get
  const [linkContent, setLinkContent] = useState("gallery")
  const [sectionLabel, setSectionLabel] = useState("")

  // function to change link
  const updateLinkContent = () => {
    if (isHomePage) {
      if (aboutInView && !sponsorsInView) {
        setLinkContent("team")
      } else if (sponsorsInView && !contactInView) {
        setLinkContent("sponsors")
      } else if (contactInView) {
        setLinkContent("")
      } else {
        setLinkContent("gallery")
      }
    }
  }

  // function to change sectionLabel
  const updateSectionLabel = () => {
    if (isHomePage) {
      if (aboutInView && !sponsorsInView) {
        setSectionLabel("about")
      } else if (sponsorsInView && !eventsInView) {
        setSectionLabel("Get the Kit")
      } else if (eventsInView && !contactInView) {
        setSectionLabel("Events")
      } else if (contactInView) {
        setSectionLabel("")
      } else {
        setSectionLabel("")
      }
    }
  }

  // animation and call of sectionLabel update
  useEffect(() => {
    if (isHomePage) {
      gsap.to(".section-label", 0.5, {
        opacity: 0,
      })
      setTimeout(() => {
        updateSectionLabel()
      }, 500)
      gsap.to(".section-label", 0.5, {
        delay: 0.5,
        opacity: 0.5,
      })
    }
  }, [footerInView, aboutInView, sponsorsInView, eventsInView, contactInView])

  // animation and call of linkContent update
  useEffect(() => {
    if (isHomePage) {
      gsap.to(".fixed-link", 0.5, {
        opacity: 0,
        x: "500vh",
      })
      setTimeout(() => {
        updateLinkContent()
      }, 200)
      gsap.to(".fixed-link", 0.5, {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
        },
      })
      if (contactInView) {
        gsap.to(".fixed-link", 1, {
          opacity: 0,
        })
      } else {
        gsap.to(".fixed-link", 1, {
          opacity: 1,
        })
      }
    }
  }, [footerInView, aboutInView, sponsorsInView, contactInView])

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
    React.cloneElement(child, {
      isMobile: isMobile,
      btnVisible: btnVisible,
      setBtnVisible: () => setBtnVisible(!btnVisible),
      setGalleryScrolled: () => setGalleryScrolled(!galleryScrolled),
    })
  )

  // Custom Cursor State 
  const [cursorState, setCursorState] = useState('open')

  return (
    <>
      <CustomCursor cursorState={cursorState}/>
      <Meta />
      <MobileMenu
        isMobile={isMobile}
        pageLocation={pathname !== "/" ? pathname.replace("/", "") : pathname}
        btnVisible={btnVisible}
        menuVisible={menuVisible}
        toggleMenu={() => setMenuVisible(!menuVisible)}
      />
      <div className="layout" data-scroll-container>
        <Header setCursor={setCursorState} pageLocation={pathname} galleryScrolled={galleryScrolled} />
        {pageLocation["/"] && (
          <span className="mm-trigger" ref={mobileMenuRef}></span>
        )}
        <main className="layout-main">
          {!footerInView && pageLocation["/"] && (
            <div className="layout-left">
              <div className="section-label-wrapper">
                <span className="section-label">{sectionLabel}</span>
              </div>
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
          <span ref={teamRef} className="extension extension--about" />
          <span ref={sponsorsRef} className="extension extension--sponsors" />
          <span ref={eventsRef} className="extension extension--events" />
          <span ref={contactRef} className="extension extension--contact" />
        </span>
        {!(pathname === "/sponsors" && isMobile) && (
          <SponsorsBand isMobile={isMobile} pageLocation={pathname} />
        )}
        <span ref={footerRef} className="footer-trigger"></span>
        <Footer isMobile={isMobile} />
      </div>
    </>
  )
}

export default Layout
