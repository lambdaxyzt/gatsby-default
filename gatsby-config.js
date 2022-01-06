const path = require('path');
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Lambdaxyzt`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: "gatsby-plugin-root-import",
        options: {
            resolveModules: [path.join(__dirname, "src")],
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `image`,
            path: `${__dirname}/src/asset/image`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `data`,
            path: `${__dirname}/src/data`,
        },
    },
    {
      resolve: `gatsby-plugin-styled-jsx`,
      options: {
          jsxPlugins:
              ["@styled-jsx/plugin-sass"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-default`,
        short_name: `default`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/asset/image/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
