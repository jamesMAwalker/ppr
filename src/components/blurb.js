import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const Blurb = () => {
  const data = useStaticQuery(graphql`
    query {
      blurbLarge: file(
        relativePath: { eq: "down-sized-images/blurb-large.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blurbSmall: file(
        relativePath: { eq: "down-sized-images/blurb-small.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id='blurb' className="blurb">
      <div className="container">
        <div className="row">
          <div className="inner-blurb">
            <div className="blurb-text">
              <h3>
                Performance, positivity, <br /> purpose.
              </h3>
              <p>
                An increasing number of vegan athletes are already out there
                pushing and promoting their vegan lifestyle – on an individual
                basis. In addition to that, we are optimistic that showcasing
                performance, positive attitude, and purpose as a team will
                complement our all mission to make the world ‘more vegan’. We
                strive to create a reputation of inclusiveness, authenticity,
                compassion. The benefits we experience from our vegan diet are
                our motivation to affect change.
              </p>
              <div className="btn-row">
                <a href="/">Meet the team +</a>
              </div>
            </div>
            <div className="blurb-images">
              <div className="top-right">
                <Img
                  fluid={data.blurbLarge.childImageSharp.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt=""
                />
              </div>
              <div className="bottom-left">
                <Img
                  fluid={data.blurbSmall.childImageSharp.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="black-box" />
        <div className="black-box overlay" />
      </div>
    </div>
  )
}

export default Blurb
