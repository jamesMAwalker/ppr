import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Blurb = () => {
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
    <section id="blurb" className="blurb">
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

export default Blurb
