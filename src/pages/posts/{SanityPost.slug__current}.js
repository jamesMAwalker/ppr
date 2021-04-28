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
  const authorImageData = sanityPost.author.profileImage

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
        profileImage {
          ...ImageWithPreview
        }
      }
    }
  }
`