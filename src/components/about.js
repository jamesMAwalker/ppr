import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import gsap from 'gsap'

import { ScrollTrigger } from "gsap/ScrollTrigger"
import Img from "gatsby-image"


const About = () => {
  
  // + Scroll animations
  useEffect(() => {
    const tabBP = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--tablet",
        10
      )
    )
    const isMobile = window.innerWidth <= tabBP

    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".about-text", 0.5, {
      scrollTrigger: {
        start: "top bottom",
        trigger: ".about-text",
      },
      stagger: {
        amount: 0.75,
      },
      // y: `${!isMobile ? "40vh" : 0}`,
      opacity: `${!isMobile ? 0 : 1}`,
    })
    gsap.from(".about-images div", 1, {
      scrollTrigger: {
        trigger: ".about-images div",
        start: "top bottom-=40%",
        toggleActions: "restart none none none",
        scrub: 2,
      },
      x: "30vw",
      stagger: {
        amount: 0.75,
      },
      opacity: 0,
    })
  }, [])

  const data = useStaticQuery(graphql`
    query {
      aboutTop: file(
        relativePath: { eq: "about-images/sea-otter-3s.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutMid: file(
        relativePath: { eq: "about-images/wilson-rest.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutBottom: file(
        relativePath: { eq: "about-images/fast-mattia.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section id="blurb" className="about">
      <div className="inner-about">
        <div className="about-text">
          <h3>
            Performance, 
            <br/> 
            positivity, 
            <br /> 
            purpose.
          </h3>
          <p>
            An increasing number of vegan athletes are already out there pushing
            and promoting their vegan lifestyle – on an individual basis. In
            addition to that, we are optimistic that showcasing performance,
            positive attitude, and purpose as a team will complement our all
            mission to make the world ‘more vegan’. We strive to create a
            reputation of inclusiveness, authenticity, compassion. The benefits
            we experience from our vegan diet are our motivation to affect
            change.
          </p>
          <div className="btn-row">
            <a href="/">Meet the team +</a>
          </div>
        </div>
        <div className="about-images">
          <Img
            fluid={data.aboutTop.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
          <Img
            fluid={data.aboutMid.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
          <Img
            fluid={data.aboutBottom.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default About
