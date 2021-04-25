import React from 'react'
import { graphql } from "gatsby"

import { Link } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image"
import PortableText from "react-portable-text"

const BlogPage = ({ data: { sanityPost } }) => {
  console.log('sanityPost as sanityPost: ', sanityPost);

  const excerptText = sanityPost?.excerpt[0]?.children[0]?.text ?? ""
  const authorName = sanityPost.author.name

  const mainImageData = sanityPost.mainImage
  const authorImageData = sanityPost.author.image

  return (
    <section className="blog-page">
      <div className="blog-main-image">
        <SanityImage {...mainImageData} quality={100} width={1000} hotspot={mainImageData.hotspot}/>
      </div>
      <div className="blog-header-area">
        <div className="blog-header-title">{sanityPost.title}</div>
        <div className="blog-details">
          <p className="blog-excerpt-quote">
            "<br />
            {excerptText}
            <br />"
          </p>
          <div className="blog-details-author">
            <div className="blog-details-author-thumbnail">
              <SanityImage {...authorImageData} width={100}/>
            </div>
            <div className="blog-author-name">
              By <span>{authorName}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-content">
        <div className="blog-text">
          <PortableText content={sanityPost._rawBody} />
        </div>
        {/* <div className="blog-subtitle">
          VXX DAYS 2 & 3: Crossing the Annamite Range
        </div>
        <p className="blog-text">
          I began the second day of VXX still reeling from our impromptu night
          out. Hearing the clamorous commotion of an alarm set much too early
          for someone accustomed to lazy mornings, I groaned and rubbed my sleep
          encrusted eyes. For the next two days, we would be riding vertiginous
          20% climbs across the Annamite mountain range, and I was still
          dragging myself clumsily out of bed at 6:30. Ugh, it was an ominous
          start, or maybe I'm just hopelessly pessimistic. Maybe it's both.
          Nevertheless, I dismissed the thought and found myself slowly, yet
          instinctively fastening up my bag. Despite the straps breaking on our
          very first day or riding, I've managed to secure it firmly to my bike
          frame with a complicated series of knots and reinforcing everything
          with an old bike tube. As soon as I had finished all my morning
          packing (a short 45 minutes later lol), we rolled over to a cafe
          overlooking this tranquil river demarcating the end of Tiên Kỳ and the
          start of our long odyssey into the mountains. First, though, we needed
          some caffeine and a chance to wish Taylor a happy birthday. Since he
          couldn't join us on this edition of VXX, we wanted to plan a ride
          worthy of his legs. Today and tomorrow would certainly deliver. Seeing
          Taylor and the rest of our friends restored my spirits, along with a
          caffeinated jolt of energy and some noodles.
        </p>
        <p className="blog-text">
          Finally, we rolled out of Tiên Kỳ and proceeded to climb.... And
          climb.... And climb.... And climb.... Actually, the first hour of
          riding was relatively easy and relaxed, except for the blistering heat
          of course. We wound our way through small, scattered road side towns
          and made our way to this dilapidated, old bridge. When Andrew
          approached it, a few guys started yelling out to warn us that we'd
          definitely die if we tried crossing it. Apparently, the new bridge was
          just a hundred meters down the road. From there, we could see a
          beautiful expanse of green vegitation and a monstrous dam looming on
          the horizon. As I felt the searing heat of the noontime sun turn my
          clothes into a sweltering furnace that was burning me alive, I quickly
          left the bridge and waited for James and Andrew under the merciful
          shade of a nearby tree. Now, it was time to climb, and climb, and
          climb, and climb, relentlessly and excruciatingly under the summer
          sun. The sheer extremity of the heat alone was making this VXX harder
          and more grueling than anything I remembered from 2016. I was riding
          up inclines that shouldn't have posed any problem, but doing so in
          98-100 degrees for hours at a time was dehydrating us more quickly
          than we could consume whatever liquid we could get our hands on.
        </p> */}
        <div className="back-to-blogs">
          <button className="back-to-blogs-btn">
            <Link to="/posts">◀ BACK TO ALL POSTS</Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogPage


export const pageQuery = graphql`
  query PostPageQuery($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      excerpt {
        children {
          text
        }
      }
      _rawBody
      body {
        children {
          _key
          _type
          marks
          text
        }
      }
      mainImage {
        ...ImageWithPreview
        asset {
          id
          gatsbyImageData(formats: [WEBP, AVIF, AUTO])
        }
      }
      author {
        name
        _createdAt
        image {
          ...ImageWithPreview
        }
      }
    }
  }
`