import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="sponsors">
        <div className="sponsors-inner">
          <div className="logo-wrapper"><img src="/" alt=""/></div>
          <div className="logo-wrapper"><img src="/" alt=""/></div>
          <div className="logo-wrapper"><img src="/" alt=""/></div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          <div className="text"></div>
          <div className="symbol"></div>
        </div>
        <div className="social">
          <span className="icon">IG</span>
          <span className="icon">ST</span>
        </div>
        <div className="contact">
          <div className="email"></div>
          <span className="button"></span>
        </div>
      </div>
    </div>
  )
}

export default Footer
