require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
}

const config = require('./config/website')
const path = require(`path`)

if (!contentfulConfig.spaceId || !contentfulConfig.accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'LD Gatsby Starter',
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `uploads`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `./gatsby-icon.ico`,
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
