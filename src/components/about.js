import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
// import gsap from 'gsap'

// import { ScrollTrigger } from "gsap/ScrollTrigger"
import Img from "gatsby-image"

import { slowScrollUpFadeIn } from "../animations/scrollAnimations"

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

    // (el, op=2, y=3)
    slowScrollUpFadeIn(".about-images div")
    if (!isMobile) {
      slowScrollUpFadeIn(".about-text", 1, 2)
    }
  }, [])

  const data = useStaticQuery(graphql`
    query {
      aboutPhotos: allFile(
        filter: {
          extension: { regex: "/(jpg|png|jpeg)/" }
          relativeDirectory: { eq: "about-images" }
        }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="about" className="about">
      <div className="inner-about">
        <div className="about-text">
          <h3>
            Performance,
            <br />
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
          {data.aboutPhotos.edges.map((photo, idx) => (
            <Img
              key={photo.title}
              fadeIn
              fluid={photo.node.childImageSharp.fluid}
              objectFit="contain"
              objectPosition="50% 50%"
              alt={photo.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
