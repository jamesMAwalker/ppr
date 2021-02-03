import React, { useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from "gatsby" 
// import { TransitionLink } from "gatsby-plugin-transition-link"
import gsap from 'gsap'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Img from "gatsby-image"
// import Header from '../components/header'
import { LeftChevron } from '../components/icons'

const TeamGallery = () => {
  // let tl = gsap.timeline() 
  const pageRef = useRef(null)

  useEffect(() => {
    gsap.from(".gallery", 0.8, {
        ease: "expo.InOut",
        // opacity: .2,
        stagger: { amount: 1 },
      })
      
    gsap.from(".photo", 0.8, {
        ease: "expo.InOut",
        opacity: 0,
        stagger: { amount: 1 },
      })
  }, [])

  /*
    TODO
    To write a query that sources all images
    in a given directory, use the following code:
    query Images {
      images: allFile(filter: { relativeDirectory: {
        eq: "down-sized-images/gallery"
      }}) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

  
  */

  const data = useStaticQuery(graphql`
    query {
      collage1: file(
        relativePath: { eq: "down-sized-images/gallery/collage1.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      collage2: file(
        relativePath: { eq: "down-sized-images/gallery/collage2.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      collage3: file(
        relativePath: { eq: "down-sized-images/gallery/collage3.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      collage4: file(
        relativePath: { eq: "down-sized-images/gallery/collage4.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      collage5: file(
        relativePath: { eq: "down-sized-images/gallery/collage5.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      collage6: file(
        relativePath: { eq: "down-sized-images/gallery/collage6.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      collage7: file(
        relativePath: { eq: "down-sized-images/gallery/collage7.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      collage8: file(
        relativePath: { eq: "down-sized-images/gallery/collage8.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      collage9: file(
        relativePath: { eq: "down-sized-images/gallery/collage9.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      collage10: file(
        relativePath: { eq: "down-sized-images/gallery/collage10.png" }
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
    <div ref={pageRef} className="gallery">
      <AniLink
        cover
        bg="rgb(77, 238, 254)"
        direction="right"
        top="enter"
        to="/"
        href='/#'
      >
        <div className="gallery-btn left">Home</div>
        <LeftChevron classN="chevron" />
      </AniLink>
      <div className="grid-wrapper">
        <div className="photo photo1">
          <Img
            fadeIn
            fluid={data.collage1.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
        <div className="photo photo2">
          <Img
            fadeIn
            fluid={data.collage2.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
        <div className="photo photo3">
          <Img
            fadeIn
            fluid={data.collage3.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
        <div className="photo photo4">
          <Img
            fadeIn
            fluid={data.collage4.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
        <div className="photo photo5">
          <Img
            fadeIn
            fluid={data.collage5.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
        <div className="photo photo6">
          <Img
            fadeIn
            fluid={data.collage6.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
        <div className="photo photo7">
          <Img
            fadeIn
            fluid={data.collage7.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
        <div className="photo photo8">
          <Img
            fadeIn
            fluid={data.collage8.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
        <div className="photo photo9">
          <Img
            fadeIn
            fluid={data.collage9.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
        <div className="photo photo10">
          <Img
            fadeIn
            fluid={data.collage10.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
      </div>
      <div className="gallery-btn season-selectors">
        <a className="selector">2017</a>
        <a className="selector">2018</a>
        <a className="selector">2019</a>
      </div>
    </div>
  )
}

export default TeamGallery
