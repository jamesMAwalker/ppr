import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

import Img from "gatsby-image"

import { AmtberLogo, AmtberWordmark } from '../components/Logo'


const Sponsor = ({ id, blurb, logo, active, expandSponsor, idx }) => {
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
    gsap.fromTo(".blurb-area", 1, 
      {
        opacity: 0,
        ease: "power2.inOut"
      },
      {
        opacity: 1,
        ease: "power2.inOut",
        delay: .5,
      },
    )
  }, [active])

  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    expandSponsor(idx);
    setHovered(false);
  }

  const handleVisitClick = (e) => {
    e.stopPropagation()
  }

  return (
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
            <div className="shade-logo">
              {logo()}
            </div>
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
            <div className="shade-exp-logo">
              {logo()}
            </div>
          </div>
          <div className="blurb-area">
            <p className="blurb-text">
              {/* {blurb} */}
              We met John Amtber racing at Sea Otter in 2019. A recent vegan
              himself, he saw us browsing through the vendor booths and couldn’t
              believe his eyes when he saw) there was a vegan cycling team. He
              immediately offered to service and lube our bikes with his
              product, all the while regailing us with his story of going vegan
              at 50 years old, and how he hadn’t felt so good since he was 25.
              <br />
              <br />
              John is a man who does everything to the fullest - that’s true of
              both his dedication to veganism, and of the consideration he puts
              into his product. A chemical engineer by trade, he turned his
              knowledge towards the many and varied problems of chain
              lubricants. His line of aMTBer wax based lubricants have been
              keeping our collective drivetrains buttery smooth and silent since
              we met him.
              <br />
              <br />
              We are proud to represent both a great guy, and a great product
              with aMTBer.
            </p>
            <div className="visit-button-wrapper">
              <button onClick={handleVisitClick} className="visit-button">
                <p>VISIT</p> &nbsp; <span>|</span> &nbsp; {logo()}
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
  )
}

export default Sponsor
