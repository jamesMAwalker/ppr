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
  { name: 'AM', logo: AmtberLogo },
  { name: 'BL', logo: BLLogo },
  { name: 'FC', logo: FCLogo },
  { name: 'FS', logo: FSLogo },
  { name: 'PA', logo: PALogo },
  { name: 'POC', logo: POCLogo },
  { name: 'S4G', logo: S4GLogo },
]

  const SponsorsBand = ({ isMobile }) => {
  return (
    <div className="sponsors-band">
      {!isMobile ? (
        <div className="flex-wrapper">
          {sponsorLogos.map(l => {
            const fill = l.name !== "PA" ? "white" : ""
            return (
              <div key={l.name} className={`logo-wrapper ${fill}`}>
                {l.logo()}
              </div>
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
              <div key={l.name} className={`marquee-logo ${notPA}`}>
                {l.logo()}
              </div>
            )
          })}
        </Marquee>
      )}
    </div>
  )
}

export default SponsorsBand
