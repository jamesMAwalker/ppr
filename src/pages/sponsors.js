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
    link: "https://www.spacejam.com",
    blurb: SPONSOR_INFOS.amtber,
    logo: AmtberLogo,
    wordmark: AmtberWordmark,
  },
  {
    id: "bikeLegal",
    link: "https://www.spacejam.com",
    blurb: SPONSOR_INFOS.bikelegal,
    logo: BLLogo,
    wordmark: BLWordmark,
  },
  {
    id: "FC",
    link: "https://www.spacejam.com",
    blurb: SPONSOR_INFOS.fingerscrossed,
    logo: FCLogo,
    wordmark: FCWordmark,
  },
  {
    id: "FS",
    link: "https://www.spacejam.com",
    blurb: SPONSOR_INFOS.fourSigmatic,
    logo: FSLogo,
    wordmark: FSWordmark,
  },
  {
    id: "POC",
    link: "https://www.spacejam.com",
    blurb: SPONSOR_INFOS.poc,
    logo: POCLogo,
    wordmark: POCWordmark,
  },
  {
    id: "s4g",
    link: "https://www.spacejam.com",
    blurb: SPONSOR_INFOS.switch4good,
    logo: S4GLogo,
    wordmark: S4GWordmark,
  },
]

const Sponsors = () => {
  const [hoveredSponsor, sethoveredSponsor] = useState(null)
  const [activeSponsor, setActiveSponsor] = useState(null)
  const scrollBoxRef = useRef(null)

  useEffect(() => {
    gsap.from(".animation-wrapper", 1, {
      opacity: 0,
    })
  }, [hoveredSponsor])

  const handleSponsorClick = idx => {
    idx === activeSponsor ? setActiveSponsor(-1) : setActiveSponsor(idx)
  }

  const scrollToSelected = (newPos) => {
    console.log(scrollBoxRef)
    console.log("scrollLeft before", scrollBoxRef.current.scrollLeft)
    scrollBoxRef.current.scrollLeft = newPos
    console.log("scrollLeft after", scrollBoxRef.current.scrollLeft)
  }

  return (
    <section className="sponsors-container">
      <div className="absolute-wrapper" ref={scrollBoxRef} >
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
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
