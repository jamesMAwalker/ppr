import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const TeamMember = ({ idx, member, active, expandMember }) => {
  const data = useStaticQuery(graphql`
    query {
      david: file(relativePath: { eq: "team-images/david.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      james: file(relativePath: { eq: "team-images/james.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      josh: file(relativePath: { eq: "team-images/josh.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mattia: file(relativePath: { eq: "team-images/mattia.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nick: file(relativePath: { eq: "team-images/nick.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oscar: file(relativePath: { eq: "team-images/oscar.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      taylor: file(relativePath: { eq: "team-images/taylor.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      davidLS: file(
        relativePath: { eq: "team-images/landscape-photos/david.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jamesLS: file(
        relativePath: { eq: "team-images/landscape-photos/james.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      joshLS: file(
        relativePath: { eq: "team-images/landscape-photos/josh.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mattiaLS: file(
        relativePath: { eq: "team-images/landscape-photos/mattia.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nickLS: file(
        relativePath: { eq: "team-images/landscape-photos/nick.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oscarLS: file(
        relativePath: { eq: "team-images/landscape-photos/oscar.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      taylorLS: file(
        relativePath: { eq: "team-images/landscape-photos/taylor.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      className={`member ${active}`}
      onClick={() => expandMember(idx)}
      onKeyDown={e => {
        if (e.code === 13) expandMember(idx)
      }}
      role="button"
      tabIndex={0}
    >
      {!active ? (
        <div className="animation-wrapper">
          <h4 className="name--closed">
            <div className="name-text">
              {member.name.split(" ").map(n => (
                <span>{n}</span>
              ))}
            </div>
            <div className="name-btn">+</div>
          </h4>
          <Img
            fadeIn
            loading="eager"
            fluid={data[member.id].childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 100%"
            alt={member.name}
          />
        </div>
      ) : (
        <div className="animation-wrapper">
          <div className="member-info__container">
            <div className="details">
              <div className="details__flex-wrapper">
                <div className="details__name">
                  <h2>{member.name}</h2>
                </div>
                <div className="details__role">{member.role}</div>
                <div className="details__type">{member.type}</div>
              </div>
            </div>
            <div className="bio">
              <div className="bio__scroll-wrapper">
                <p className="bio__text">{member.bioText}</p>
              </div>
            </div>
          </div>
          <Img
            fadeIn
            loading="eager"
            fluid={data[member.gqlId].childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 100%"
            alt=""
          />
        </div>
      )}
    </div>
  )
}

export default TeamMember