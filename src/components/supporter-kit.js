import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import gsap from 'gsap'
import { useSwipeable } from "react-swipeable"

import { ScrollTrigger } from "gsap/ScrollTrigger"

import Img from "gatsby-image"

import { PAWordMark } from "./Logo"
import { ScrollIcon } from './icons'

/*

TODO {
  # Experiment with react-use-gesture for swiping through
  the gallery. 
  # Need to rewrite mobile photoSwitch logic so that animations
  can be applied. Re-rendering the component somehow...
}

*/

const SupporterKit = ({ isMobile }) => {
  const [mainPhoto, setMainPhoto] = useState(["", "", "ph1", ""])
  const handlePhotoSwitch = (e) => {
    const clickedPhoto = parseInt(e.target.id, 10)

    const selection = mainPhoto.map((p, i) => {
      if (i === clickedPhoto) {
        return "ph1"
      } else {
        return ""
      }
    })

    setMainPhoto(selection)
    console.log("selection: ", selection)
    console.log("mainPhoto: ", mainPhoto)
  }

  const photoNames = ["gravelSlide", "jerseyRender", "bigThree", "luchos"]
  const [mPhotoIdx, setMPhotoIdx] = useState(2)
  const handlePhotoSwitchMobile = (dir) => {
    gsap.to(".mobile__photos", .2, {
      opacity: 0
    })
    
    setTimeout(() => {
      if (mPhotoIdx + dir > 3) {
        setMPhotoIdx(0)
      } else if (mPhotoIdx + dir < 0) {
        setMPhotoIdx(3)
      } else {
        setMPhotoIdx(mPhotoIdx + dir)
      }
      gsap.to(".mobile__photos", 0.4, {
        opacity: 1,
        transition: {
          delay: 0.4,
        },
      })
    }, 200);
  }

  // > Start Animations
  useEffect(() => {
     gsap.config({
       nullTargetWarn: false,
     })
    gsap.from(".photo__slide", 0.4, {
      opacity: 0,
    })
  }, [mPhotoIdx])

  // > Scroll Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

     gsap.config({
       nullTargetWarn: false,
     })

    gsap.from(".photos .photo-grid", 1, {
      scrollTrigger: {
        trigger: ".photos .photo-grid",
        scrub: 0.75,
        start: "top bottom+=50%",
        end: "top bottom-=50%",
      },
      stagger: {
        amount: 0.5,
      },
      x: `${isMobile ? "-10vw" : 0}`,
    })
    gsap.from(".content", 1, {
      scrollTrigger: {
        trigger: ".content",
        end: "top bottom-=40%",
        scrub: 1,
      },
      stagger: {
        amount: 0.5,
      },
      y: "10vh",
      opacity: 0.5,
    })
  }, [isMobile])

  const data = useStaticQuery(graphql`
    query {
      jerseyRender: file(
        relativePath: { eq: "supporter-kit-images/jersey--wide-s.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bigThree: file(relativePath: { eq: "supporter-kit-images/big-3.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gravelSlide: file(
        relativePath: { eq: "supporter-kit-images/gravel-slide.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      luchos: file(relativePath: { eq: "supporter-kit-images/luchos.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  // swipe gesture detection for mobile
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => handlePhotoSwitchMobile(1),
    onSwipedRight: (eventData) => handlePhotoSwitchMobile(-1),
  })

  return (
    <section className="kit-section">
      {!isMobile ? (
        <>
          <div className="photos">
            <div className="photo-grid">
              <div
                className={`photo ${mainPhoto[0]}`}
                id={0}
                role="button"
                tabIndex={0}
                onClick={handlePhotoSwitch}
                onKeyDown={(e) => {
                  if (e.code === 13) handlePhotoSwitch()
                }}
              >
                <Img
                  fluid={data.jerseyRender.childImageSharp.fluid}
                  objectFit="contain"
                  objectPosition="50% 50%"
                  alt="render of cycling jersey"
                  quality=""
                />
              </div>
              <div
                className={`photo ${mainPhoto[1]}`}
                id={1}
                role="button"
                tabIndex={0}
                onClick={handlePhotoSwitch}
                onKeyDown={(e) => {
                  if (e.code === 13) handlePhotoSwitch()
                }}
              >
                <Img
                  fluid={data.bigThree.childImageSharp.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt="cycling jersey in action"
                />
              </div>
              <div
                className={`photo ${mainPhoto[2]}`}
                id={2}
                role="button"
                tabIndex={0}
                onClick={handlePhotoSwitch}
                onKeyDown={(e) => {
                  if (e.code === 13) handlePhotoSwitch()
                }}
              >
                <Img
                  fluid={data.gravelSlide.childImageSharp.fluid}
                  objectFit="contain"
                  objectPosition="50% 50%"
                  alt="cycling jersey in action"
                />
              </div>
              <div
                className={`photo ${mainPhoto[3]}`}
                id={3}
                role="button"
                tabIndex={0}
                onClick={handlePhotoSwitch}
                onKeyDown={(e) => {
                  if (e.code === 13) handlePhotoSwitch()
                }}
              >
                <Img
                  fluid={data.luchos.childImageSharp.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt="cycling jersey in action"
                />
              </div>
            </div>
          </div>
          <div className="description">
            <div className="content">
              <div className="headers">
                <PAWordMark />
                <h3 className="sub">TEAM SUPPORTER KIT</h3>
              </div>
              <div className="kit-blurb">
                We are proud to finally announce the PPR supporter’s jersey from
                Plant Athletic! Plant Athletic has been with us since the very
                beginning of the Plant Power story. Their commitment to a more
                compassionate and sustainable future was massively influential
                in the formation of our ideals as a team. <br /> Support our
                shared mission and represent the team wherever you are in the
                world.
              </div>
              <div className="button-container">
                <button className="button-color-shadows">GET THE KIT</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="mobile">
          <div className="mobile__photos" {...handlers}>
            <div className="photo-slide">
              <Img
                fluid={data[photoNames[mPhotoIdx]].childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="cycling jersey in action"
              />
              <div className="slide-controls">
                <div className="pseudo-wrapper">
                  <ScrollIcon
                    classN="left"
                    action={() => handlePhotoSwitchMobile(-1)}
                  />
                </div>
                <div className="pseudo-wrapper">
                  <ScrollIcon
                    classN="right"
                    action={() => handlePhotoSwitchMobile(1)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mobile__details">
            <div className="header-card">
              <PAWordMark />
              <p>TEAM SUPPORTER KIT</p>
            </div>
          </div>
          <div className="mobile__description">
            <p>
              <strong>Plant Athletic</strong> has been with us since the very
              beginning of the Plant Power story. Their commitment to a more
              compassionate and sustainable future was massively influential in
              the formation of our ideals as a team. We are very proud to
              finally announce the PPR supporter’s jersey! Support our shared
              mission and represent the team wherever you are in the world.
              <br />
              <br />
              The supporter jersey is proudly made from certified Global
              Recycled Standard and bluesign® certified recycled fabrics which
              are made at one of the world's leading warp knitted fabric mills,
              SITIP, based in Northern Italy.
            </p>
            <div className="get-btn">
              <button
                onClick={() => window.open("https://www.plantathletic.com/")}
              >
                GET THE KIT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default SupporterKit
