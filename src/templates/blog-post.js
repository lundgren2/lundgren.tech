import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx
  console.log(data)

  return (
    <div style={{ background: '#fff' }}>
      {/* <Helmet title={`${post.title} | ${siteTitle}`} /> */}

      <div className="wrapper">
        {/* <h1 className="section-headline">{post.title}</h1> */}
        <p
          style={{
            display: 'block',
          }}
        >
          {/* {post.publishDate} */}
        </p>
      </div>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`
