import React from 'react'

const sponsorLogos = [
  { name: 'POC', imgSrc: '../images/va-logo.svg' },
  { name: 'Plant Athletic', imgSrc: '../images/va-logo.svg' },
  { name: 'Bike Legal', imgSrc: '../images/va-logo.svg' },
]

const SponsorsBand = () => {
  return (
    <div className="sponsors-band">
      <div className="flex-wrapper">
        {
          sponsorLogos.map(l => (
            <div key={l.name} className="">{l.name}</div>
          ))
        }
      </div>
    </div>
  )
}

export default SponsorsBand
