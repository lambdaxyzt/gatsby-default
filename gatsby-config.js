const path = require('path');
require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: ``,
        description: ``,
        author: ``,
        siteUrl: ``,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-react-svg`,
        `gatsby-plugin-image`,
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // *** Root Import ***
        {
            resolve: "gatsby-plugin-root-import",
            options: {
                resolveModules: [path.join(__dirname, "src")],
            },
        },
        // *** source file system ***
        // image :
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `image`,
                path: path.resolve(process.env.IMAGE_FOLDER),
            },
        },
        // data :
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
            },
        },
        // *** styling options *** :
        // styled-jsx
        {
            resolve: `gatsby-plugin-styled-jsx`,
            options: {
                jsxPlugins:
                    ["@styled-jsx/plugin-sass"],
            },
        },
        // emotion
        `gatsby-plugin-sass`,
        // *** manifest plugin ***
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
