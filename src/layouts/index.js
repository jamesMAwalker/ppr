import React, { useState } from 'react'

import Header from '../components/header'
import { ScrollIcon } from '../components/icons'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Footer from '../components/footer'
import SponsorsBand from '../components/sponsors'

const Layout = ({ children }) => {
  const [isPageTwo, setIsPageTwo] = useState(true)

  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        {children}
        <nav className="fixed-link">
          <AniLink cover bg="pink" direction="left" to="/team-gallery">
            <div className="text">
              {isPageTwo ? "TEAM" : "GALLERY"}
              <ScrollIcon />
            </div>
          </AniLink>
        </nav>
      </main>
      <SponsorsBand />
      <Footer />
    </div>
  )
}

export default Layout
