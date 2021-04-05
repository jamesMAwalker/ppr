import React from 'react'
import Marquee from "react-fast-marquee";

import {
  AmtberLogo,
  BLLogo,
  FCLogo,
  FSLogo,
  PALogo,
  POCLogo,
  S4GLogo,
} from "../components/Logo"

const sponsorLogos = [
  {
    name: "AM",
    logo: AmtberLogo,
    link: "https://amtber.com/",
  },
  { name: "BL", logo: BLLogo, link: "https://bikelegalfirm.com/" },
  { name: "FC", logo: FCLogo, link: "https://fingerscrossed.design/" },
  { name: "FS", logo: FSLogo, link: "https://us.foursigmatic.com/" },
  { name: "PA", logo: PALogo, link: "https://plantathletic.com/" },
  {
    name: "POC",
    logo: POCLogo,
    link: "https://www.pocsports.com/collections/cycling",
  },
  { name: "S4G", logo: S4GLogo, link: "https://switch4good.org/" },
]

  const SponsorsBand = ({ isMobile }) => {

  return (
    <div className="sponsors-band">
      {!isMobile ? (
        <div className="flex-wrapper">
          {sponsorLogos.map(l => {
            const fill = l.name !== "PA" ? "white" : ""
            return (
              <a key={l.name} href={l.link} target="_blank" className={`logo-wrapper ${fill}`}>
                {l.logo()}
              </a>
            )
          })}
        </div>
      ) : (
        <Marquee
          left
          gradient={false}
          speed="50"
        >
          {sponsorLogos.map(l => {
            const notPA = l.name !== "PA" ? "notPA" : ""
            return (
              <a
                key={l.name}
                className={`marquee-logo ${notPA}`}
                href={l.link}
                target="_blank"
              >
                {l.logo()}
              </a>
            )
          })}
        </Marquee>
      )}
    </div>
  )
}

export default SponsorsBand
