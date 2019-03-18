const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve('./src/templates/blog-post.js')

  const posts = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  if (posts.errors) {
    console.error(posts.errors)
    throw Error(posts.errors)
  }

  posts.data.allContentfulBlogPost.edges.forEach((post, index) => {
    createPage({
      path: `/article/${post.node.slug}/`,
      component: blogPost,
      context: {
        slug: post.node.slug,
      },
    })
  })
}
