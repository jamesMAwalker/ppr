module.exports = {
  siteMetadata: {
    title: `PPR 20201 Team Site`,
    description: `Information about the Plant Power Racing team for 2021.`,
    author: `james-walker`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        layout: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `v0rw1hdx`,
        dataset: `production`,
        apiVersion: "2021-03-25", // use a UTC date string
        watchMode: true,
        overlayDrafts: true,
        token:
          "skKbmMz6xD1c29LWXqDJeyKBCe2TkgVsy0USillhuJCZqDK56F0DPMduZ3dEPMWMauAZ1PBpXXbze0YPFoOEbazKzULK6TiChXEYOplUL54S29RUM5DrCWNUlH7ppYzf63TdyPpTzyZkwS2IsTESSXnWfJbDlGyEPec60EFh7X5YrO6I6B52", // or leave blank for unauthenticated usage
        useCdn: true,
        withCredentials: true
        // graphqlTag: "default",
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: "v0rw1hdx",
        dataset: "production",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
