module.exports = {
  siteMetadata: {
    title: 'LD Gatsby Starter',
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "csjnu0su6qne",
        accessToken: "b2c995f06527ae8c305049f8dfc54a84d4f552d3f870aee0053d4222e7b4650c"
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typography',
    'gatsby-plugin-emotion',
  ],

};
