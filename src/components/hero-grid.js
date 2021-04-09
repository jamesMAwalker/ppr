import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import Img from "gatsby-image"

import { Logo } from './Logo'


const HeroGrid = ({ isMobile }) => {
  const [heroesLoaded, setHeroesLoaded] = useState([
    false, 
    false, 
    false
  ])
  const [heroesAllLoaded, setHeroesAllLoaded] = useState(false)
  
  const handleLoaded = (idx) => {
    const newLoadState = heroesLoaded
    newLoadState[idx] = true
    setHeroesLoaded(newLoadState)
    setTimeout(() => {
      setHeroesAllLoaded(heroesLoaded.every(h => h === true))
      gsap.to(".vp-shade", 1, { 
        opacity: 0,
        transform: "scale(2)"
       })
      gsap.to(".vp-shade", 1, { 
        visibility: 'hidden',
        delay: 1.5
       })
    }, 1000);
  }

  // > Start Animations
  useEffect(() => {
    gsap.to(".vp-shade svg", 1, {
      opacity: 1,
      repeat: -1,
      yoyo: true,
    })

    gsap.from(".photo", 1, {
      opacity: 0,
      delay: 2.5,
      stagger: { amount: .5 },
    })

    gsap.from(".hero-text", 1, {
      opacity: 0,
      delay: 3,
      stagger: { amount: .1 },
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

  // > Scroll Animations
  useEffect(() => {
    if (!isMobile) {
      gsap.registerPlugin(ScrollTrigger)

      gsap.to(".hero-grid .photo", 1, {
        scrollTrigger: {
          trigger: ".hero-grid .photo",
          start: "bottom bottom-=13.5%",
          toggleActions: "restart none none none",
          scrub: 2,
        },
        stagger: {
          amount: 0.25,
        },
        y: `${isMobile ? "-40vw" : 0}`,
      })
    }
  }, [isMobile])



  const data = useStaticQuery(graphql`
    query {
      bannerCenter: file(
        relativePath: { eq: "full-sized-images/hero-center.jpeg" }
      ) {
        childImageSharp {
          fluid(
            maxWidth: 1200
            quality: 80
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroLeft: file(relativePath: { eq: "full-sized-images/hero-left.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 1200
            quality: 80
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
            quality: 80
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className={`vp-shade ${isMobile ? "black" : "white"}`}>
        <Logo />
      </div>
      <main className="hero">
        <div className="hero-grid">
          <div className="hero-small photo left">
            <div
              className="shade"
              style={{
                background: `${!heroesAllLoaded ? "black" : ""}`,
              }}
            />
            <Img
              fadeIn
              fluid={data.heroLeft.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt="a vegan cyclist"
              onLoad={() => handleLoaded(0)}
            />
            <div className="hero-text">
              <span>PLANT</span>
            </div>
          </div>
          <div className="hero-center photo">
            <div
              className="shade"
              style={{
                background: `${!heroesAllLoaded ? "black" : ""}`,
              }}
            />
            <Img
              fadeIn
              fluid={data.bannerCenter.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 100%"
              alt="some vegan cyclists"
              onLoad={() => handleLoaded(1)}
            />
            <div className="hero-text">
              <span>
                <em>POWER</em>
              </span>
            </div>
          </div>
          <div className="hero-small photo right">
            <div
              className="shade"
              style={{
                background: `${
                  !heroesAllLoaded ? "black" : ""
                }`,
              }}
            />
            <Img
              fadeIn
              fluid={data.heroRight.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt="some vegan cyclists"
              onLoad={() => handleLoaded(2)}
            />
            <div className="hero-text right">
              <span>RACING</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HeroGrid;
