import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { slowScrollUpFadeIn, fadeIn, zoomSlideVert } from "../animations/scrollAnimations"

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

    if (!isMobile) {
      slowScrollUpFadeIn(".about-text", 1, 2)
      fadeIn(".about-images .about-gatsby-img")
    }
  }, [])

  const aboutImageAnimations = () => {
    zoomSlideVert(".about-images .about-gatsby-img img", ".about-images")
  }

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
              gatsbyImageData(
                width: 1000
                quality: 80
                outputPixelDensities: [2]
                formats: [WEBP, AVIF, AUTO]
              )
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
            <Link to="/team">
              <span className="hover-shadows">
                Meet the team ▶
              </span>
            </Link>
          </div>
        </div>
        <div className="about-images">
          {data.aboutPhotos.edges.map((photo, idx) => {
            const aboutImageData = getImage(photo.node)
            return (
              <GatsbyImage
                image={aboutImageData}
                className="about-gatsby-img"
                onLoad={aboutImageAnimations}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
