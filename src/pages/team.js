import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

import Img from "gatsby-image"

import { MEMBER_BIOS } from '../assets/member-bios'

const members = [
  { id: 'david', gqlId: 'davidLS', name: "David Baar", role: 'Captain', type: 'Rouleur', veganYears: 11, bioText: MEMBER_BIOS.david.bio },
  { id: 'taylor', gqlId: 'taylorLS', name: "Taylor Dawson", role: 'FASTMAN', type: 'Puncheur', veganYears: 3, bioText: MEMBER_BIOS.taylor.bio },
  // { id: 'nick', gqlId: 'nickLS', name: "Nick Smith", role: '', type: 'Time Trialist', veganYears: 2, bioText: MEMBER_BIOS.nick.bio },
  { id: 'oscar', gqlId: 'oscarLS', name: "Oscar Ochoa", role: '', type: 'Time Trialist', veganYears: 5, bioText: MEMBER_BIOS.oscar.bio },
  { id: 'mattia', gqlId: 'mattiaLS', name: "Mattia Day", role: 'GC', type: 'Climber', veganYears: 3, bioText: '' },
  { id: 'james', gqlId: 'jamesLS', name: "James Walker", role: 'GC', type: 'Climber', veganYears: 3, bioText: MEMBER_BIOS.james.bio },
  { id: 'josh', gqlId: 'joshLS', name: "Josh Mayhew", role: 'SUPER DOMESTIQUE', type: 'Climber', veganYears: 6, bioText: '' },
]

const TeamMembers = () => {
  const [activeMember, setActiveMember] = useState(null)

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

  useEffect(() => {
     gsap.from(".animation-wrapper", 1, {
       opacity: 0,
     })
  }, [activeMember])

  const handleMemberClick = (idx) => {
    idx === activeMember 
      ? setActiveMember(-1)
      : setActiveMember(idx)
  }

  return (
    <section className='team-container'>
      <div className="absolute-wrapper">
        <div className="flex-wrapper">
          {
            members.map((m, idx) => {
              const active = idx === activeMember 
                ? 'active'
                : ''

              return (
                <div
                  onClick={() => handleMemberClick(idx)}
                  className={`member ${active}`}
                >
                  {!active ? (
                    <div className="animation-wrapper">
                      <h4 className="hover-name">
                        <div className="name-text">
                          {m.name.split(" ").map(n => (
                            <span>{n}</span>
                          ))}
                        </div>
                        <div className="name-btn">+</div>
                      </h4>
                      <Img
                        fadeIn
                        loading="eager"
                        fluid={data[m.id].childImageSharp.fluid}
                        objectFit="cover"
                        objectPosition="50% 100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    <div className="animation-wrapper">
                      <div className="member-info__container">
                        <div className="details">
                          <div className="details__flex-wrapper">
                            <div className="details__name">
                              <h2>{m.name}</h2>
                            </div>
                            <div className="details__role">{m.role}</div>
                            <div className="details__type">{m.type}</div>
                          </div>
                        </div>
                        <div className="member-bio">
                          <div className="bio__scroll-wrapper">
                            <p className="bio__text">{m.bioText}</p>
                          </div>
                        </div>
                      </div>
                      <Img
                        fadeIn
                        loading="eager"
                        fluid={data[m.gqlId].childImageSharp.fluid}
                        objectFit="cover"
                        objectPosition="50% 100%"
                        alt=""
                      />
                    </div>
                  )}
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
