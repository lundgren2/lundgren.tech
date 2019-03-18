const config = require('./config/website')

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
}

module.exports = {
  siteMetadata: {
    title: 'LD Gatsby Starter',
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
