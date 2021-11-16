import React from "react"
import { graphql } from "gatsby"


import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import SanityImage from 'gatsby-plugin-sanity-image'


const Blogs = ({ data }) => {
  
  
  return (
    <main className="blogs">
      <div className="blogs-grid-wrapper">
        {data.entryData.edges.map(({ node: entry }, idx) => {
          
          const authorName = entry?.author?.name ?? "PPR Team"

          const mainImageData = entry.mainImage.asset.gatsbyImageData
          const authorImageData = entry.author.profileImage

          // set latest post to center grid cell
          const center = idx === 0 ? "center" : ""
          

          return (
            <section className={`blog-card ${center}`}>
              {center && <div className="latest">Latest</div>}
              <div className="blog-card-title">
                <Link to={entry.gatsbyPath}>
                  {entry.title.length > 30
                    ? `${entry.title.slice(0, 36)}...`
                    : `${entry.title}`}
                </Link>
              </div>
              <div className="blog-card-subtitle">{entry.subtitle}</div>
              <div className="blog-card-author">
                <div className="blog-card-author-photo">
                  <SanityImage
                    {...authorImageData}
                    width={200}
                  />
                </div>
                <div className="blog-card-author-name">
                  by <span>{authorName}</span>
                </div>
              </div>
              <div className="blog-card-bgphoto">
                <GatsbyImage image={mainImageData} />
              </div>
              <div className="post-category">
                <em>{entry?.categories[0]?.title || "blog"}</em>
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}

export default Blogs

export const data = graphql`
  query {
    entryData: allSanityPost(sort: { fields: _updatedAt, order: DESC } limit: 5 ) {
      edges {
        node {
          gatsbyPath(filePath: "/posts/{SanityPost.slug__current}")
          title
          subtitle
          categories {
            title
          }
          slug {
            current
          }
          excerpt {
            children {
              text
            }
          }
          mainImage {
            asset {
              assetId
              id
              gatsbyImageData(fit: FILLMAX, formats: [WEBP,AVIF,AUTO])
            }
          }
          body {
            children {
              text
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
    }
  }
`