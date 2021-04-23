import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

import Img from "gatsby-image"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { slowScrollUpFadeIn } from '../animations/scrollAnimations'

import { StravaIcon } from "./icons"

import { EVENTS_INFO } from '../assets/events-data'

const EventsSection = ({ isMobile }) => {
  const data = useStaticQuery(graphql`
    query {
      eventImages: allFile(
        filter: {
          extension: { regex: "/(jpg|png|jpeg)/" }
          relativeDirectory: { eq: "event-images" }
        }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(quality: 75) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!isMobile) {
      slowScrollUpFadeIn(".event-col")
    }
  }, [])

  return (
    <>
      {isMobile && (
        <div className="events-header">
          {/* <span>RIDE</span> */}
          <span>RIDE WITH US</span>
        </div>
      )}
      <section className="events" id="events">
        {EVENTS_INFO.map(ev => {
          return (
            <div className="event-col" key={ev.title} >
              <div className="map-img">
                <Img
                  fadeIn
                  fluid={
                    data.eventImages.edges[ev.picIdx].node.childImageSharp.fluid
                  }
                  objectFit="contain"
                  objectPosition="50% 50%"
                  alt=""
                />
                <div className="ride-stats">
                  <span>{ev.hours} hrs</span>
                  ▪
                  <span>{ev.dist} mi</span>
                  ▪
                  <span>{ev.elev} ft</span>
                </div>
                <a
                  href={`https://www.strava.com/${ev.link}`}
                  target="_blank" rel="noreferrer"
                  className="event-link"
                >
                  <StravaIcon />
                </a>
              </div>
              <div className="details-flex-wrapper">
                <div className="details">
                  <div className="ride-title">{ev.title}</div>
                  <div className="time-info">
                    {ev.day} | {ev.time}
                  </div>
                  <div className="start">@{ev.startLoc}</div>
                </div>
                <div className="description">
                  <p>{ev.desc}</p>
                </div>
                <div className="leader-info">
                  <div className="leader-img">
                    <Img
                      fadeIn
                      fluid={
                        data.eventImages.edges[ev.leader.picIdx].node
                          .childImageSharp.fluid
                      }
                      objectFit="contain"
                      objectPosition="50% 50%"
                      alt=""
                    />
                  </div>
                  <div className="leader-details">
                    <div className="leader-name">
                      Contact | <span>{ev.leader.name}</span>
                    </div>
                    <div className="insta-handle">
                      <a
                        target="_blank" rel="noreferrer"
                        href={`https://www.instagram.com/${ev.leader.insta}`}
                      >
                        <span>@</span>
                        {ev.leader.insta}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default EventsSection
