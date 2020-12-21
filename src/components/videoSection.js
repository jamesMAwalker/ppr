import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const VideoSection = () => {
  const data = useStaticQuery(graphql`
    query {
      video: file(
        relativePath: { eq: "down-sized-images/video-thumb.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="video-section">
      <div className="flex-container">
        <div className="video-player">
          <Img
            fluid={data.video.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="cyclist-skidding-in-dirt"
          />
          {/*<video
            poster="https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/fr/e15/s1080x1080/53006846_539912093081814_3463245754746190054_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=106&oh=cda110261b8679cd3868e39c2171c671&oe=5DE56700"
            controls
            type="video/mp4"
            src="https://scontent-dfw5-2.cdninstagram.com/v/t50.2886-16/53730396_2071478279602567_7391671117649281024_n.mp4?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=107&oe=5DE5325D&oh=28646880a3188b07a14e6a88d281124a"
          />*/}
        </div>
        <div className="video-content">
          <div className="title">
            <h3>
              From where we live, <br /> from where we ride.
            </h3>
          </div>
          <div className="content">
            <p>
              When we first met and decided to go ahead with forming and
              registering the team it was obviously clear that we needed team
              kits. It’s easy to create a custom kit these days with a number of
              manufacturers in Southern California alone, but instead we reached
              out to Daniel Bovalino around the globe in Australia. He’s the
              founder and creative head behind Vegan Athletic. Having followed
              Vegan Athletic since inception, we were attracted by their
              mission, ethical-on-demand manufacturing, as well as just simply
              sexy-looking kits, all of which are perfectly aligned with our
              mission. If we wanted to get off to a good start, creating a
              partnership with them would be a catalyst.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
