import React from 'react'
import { InstaIcon, StravaIcon } from './icons';

const Footer = (props) => {
  console.log(props);

  return (
    <div ref={props.ref} className="footer">
      <div className="copyright footer-section">
        <div className="inner">
          <div className="name">
            <span className="line">PLANT</span>
            <span className="line">POWER</span>
            <span className="line">RACING</span>
            <span className="line">2021</span>
          </div>
          <div className="symbol">©</div>
        </div>
      </div>
      <div className="social footer-section">
        <div className="inner">
          <span className="icon">
            <InstaIcon classN='footer-icon'/>
          </span>
          <span className="icon">
            <StravaIcon classN='footer-icon'/>
          </span>
        </div>
      </div>
      <div className="contact footer-section">
        <div className="inner">
          <span className="button">+</span>
          <div className="email">
            <div className="line">INFO@</div>
            <div className="line">PLANTPOWER</div>
            <div className="line">RACING.COM</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
