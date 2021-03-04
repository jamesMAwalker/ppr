import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

import { AmtberLogo, AmtberWordmark } from '../components/Logo'

const logoMatrix = {
  amtber: {
    logo: AmtberLogo,
    wordmark: AmtberWordmark,
  },
  bikeLegal: {
    logo: AmtberLogo,
    wordmark: AmtberWordmark,
  },
  FC: {
    logo: AmtberLogo,
    wordmark: AmtberWordmark,
  },
  FS: {
    logo: AmtberLogo,
    wordmark: AmtberWordmark,
  },
  POC: {
    logo: AmtberLogo,
    wordmark: AmtberWordmark,
  },
  s4g: {
    logo: AmtberLogo,
    wordmark: AmtberWordmark,
  },
}

const Sponsor = ({ id, blurb }) => {
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

  const [hovered, setHovered] = useState(false)

  const hoverDebounce = (bool) => {
    setTimeout(() => {
      setHovered(bool)
    }, 0)
  }

  return (
    <div
      className={`sponsor ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="shade"
      >
        <div className="shade-logo">
          <AmtberWordmark />
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
    </div>
  )
}

export default Sponsor
