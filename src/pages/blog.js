import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

import { Link } from 'gatsby'
import { getGatsbyImageData } from "gatsby-source-sanity"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

const sanityConfig = { projectId: "ntn6dlx6", dataset: "production" }

const Blogs = ({ data }) => {
  console.log('data from blog posts page: ', data);
  
  return (
    <main className="blogs">
      <div className="blogs-grid-wrapper">
        {data.entryData.edges.map(({ node: entry }, idx) => {
          const mainImageAssetId = entry.mainImage.asset.id
          const authorImageAssetId = entry.authors[0].author.image.asset.id

          const excerptText = entry.excerpt[0].children[0].text
          const authorName = entry.authors[0].author.name

          const sharedImageOptions = {
            formats: ["auto", "webp", "avif"],
            placeHolder: "dominantColor",
          }

          const mainImageData = getGatsbyImageData(
            mainImageAssetId,
            { ...sharedImageOptions, width: 700 },
            sanityConfig
          )

          const authorImageData = getGatsbyImageData(
            authorImageAssetId,
            { ...sharedImageOptions },
            sanityConfig
          )

          const center = idx === 3 ? "center" : ""

          return (
            <section className={`blog-card ${center}`}>
              <div className="blog-card-title">
                <Link to={entry.gatsbyPath}>
                  {entry.title}
                </Link>  
              </div>
              <div className="blog-card-subtitle">{excerptText}</div>
              <div className="blog-card-author">
                <div className="blog-card-author-photo">
                  <GatsbyImage image={authorImageData} />
                </div>
                <div className="blog-card-author-name">
                  by <span>{authorName}</span>
                </div>
              </div>
              <div className="blog-card-bgphoto">
                <GatsbyImage image={mainImageData} />
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
    entryData: allSanityPost(sort: { fields: _updatedAt, order: ASC }) {
      edges {
        node {
          gatsbyPath(filePath: "/posts/{SanityPost.slug__current}")
          title
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
            }
          }
          body {
            children {
              text
            }
          }
          authors {
            author {
              name
              _createdAt
              image {
                alt
                asset {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`