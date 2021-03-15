import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

import Img from "gatsby-image"

import { ScrollIcon } from "./icons"


/*
! Gatsby Img has an "onLoad" function. Display a loading modal (on mobile at least) that is turned off once the Img has loaded fully.
*/


const HeroGrid = () => {
  
  useEffect(() => {
    gsap.from(".photo", 2, {
      opacity: 0,
      stagger: { amount: 1 },
    })
    
    gsap.from(".hero-small", 1.5, {
      ease: "expo.InOut",
    })


    gsap.fromTo(
      ".hero-small img",
      1.5,
      {
        objectPosition: "0px",
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
    <main className="hero">
      <div className="hero-grid">
        <div className="hero-small photo left">
          <Img
            fadeIn="false"
            fluid={data.heroLeft.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
          <div className="hero-text"><span>PLANT</span></div>
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
          <div className="hero-text"><span><em>POWER</em></span></div>
        </div>
        <div className="hero-small photo right">
          <Img
            fadeIn="false"
            fluid={data.heroRight.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
          <div className="hero-text right"><span>RACING</span></div>
        </div>
      </div>
      <div className="scroll">
        <div className="scroll-container">
          <ScrollIcon />
          <span className="hover-shadows">scroll down</span>
        </div>
      </div>
    </main>
  )
}

export default HeroGrid;
