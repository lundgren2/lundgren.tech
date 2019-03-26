const path = require(`path`)
const _ = require('lodash')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('./src/templates/blog-post.js')

  return graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            code {
              scope
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    if (_.isEmpty(data.allMdx)) {
      return Promise.reject(console.error('There are no posts!'))
    }

    // Create blog post pages.
    const { edges } = data.allMdx

    edges.forEach((edge, index) => {
      const { id } = edge.node
      console.log(edge)

      const previous = index === edges.length - 1 ? null : edge[index + 1].node
      const next = index === 0 ? null : edges[index - 1].node

      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: postTemplate,
        context: {
          id,
          slug: edge.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
