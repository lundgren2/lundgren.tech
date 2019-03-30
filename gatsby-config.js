module.exports = {
  __experimentalThemes: ['@lundgren/gatsby-theme-lundgren-blog'],
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lundgren Design Gatsby Starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `static/image/logo-1024.png`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
