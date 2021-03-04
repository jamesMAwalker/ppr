import React, { useState } from 'react'

import { AmtberLogo, AmtberWordmark } from '../components/Logo'

const Sponsor = ({ id, logo, wordmark, blurb }) => {
  console.log(logo);
  const [hovered, setHovered] = useState(false)

  const hoverDebounce = (bool) => {
    setTimeout(() => {
      setHovered(bool)
    }, 0)
  }

  

  return (
    <div
      className={`sponsor ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => hoverDebounce(true)}
      onMouseLeave={() => hoverDebounce(false)}
    >
      <div
        className="shade"
        // onMouseEnter={() => hoverDebounce(true)}
        // onMouseLeave={() => hoverDebounce(false)}
      >
        <div className="shade-logo">
          <AmtberWordmark />
        </div>
      </div>
      <div className="image-wrapper">
        
      </div>
    </div>
  )
}

export default Sponsor
