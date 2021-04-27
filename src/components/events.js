import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import PortableText from "react-portable-text"
import SanityImage from "gatsby-plugin-sanity-image"

import { slowScrollUpFadeIn } from '../animations/scrollAnimations'

import { StravaIcon } from "./icons"


const EventsSection = ({ isMobile }) => {
  const data = useStaticQuery(graphql`
    query {
      eventData: allSanityEvent(
        limit: 3
        sort: { fields: _createdAt, order: ASC }
      ) {
        edges {
          node {
            id
            gpsLocation
            elevation
            rideLength
            saddleTime
            stravaLink
            mainImage {
              ...ImageWithPreview
            }
            title
            meetTime
            dayOfWeek
            location
            _rawRideDescription
            leader {
              name
              instaHandle
              image {
                ...ImageWithPreview
              }
            }
          }
        }
      }
    }
  `)

  console.log("data from events section: ", data);

  useEffect(() => {
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
        {data.eventData.edges.map(({ node: ev }) => {
          const mainImageData = ev.mainImage
          const leaderImageData = ev.leader.image
          
          return (
            <div className="event-col" key={ev.id}>
              <div className="map-flex-wrapper">
                <div className="map-img">
                  <SanityImage
                    {...mainImageData}
                    width={500}
                    objectFit="contain"
                  />
                  <div className="ride-stats">
                    <span>{ev.saddleTime}</span>▪<span>{ev.rideLength}</span>▪
                    <span>{ev.elevation}</span>
                  </div>
                  <a
                    href={ev.stravaLink}
                    target="_blank"
                    rel="noreferrer"
                    className="event-link"
                  >
                    <StravaIcon />
                  </a>
                </div>
              </div>
              <div className="details-flex-wrapper">
                <div className="details">
                  <div className="ride-title">{ev.title}</div>
                  <div className="time-info">
                    {ev.dayOfWeek} | {ev.meetTime}
                  </div>
                  <div className="start">@{ev.location}</div>
                </div>
                <div className="description">
                  <PortableText content={ev._rawRideDescription} />
                  <p>{ev.desc}</p>
                </div>
                <div className="leader-info">
                  <div className="leader-img">
                    <SanityImage
                      {...leaderImageData}
                      width={250}
                      objectFit="contain"
                    />
                  </div>
                  <div className="leader-details">
                    <div className="leader-name">
                      Contact | <span>{ev.leader.name}</span>
                    </div>
                    <div className="insta-handle">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.instagram.com/${ev.leader.instaHandle}`}
                      >
                        <span>@</span>
                        {ev.leader.instaHandle}
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
