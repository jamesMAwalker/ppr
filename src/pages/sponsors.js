import React, { useEffect, useState } from "react"
import gsap from "gsap"

import Sponsor from "../components/sponsor-individual"

import {
  AmtberLogo,
  AmtberWordmark,
  BikeLegalLogo,
  FCLogo,
  FSLogo,
  POCLogo,
  S4GLogo,
} from "../components/Logo"

import { SPONSOR_INFOS } from "../assets/partner-blurbs"

const sponsorData = [
  {
    id: "amtber",
    blurb: SPONSOR_INFOS.amtber,
    logo: AmtberWordmark,
  },
  {
    id: "bikeLegal",
    blurb: SPONSOR_INFOS.amtber,
    logo: BikeLegalLogo,
  },
  {
    id: "FC",
    blurb: SPONSOR_INFOS.amtber,
    logo: FCLogo,
  },
  {
    id: "FS",
    blurb: SPONSOR_INFOS.amtber,
    logo: FSLogo,
  },
  {
    id: "POC",
    blurb: SPONSOR_INFOS.amtber,
    logo: POCLogo,
  },
  {
    id: "s4g",
    blurb: SPONSOR_INFOS.amtber,
    logo: S4GLogo,
  },
]

const Sponsors = () => {
  const [hoveredSponsor, sethoveredSponsor] = useState(null)
  const [activeSponsor, setActiveSponsor] = useState(null)

  useEffect(() => {
    gsap.from(".animation-wrapper", 1, {
      opacity: 0,
    })
  }, [hoveredSponsor])

  const handleSponsorClick = idx => {
    idx === activeSponsor ? setActiveSponsor(-1) : setActiveSponsor(idx)
  }

  return (
    <section className="sponsors-container">
      <div className="absolute-wrapper">
        <div className="flex-wrapper">
          {sponsorData.map((s, idx) => {
            const active = idx === activeSponsor ? "active" : ""

            return (
              <Sponsor
                id={s.id}
                idx={idx}
                blurb={s.blurb.bio}
                logo={s.logo}
                active={active}
                expandSponsor={handleSponsorClick}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
