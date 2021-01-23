import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"


import gsap from "gsap"

import Img from "gatsby-image"
import { RightChevron, ScrollIcon } from "./icons"

// let tl = gsap.timeline()

const HeroGrid = () => {
  useEffect(() => {
    gsap.from(".hero-center", 1.5, {
      x: "-7vw",
      ease: 'expo.InOut'
    })
    gsap.fromTo(
      ".hero-center img",
      1.5,
      {
        // opacity: 0.5,
        objectPosition: "10px",
        ease: "expo.InOut",
      },
      {
        objectPosition: "-200px",
        ease: "expo.InOut",
      }
    )

    gsap.from(".photo", 0.8, {
      opacity: .2,
      stagger: { amount: 0.3 },
    })

    gsap.from(".hero-small", 1.5, {
      x: "-7vw",
      ease: "expo.InOut",
    })

    gsap.fromTo(
      ".hero-small img",
      1.5,
      {
        // opacity: 0.5,
        objectPosition: "10px",
        ease: "expo.InOut",
      },
      {
        objectPosition: "0px",
        ease: "expo.InOut",
      }
    )

  }, [])

  const data = useStaticQuery(graphql`
    query {
      bannerCenter: file(
        relativePath: { eq: "full-sized-images/hero-center.jpeg" }
      ) {
        childImageSharp {
          fluid(
            maxWidth: 1200
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroLeft: file(relativePath: { eq: "full-sized-images/hero-left.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 1200
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroRight: file(
        relativePath: { eq: "full-sized-images/hero-right.jpeg" }
      ) {
        childImageSharp {
          fluid(
            maxWidth: 1200
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero">
      <div className="hero-grid">
        <div className="hero-small  photo left">
          <Img
            fadeIn="false"
            fluid={data.heroLeft.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
          <div className="hero-text">PLANT</div>
        </div>
        <div className="hero-center photo">
          <Img
            fadeIn="false"
            loading="eager"
            fluid={data.bannerCenter.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 100%"
            alt=""
          />
          <div className="hero-text">POWER</div>
        </div>
        <div className="hero-small photo right">
          <Img
            fadeIn="false"
            fluid={data.heroRight.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
          <div className="hero-text right">RACING</div>
        </div>
      </div>
      <div className="scroll">
        <div className="scroll-container">
          <ScrollIcon />
          <span className="hover-shadows">scroll down</span>
        </div>
      </div>
    </div>
  )
}

export default HeroGrid;
