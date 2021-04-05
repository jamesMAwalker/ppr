import React, { useRef } from "react"

import { ScrollIcon } from "./icons"

const ContactSection = ({ isMobile, mobileVH }) => {
  const inputRef = useRef(null)

  const clearInput = () => {
    inputRef.current.value = ""
  }

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      clearInput()
    }
    if (e.key === "Escape") {
      inputRef.current.blur()
      clearInput()
    }
  }

  return (
    <>
      {!isMobile ? (
        <section className="contact-section" id="contact">
          <div className="absolute-container">
            <div className="flex-container">
              <div className="content">
                <video
                  type="video/mp4"
                  muted
                  autoPlay
                  loop
                  src="https://res.cloudinary.com/jameswalker-work/video/upload/v1610003645/ppr-wilson_axrsfy.mp4"
                />
                <div className="contact-form">
                  <div className="contact-blurb">
                    <div className="contact-header">
                      <h3>GET IN TOUCH</h3>
                    </div>
                    <p className="blurb-text">
                      Plant Power Racing may be a bike racing team, but we’re
                      committed to helping wherever and however we can. If you
                      have a cause we can help with, we want to hear from you.
                      <br />
                      <br />
                      Want to join us in our mission? We want to hear from you
                      too! Get at us.
                    </p>
                  </div>
                  <div className="contact-input">
                    <div className="shrink-wrapper">
                      <ScrollIcon classN="submit-arrow" action={clearInput} />
                      <input
                        className="email-input"
                        id="email-input"
                        ref={inputRef}
                        type="text"
                        onKeyDown={handleKeyDown}
                      />
                      <label className="email-label" htmlFor="email-input">
                        EMAIL ADDRESS
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="mobile-contact">
          <div className="mobile-contact__header">
            <div className="header-text">
              <span>GET</span>
              <span>IN</span>
              <span>TOUCH</span>
            </div>
            <div className="header-video">
              <video
                type="video/mp4"
                muted
                autoPlay
                loop
                height={`${mobileVH * 40}px`}
                src="https://res.cloudinary.com/jameswalker-work/video/upload/v1610003645/ppr-wilson_axrsfy.mp4"
              />
            </div>
          </div>
          <div className="contact-text">
            <p>
              Plant Power Racing may be a bike racing team, but we’re committed
              to helping wherever and however we can. If you have a cause we can
              help with, we want to hear from you.
              <br />
              <br />
              Want to join us in our mission? We want to hear from you too! Get
              at us.
            </p>
          </div>
          <div className="mobile-email">
            <a className="email" href="mailto:team@plantpowerracing.org" >
              <em>team</em>
              <em className="domain">@plantpowerracing.org</em>
            </a>
          </div>
          {/* <form className="mobile-contact__form">
            <div className="name">
              <input type="text"/>
            </div>
            <div className="email">
              <input type="email"/>
            </div>
            <div className="message">
              <input type="email"/>
            </div>
          </form> */}
        </section>
      )}
    </>
  )
}

export default ContactSection
