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
      <div className="flex-wrapper">
        {isMobile ? (
          sponsorLogos.map(l => {
            const fill = l.name !== "PA" ? "white" : ""
            return (
              <div key={l.name} className={`logo-wrapper ${fill}`}>
                {l.logo()}
              </div>
            )
          })
        ) : (
          <Marquee play right speed="10">
            
          </Marquee>
        )}
      </div>
    </div>
  )
}

export default SponsorsBand
