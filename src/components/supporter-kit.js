import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { PAWordMark } from './Logo'

const SupporterKit = () => {
  const [mainPhoto, setMainPhoto] = useState(["ph1", "", "", ""])

  const handlePhotoSwitch = (e) => {
    const clickedPhoto = parseInt(e.target.id, 10)
    console.log('clickedPhoto: ', typeof(clickedPhoto));

    const selection = mainPhoto.map((p, i) => {
      if (i === clickedPhoto) {
        return 'ph1'
      } else {
        return ''
      }
    })

    setMainPhoto(selection)
    console.log('selection: ', selection);
    console.log('mainPhoto: ', mainPhoto);
  }

  const data = useStaticQuery(graphql`
    query {
      jerseyRender: file(relativePath: { eq: "supporter-kit-images/ppr-jersey-render.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bigThree: file(relativePath: { eq: "supporter-kit-images/big-3.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gravelSlide: file(relativePath: { eq: "supporter-kit-images/gravel-slide.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      luchos: file(relativePath: { eq: "supporter-kit-images/luchos.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <section className="kit-section">
      <div className="photos">
        <div className="photo-grid">
          <div
            className={`photo ${mainPhoto[0]}`}
            id={0}
            onClick={handlePhotoSwitch}
          >
            <Img
              fluid={data.jerseyRender.childImageSharp.fluid}
              objectFit="contain"
              objectPosition="50% 50%"
              alt="render of cycling jersey"
            />
          </div>
          <div
            className={`photo ${mainPhoto[1]}`}
            id={1}
            onClick={handlePhotoSwitch}
          >
            <Img
              fluid={data.bigThree.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt="cycling jersey in action"
            />
          </div>
          <div
            className={`photo ${mainPhoto[2]}`}
            id={2}
            onClick={handlePhotoSwitch}
          >
            <Img
              fluid={data.gravelSlide.childImageSharp.fluid}
              objectFit="contain"
              objectPosition="50% 50%"
              alt="cycling jersey in action"
            />
          </div>
          <div
            className={`photo ${mainPhoto[3]}`}
            id={3}
            onClick={handlePhotoSwitch}
          >
            <Img
              fluid={data.luchos.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt="cycling jersey in action"
            />
          </div>
        </div>
      </div>
      <div className="description">
        <div className="content">
          <div className="headers">
            <PAWordMark />
            <h3 className="sub">TEAM SUPPORTER KIT</h3>
          </div>
          <div className="kit-blurb">
            We are proud to finally announce the PPR supporter’s jersey from
            Plant Athletic! Plant Athletic has been with us since the very
            beginning of the Plant Power story. Their commitment to a more
            compassionate and sustainable future was massively influential in
            the formation of our ideals as a team. <br /> Support our shared
            mission and represent the team wherever you are in the world.
          </div>
          <div className="button-container">
            <button className="button-color-shadows">GET THE KIT</button>
          </div>
        </div>
      </div>
    </section>
  )
}

{/*
  <Img
    fluid={data.aboutTop.childImageSharp.fluid}
    objectFit="cover"
    objectPosition="50% 50%"
    alt=""
  />
*/}

export default SupporterKit
