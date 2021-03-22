import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"

import Sponsor from "../components/sponsor-individual"

import {
  AmtberLogo,
  AmtberWordmark,
  BLLogo,
  FCLogo,
  FSLogo,
  POCLogo,
  S4GLogo,
} from "../components/Logo"

import {
  BLWordmark,
  FCWordmark,
  FSWordmark,
  POCWordmark,
  S4GWordmark,
} from "../components/Logo"

import { SPONSOR_INFOS } from "../assets/partner-blurbs"

const sponsorData = [
  {
    id: "amtber",
    name: "aMTBer",
    link: "https://www.spacejam.com",
    blurb: SPONSOR_INFOS.amtber,
    logo: AmtberLogo,
    wordmark: AmtberWordmark,
  },
  {
    id: "bikeLegal",
    name: "Bike Legal",
    link: "https://www.spacejam.com",
    blurb: SPONSOR_INFOS.bikelegal,
    logo: BLLogo,
    wordmark: BLWordmark,
  },
  {
    id: "FC",
    name: "Fingers Crossed",
    link: "https://www.spacejam.com",
    blurb: SPONSOR_INFOS.fingerscrossed,
    logo: FCLogo,
    wordmark: FCWordmark,
  },
  {
    id: "FS",
    name: "Four Sigmatic",
    link: "https://www.spacejam.com",
    blurb: SPONSOR_INFOS.fourSigmatic,
    logo: FSLogo,
    wordmark: FSWordmark,
  },
  {
    id: "POC",
    name: "POC Sports",
    link: "https://www.spacejam.com",
    blurb: SPONSOR_INFOS.poc,
    logo: POCLogo,
    wordmark: POCWordmark,
  },
  {
    id: "s4g",
    name: "Switch4Good",
    link: "https://www.spacejam.com",
    blurb: SPONSOR_INFOS.switch4good,
    logo: S4GLogo,
    wordmark: S4GWordmark,
  },
]

const Sponsors = ({ isMobile, setBtnVisible }) => {
  const [hoveredSponsor, sethoveredSponsor] = useState(null)
  const [activeSponsor, setActiveSponsor] = useState(null)
  const scrollBoxRef = useRef(null)

  useEffect(() => {
    gsap.from(".animation-wrapper", 1, {
      opacity: 0,
    })
  }, [hoveredSponsor])

  useEffect(() => {
    // toggle page scroll
    document.documentElement.style.overflow = `${
      activeSponsor !== -1 ? "hidden" : "scroll"
    }`
  }, [activeSponsor])

  const handleSponsorClick = (idx) => {
    idx === activeSponsor ? setActiveSponsor(-1) : setActiveSponsor(idx)
  }

  const scrollToSelected = (newPos) => {
    console.log(scrollBoxRef)
    console.log("scrollLeft before", scrollBoxRef.current.scrollLeft)
    scrollBoxRef.current.scrollLeft = newPos
    console.log("scrollLeft after", scrollBoxRef.current.scrollLeft)
  }

  return (
    <>
      {!isMobile ? (
        <section className="sponsors-container">
          <div className="absolute-wrapper" ref={scrollBoxRef}>
            <div className="flex-wrapper">
              {sponsorData.map((s, idx) => {
                const active = idx === activeSponsor ? "active" : ""
                return (
                  <Sponsor
                    id={s.id}
                    idx={idx}
                    link={s.link}
                    blurb={s.blurb.bio}
                    logo={s.logo}
                    wordmark={s.wordmark}
                    active={active}
                    expandSponsor={handleSponsorClick}
                    scrollToSelected={scrollToSelected}
                    isMobile={isMobile}
                  />
                )
              })}
            </div>
          </div>
        </section>
      ) : (
        <div className="mobile-sponsors">
          {sponsorData.map((s, idx) => {
            const active = idx === activeSponsor ? "active" : ""

            return (
              <Sponsor
                id={s.id}
                sName={s.name}
                idx={idx}
                link={s.link}
                blurb={s.blurb.bio}
                logo={s.logo}
                wordmark={s.wordmark}
                active={active}
                expandSponsor={handleSponsorClick}
                scrollToSelected={scrollToSelected}
                isMobile={isMobile}
                setBtnVisible={setBtnVisible}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

export default Sponsors
