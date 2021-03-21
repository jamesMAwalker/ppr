import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

import Img from "gatsby-image"

const Sponsor = ({
  id,
  link,
  blurb,
  logo,
  wordmark,
  active,
  expandSponsor,
  scrollToSelected,
  idx,
  isMobile,
}) => {
  const data = useStaticQuery(graphql`
    query {
      amtber: file(relativePath: { eq: "sponsor-images/amtber.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bikeLegal: file(relativePath: { eq: "sponsor-images/bike-legal.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FC: file(relativePath: { eq: "sponsor-images/FC.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FS: file(relativePath: { eq: "sponsor-images/FS.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      POC: file(relativePath: { eq: "sponsor-images/POC.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      s4g: file(relativePath: { eq: "sponsor-images/s4g.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  useEffect(() => {
    gsap.fromTo(
      ".blurb-area",
      1,
      {
        opacity: 0,
        ease: "power2.inOut",
      },
      {
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.5,
      }
    )
  }, [active])

  const [hovered, setHovered] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const handleClick = (e) => {
    /*
      TODO
      # When sponsor is clicked, autoscroll component edge to left of screen
    */

    // console.log(e)
    // console.log("e.screenX: ", e.screenX)
    // console.log("window.innerWidth: ", window.innerWidth)
    // console.log("60vw: ", window.innerWidth * 0.6)
    // scrollToSelected((e.screenX - window.innerWidth * 0.6) * idx)
    // console.log(
    //   "e.screenX + (window.innerWidth * .6): ",
    //   e.screenX + window.innerWidth * 0.6
    // )
    expandSponsor(idx)
    setHovered(false)
  }

  const handleTouch = (e) => {
    console.log('sponsor touched');
    gsap.to(`.mobile-sponsor.s${idx.toString()}`, 0.2, {
      background: `${!active ? 'var(--white)' : 'var(--pink)' }`,
    })
    setDisabled(true)

    gsap.to(".expanded-sponsor", 0.4, {
      opacity: `${active ? 0 : 1}`,
      y: `${active ? "-10vh" : 0}`,
      ease: "power2.out",
    })

    setTimeout(() => {
      expandSponsor(idx)
      gsap.from(".expanded-sponsor", .4, {
        opacity: 0,
        y: "-10vh",
        ease: "power2.out"
      })
      setDisabled(false)
    }, 750);
  }

  const handleVisitClick = (e) => {
    e.stopPropagation()
    window.open([link], "_blank")
  }

  return (
    <>
      {!isMobile ? (
        <div
          className={`
        sponsor 
        ${hovered ? "hovered" : ""}
        ${active ? "active" : ""}
      `}
          onClick={handleClick}
        >
          {!active ? (
            <>
              <div className="shade">
                <div className="shade-logo">{logo()}</div>
              </div>
              <div className="image-wrapper">
                <Img
                  fadeIn
                  loading="eager"
                  fluid={data[id].childImageSharp.fluid}
                  objectFit="cover"
                  objectPosition="50% 100%"
                  alt={`Logo for the ${id} sponsor company`}
                />
              </div>
            </>
          ) : (
            <>
              <div className="shade-exp">
                <div className="shade-exp-logo">{logo()}</div>
              </div>
              <div className="blurb-area">
                <div className="blurb-text">{blurb}</div>
                <div className="visit-button-wrapper">
                  <button onClick={handleVisitClick} className="visit-button">
                    <p>VISIT</p> &nbsp; <span>|</span> &nbsp; {wordmark()}
                  </button>
                </div>
              </div>
              <div className="image-wrapper exp">
                <Img
                  fadeIn
                  loading="eager"
                  fluid={data[id].childImageSharp.fluid}
                  objectFit="cover"
                  objectPosition="50% 100%"
                  alt={`Logo for the ${id} sponsor company`}
                />
              </div>
            </>
          )}
        </div>
      ) : (
        <div className={`mobile-sponsor s${idx}`} onClick={handleTouch} disabled={disabled} >
          {!active ? (
            <>{logo()}</>
          ) : (
            <div className="expanded-sponsor">{logo()}</div>
          )}
        </div>
      )}
    </>
  )
}

export default Sponsor
