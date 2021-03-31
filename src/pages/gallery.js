import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"
import { useStaticQuery, graphql } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

import { ScrollIcon } from "../components/icons"
import GalleryModal from "../components/gallery-modal"

const TeamGallery = ({ isMobile, setGalleryScrolled }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalPhoto, setModalPhoto] = useState(0)
  const pageRef = useRef(null)

  const [footerRef, footerInView] = useInView({
    threshold: 0,
  })

  const [gallRef, gallTopInView] = useInView({
    threshold: .6,
  })

  useEffect(() => {
    setGalleryScrolled()
  }, [gallTopInView])

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

  const data = useStaticQuery(graphql`
    query {
      galleryPhotos: allFile(
        filter: {
          extension: { regex: "/(jpg|png|jpeg)/" }
          relativeDirectory: { eq: "gallery-images" }
        }
        sort: { fields: base, order: DESC }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid(maxWidth: 1200, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const handleModalOpen = (idx) => {
    setModalPhoto(idx)
    setModalOpen(true)
  }

  console.log('data.galleryPhotos.edges: ', data.galleryPhotos.edges);
  
  return (
    <>
      <div ref={pageRef} className="gallery">
        {modalOpen && (
          <GalleryModal
            toggleModal={() => setModalOpen(false)}
            imgSrc={
              data.galleryPhotos.edges[modalPhoto].node.childImageSharp.fluid
            }
          />
        )}
        <div className="absolute-wrapper">
          {!footerInView && (
            <div className="gallery-btn left">
              <div className="rotate-wrapper">
                <AniLink
                  cover
                  bg="rgb(77, 238, 254)"
                  direction="right"
                  top="enter"
                  to="/"
                  href="/#"
                >
                  <div className="back-btn hover-shadows">Home</div>
                  <ScrollIcon classN="gallery-home__btn" />
                </AniLink>
              </div>
            </div>
          )}
          <div className="grid-wrapper">
            {!isMobile && (
              <>
                <div className="nav-vis-trigger" ref={gallRef} />
                <div className="space"></div>
              </>
            )}
            {data.galleryPhotos.edges.map((photo, idx) => (
              <div
                className={`photo photo${idx + 1}`}
                key={photo.node.id}
                style={{ gridArea: `p${idx + 1}` }}
                onClick={() => handleModalOpen(idx)}
              >
                {/* <p>{photo.node.id}</p> */}
                <Img
                  fadeIn
                  fluid={photo.node.childImageSharp.fluid}
                  objectFit="contain"
                  objectPosition="50% 50%"
                  alt=""
                />
              </div>
            ))}
          </div>
          {!footerInView && !isMobile && (
            <div className="back-to-top">▲ back to top</div>
          )}
          {!footerInView && (
            <div className="gallery-btn season-selectors">
              <a className="selector">2020</a>
              <a className="selector">2019</a>
              <a className="selector">2018</a>
            </div>
          )}
        </div>
      </div>
      <div ref={footerRef} className="gallery-trigger"></div>
    </>
  )
}

export default TeamGallery
