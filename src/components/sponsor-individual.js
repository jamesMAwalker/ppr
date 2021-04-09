import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

import Img from "gatsby-image"
import { ScrollIcon } from "./icons"

const Sponsor = ({
  id,
  sName, 
  link,
  blurb,
  logo,
  wordmark,
  active,
  expandSponsor,
  scrollToSelected,
  idx,
  isMobile,
  setBtnVisible
}) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     amtber: file(relativePath: { eq: "sponsor-images/amtber.webp" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1200, quality: 50) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     bikeLegal: file(relativePath: { eq: "sponsor-images/bike-legal.webp" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1200, quality: 50) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     FC: file(relativePath: { eq: "sponsor-images/FC.webp" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1200, quality: 50) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     FS: file(relativePath: { eq: "sponsor-images/FS.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1200, quality: 50) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     POC: file(relativePath: { eq: "sponsor-images/POC.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1200, quality: 50) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     s4g: file(relativePath: { eq: "sponsor-images/s4g.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1200, quality: 50) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  const data = useStaticQuery(graphql`
    query {
      sponsorPhotos: allFile(
        filter: {extension: {regex: "/(jpg|png|jpeg|webp)/"}, relativeDirectory: {eq: "sponsor-images"}}
        sort: {fields: base, order: ASC}
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid(quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
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
    expandSponsor(idx)
    setHovered(false)
  }

  const handleTouch = (e) => {
    
    gsap.to(`.mobile-sponsor.s${idx.toString()}`, 0.2, {
      background: `${!active ? 'var(--white)' : 'var(--pink)' }`,
    })
    setDisabled(true)

    gsap.to(".expanded-sponsor", 0.4, {
      opacity: `${active ? 0 : 1}`,
      y: `${active ? "-10vh" : 0}`,
      ease: "power2.out",
    })
    setBtnVisible()

    setTimeout(() => {
      expandSponsor(idx)
      gsap.from(".expanded-sponsor", .4, {
        opacity: 0,
        y: "-10vh",
        ease: "power2.out"
      })
      // enable interaction
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
          id={`sponsor-${idx}`}
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
                  fluid={
                    data.sponsorPhotos.edges[idx].node.childImageSharp.fluid
                  }
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
                    {wordmark()} <span>▶</span>
                  </button>
                </div>
              </div>
              <div className="image-wrapper exp">
                <Img
                  fadeIn
                  loading="eager"
                  fluid={
                    data.sponsorPhotos.edges[idx].node.childImageSharp.fluid
                  }
                  objectFit="cover"
                  objectPosition="50% 100%"
                  alt={`Logo for the ${id} sponsor company`}
                />
              </div>
            </>
          )}
        </div>
      ) : (
        <div
          className={`mobile-sponsor s${idx}`}
          onClick={handleTouch}
          disabled={disabled}
        >
          {!active ? (
            <>{logo()}</>
          ) : (
            <div className="expanded-sponsor">
              <div className="expanded-sponsor__header">{wordmark()}</div>
              <div className="expanded-sponsor__body">
                <div className="expanded-sponsor__content">
                  <div className="blurb-text">{blurb}</div>
                  <div className="visit-button">
                    <span>VISIT | {sName}</span>
                  </div>
                  <div className="close-btn-wrapper">
                    <ScrollIcon />
                  </div>
                </div>
                <div className="bg-img">
                  <Img
                    fadeIn
                    loading="eager"
                    fluid={data.sponsorPhotos.edges[idx].node.childImageSharp.fluid}
                    objectFit="cover"
                    objectPosition="50% 100%"
                    alt={`Logo for the ${id} sponsor company`}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Sponsor
