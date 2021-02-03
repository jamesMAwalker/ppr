import React, { useEffect } from 'react'
import { useInView } from "react-intersection-observer"

import Header from '../components/header'
import { InstaIcon, ScrollIcon, StravaIcon } from '../components/icons'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Footer from '../components/footer'
import SponsorsBand from '../components/sponsors'

const Layout = ({ children }) => {
  const [footerRef, footerInView ] = useInView({
    threshold: 0,
  })

  const [teamRef, aboutInView ] = useInView({
    threshold: 0,
  })

  const [sponsorsRef, sponsorsInView ] = useInView({
    threshold: 0,
  })

  useEffect(() => {
    console.log('Is footer inView? ', footerInView);
  }, [footerInView])

  const linkContent = () => {
    if (aboutInView && !sponsorsInView) {
      return "team"
    } else if (sponsorsInView) {
      return "sponsors"
    } else {
      return "gallery"
    }
  }

  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        {!footerInView && (
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
        {!footerInView && (
          <nav className="fixed-link">
            <AniLink
              cover
              bg="rgb(77, 238, 254)"
              direction="left"
              to={`/${linkContent()}`}
            >
              <div className="text hover-shadows">
                {linkContent()}
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
