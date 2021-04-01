import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

import Img from "gatsby-image"
import { Link } from "gatsby"

import { PALogo, PAWordMarkWhite } from "../components/Logo"

const PACard = () => {
  const [cardOpen, setCardOpen] = useState(false)

  const handleCardOpen = () => {
    setCardOpen(!cardOpen)
  }

  useEffect(() => {
    gsap.from(".pa-modal", 0.5, {
      opacity: 0,
      x: "10vw",
    })
  }, [cardOpen])

  // const data = useStaticQuery(graphql`
  //   query {
  //     paPeople: file(relativePath: { eq: "sponsor-images/PA.webp" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1200, quality: 50) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      paImages: allFile(
        filter: { relativeDirectory: { eq: "pa-images" } }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 150, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  console.log(data.paImages.edges[1].node.childImageSharp.fluid)

  return (
    <>
      <div
        className={`PA-square ${cardOpen ? "open" : ""}`}
        onClick={handleCardOpen}
      >
        <Link>
          <PALogo />
        </Link>
      </div>
      {cardOpen && (
        <div className="pa-modal">
          {cardOpen && (
            <>
              <div className="pa-img">
                <PAWordMarkWhite />
                <Img
                  fadeIn
                  loading="eager"
                  fluid={data.paImages.edges[0].node.childImageSharp.fluid}
                  objectFit="cover"
                  objectPosition="50% 100%"
                  alt="plant athletic apparel clad people"
                />
              </div>
              <div className="modal-content">
                <div className="modal-blurb">
                  <div className="p1">
                    Plant Power Racing is proud to to partner with Plant
                    Athletic. We share their commitment to a more vegan world,
                    as well as love and support them as people.
                  </div>
                  <br />
                  <div className="p2">
                    Check out their store to support ethically and sustainably
                    produced athletic apparel.
                  </div>
                </div>
                <div className="certifications">
                  <img
                    src={data.paImages.edges[1].node.childImageSharp.fluid.src}
                    alt=""
                  />
                  <img
                    src={data.paImages.edges[2].node.childImageSharp.fluid.src}
                    alt=""
                  />
                  <img
                    src={data.paImages.edges[3].node.childImageSharp.fluid.src}
                    alt=""
                  />
                  <img
                    src={data.paImages.edges[4].node.childImageSharp.fluid.src}
                    alt=""
                  />
                </div>
                <div className="hashtag">#BE THE PROOF</div>
                <button className="toPA-button">VISIT PLANT ATHLETIC</button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default PACard
