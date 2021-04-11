import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const GalleryModal = ({idx, toggleModal, meta }) => {
  const modalData = useStaticQuery(graphql`
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
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="modal" onClick={toggleModal}>
      <span className="close-button">&#10006;</span>
      <div className="modal-image">
        <Img
          fadeIn
          fluid={
            modalData.galleryPhotos.edges[idx].node.childImageSharp.fluid
          }
          objectFit="contain"
          objectPosition="50% 50%"
          alt=""
          quality="100"
        />
        <div className="meta-data">
          <div className="meta-flex-wrapper">
            <span>{meta.location}</span>
            <span>{meta.date}</span>
            <span>Pictured : {meta.members}</span>
            <span>
              <a href={meta.photographer.link} target="_blank" rel="noreferrer">
                Photographer :{" "}
                <span className="photographer-link">
                  {meta.photographer.name}
                </span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryModal
