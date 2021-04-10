import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"
import { useStaticQuery, graphql } from "gatsby"

import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

import { ScrollIcon } from "../components/icons"
import GalleryModal from "../components/gallery-modal"

import { GALLERY_META } from '../assets/gallery-meta-data'

const TeamGallery = ({ isMobile, setGalleryScrolled, setBtnVisible }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalPhoto, setModalPhoto] = useState(0)
  const pageRef = useRef(null)

  const [footerRef, footerInView] = useInView({
    threshold: 0,
  })

  const [gallRef, gallTopInView] = useInView({
    threshold: .6,
  })

  // Hides nav when gallery scrolls
  useEffect(() => {
    setGalleryScrolled()
  }, [gallTopInView])

  // Start Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin)

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

  // Stop scroll while modal open
  useEffect(() => {
    if (modalOpen) {
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = "scroll"
    }
  }, [modalOpen])

  // listen for esc keypress and close modal
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closeModalAnimated()
      }
    }
    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
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
              fluid(
                maxWidth: 750, 
                quality: 100,
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
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

    // hides mobile menu 
    setBtnVisible()
    
    setTimeout(() => {
      gsap.to(".gallery .modal", 0.5, {
        opacity: 1,
      })
    }, 200);
  }

  const scrollTop = () => {
    gsap.to(".gallery .absolute-wrapper", 1, {
      scrollTo: 0,
    })
  }

  const closeModalAnimated = () => {
    gsap.to(".gallery .modal", .5, {
      opacity: 0,
    })
    setTimeout(() => {
      setModalOpen(false)
    }, 500);

     // hides mobile menu 
    setBtnVisible()
  }


  
  return (
    <>
      <div ref={pageRef} className="gallery">
        {modalOpen && (
          <GalleryModal
            fadeIn
            loading="eager"
            toggleModal={closeModalAnimated}
            meta={GALLERY_META[modalPhoto]}
            idx={modalPhoto}
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
                idx={idx}
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
            <div className="back-to-top" onClick={scrollTop}>
              ▲ back to top
            </div>
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
