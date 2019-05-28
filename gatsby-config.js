require('dotenv').config({
  path: `.env`,
});

module.exports = {
  __experimentalThemes: ['@lundgren/gatsby-theme-lundgren-blog'],
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-138039562-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lundgren Design Gatsby Starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/favicon.png`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
