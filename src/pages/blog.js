import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

import Img from "gatsby-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

const sanityConfig = { projectId: "ntn6dlx6", dataset: "production" }

const Blogs = () => {
  const data = useStaticQuery(graphql`
    query {
      entryData: allSanityPost {
        edges {
          node {
            title
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
  `)

  console.log(data.entryData.edges)

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
            <section className={`blog ${center}`}>
              <div className="blog-title">{entry.title}</div>
              <div className="blog-subt blog-excerpt">{excerptText}</div>
              <div className="blog-author">
                <div className="blog-author-photo">
                  <GatsbyImage image={authorImageData} />
                </div>
                <div className="blog-author-name">
                  by <span>{authorName}</span>
                </div>
              </div>
              <div className="blog-bgphoto">
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
