import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

import { InstaIcon, ScrollIcon, StravaIcon } from "../components/icons"

const TeamMember = ({ memberRef, isMobile, idx, member, expanded, expandMember }) => {
  const data = useStaticQuery(graphql`
    query {
      david: file(relativePath: { eq: "team-images/david.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      james: file(relativePath: { eq: "team-images/james.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      josh: file(relativePath: { eq: "team-images/josh.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mattia: file(relativePath: { eq: "team-images/mattia.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      nick: file(relativePath: { eq: "team-images/nick2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      oscar: file(relativePath: { eq: "team-images/oscar.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      taylor: file(relativePath: { eq: "team-images/taylor.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      davidLS: file(
        relativePath: { eq: "team-images/landscape-photos/david.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      jamesLS: file(
        relativePath: { eq: "team-images/landscape-photos/james.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      joshLS: file(
        relativePath: { eq: "team-images/landscape-photos/josh.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mattiaLS: file(
        relativePath: { eq: "team-images/landscape-photos/mattia.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      nickLS: file(
        relativePath: { eq: "team-images/landscape-photos/nick.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      oscarLS: file(
        relativePath: { eq: "team-images/landscape-photos/oscar.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      taylorLS: file(
        relativePath: { eq: "team-images/landscape-photos/taylor.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  

  return (
    <div
      className={`member ${expanded}`}
      id={`member-${idx}`}
      onClick={() => expandMember(idx)}
      onKeyDown={(e) => {
        if (e.code === 13) expandMember(idx)
      }}
      role="button"
      tabIndex={0}
    >
      {!expanded ? (
        <div className="animation-wrapper">
          <h4 className="name--closed">
            <div className="name-text">
              {member.name.split(" ").map((n) => (
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
                  {member.name.split(" ").map((n) => (
                    <h2>{n}</h2>
                  ))}
                </div>
                <div className="details__sub">
                  <div className="details__role">{member.role}</div>
                  <div className="details__type">
                    <em>{member.type}</em>
                  </div>
                  <div className="country"><span role="img" aria-label="flag of team member's location">{member.flag}</span></div>
                  <div className="social-links">
                    <a
                      href={`https://www.instagram.com/${member.social.insta}`}
                      className="social-link"
                    >
                      <InstaIcon classN="member-social" />
                    </a>
                    <a
                      href={`https://www.instagram.com/${member.social.strava}`}
                      className="social-link"
                    >
                      <StravaIcon classN="member-social" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bio">
              <div className="bio__scroll-wrapper">
                <article className="bio__text">{member.bioText}</article>
              </div>
            </div>
            <span className="close-btn">
              <ScrollIcon />
            </span>
          </div>
          <Img
            fadeIn
            loading="eager"
            fluid={data[member.gqlId].childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 100%"
            alt={member.id}
            quality="75"
          />
        </div>
      )}
    </div>
  )
}

export default TeamMember
