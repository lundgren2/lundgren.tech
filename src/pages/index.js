import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
// import Card from '../components/Card'
import bg from '../images/bg.jpg'
// import { BlogPosts } from '../components/Post/BlogPosts'

const Wrapper = styled.section`
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`

const IndexPage = ({ data }) => {
  console.log(data)
  const posts = data.allMdx.edges
  return (
    <Wrapper>
      <h1>Lundgren Design</h1>
      {posts.map(({ node }) => (
        <article key={node.fields.slug}>
          <h2 className="post">{node.frontmatter.title}</h2>
          <div className="post-content">{node.frontmatter.excerpt}</div>
        </article>
      ))}
    </Wrapper>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
