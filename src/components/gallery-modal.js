import React from 'react'
import Img from "gatsby-image"

const GalleryModal = ({ toggleModal, imgSrc, meta }) => {
  console.log("photo meta data", meta);
  
  return (
    <div className="modal" onClick={toggleModal}>
      <span className="close-button">&#10006;</span>
      <div className="modal-image">
        <Img
          fadeIn
          fluid={imgSrc}
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
              <a href={meta.photographer.link} target="_blank">
                Photographer : <span className="photographer-link">{meta.photographer.name}</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryModal
