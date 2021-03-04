import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

import Sponsor from '../components/sponsor-individual'

import { AmtberLogo, AmtberWordmark } from '../components/Logo'

import { SPONSOR_INFOS } from '../assets/partner-blurbs'

const sponsorData = [
  {
    id: "amtber",
    blurb: SPONSOR_INFOS.amtber
  },
  {
    id: "amtber",
    blurb: SPONSOR_INFOS.amtber
  },
  {
    id: "amtber",
    blurb: SPONSOR_INFOS.amtber
  },
  {
    id: "amtber",
    blurb: SPONSOR_INFOS.amtber
  },
  {
    id: "amtber",
    blurb: SPONSOR_INFOS.amtber
  },
  {
    id: "amtber",
    blurb: SPONSOR_INFOS.amtber
  },
]

const Sponsors = () => {
  const [activeSponsor, setactiveSponsor] = useState(null)

  useEffect(() => {
    gsap.from(".animation-wrapper", 1, {
      opacity: 0
    })
  }, [activeSponsor])

  return (
    <section className="sponsors-container">
      <div className="absolute-wrapper">
        <div className="flex-wrapper">
          {
            sponsorData.map((s, idx) => {
              const active = idx === activeSponsor ? "active" : ""

              return (
                <Sponsor
                  id={s.id}
                  blurb={s.blurb}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Sponsors
