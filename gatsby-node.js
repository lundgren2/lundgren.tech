const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    graphql(
      `
        {
          allContentfulPage {
            edges {
              node {
                slug
                id
              }
            }
          }
        }
      `
    )
    .then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      // Create Product pages
      const pageTemplate = path.resolve(`./src/templates/page.js`)
      // We want to create a detailed page for each
      // page node. We'll just use the Contentful id for the slug.
      _.each(result.data.allContentfulPage.edges, edge => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `${edge.node.slug}`,
          component: slash(pageTemplate),
          context: {
            id: edge.node.id,
          },
        })
      })
    })
    .then(() => {
      graphql(
        `
          {
            allContentfulPost {
              edges {
                node {
                  slug
                  id
                }
              }
            }
          }
        `
      )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        // Create Product pages
        const postTemplate = path.resolve(`./src/templates/post.js`)
        // We want to create a detailed page for each
        // page node. We'll just use the Contentful id for the slug.
        _.each(result.data.allContentfulPost.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `${edge.node.slug}`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
    })
    resolve()
  })
}

