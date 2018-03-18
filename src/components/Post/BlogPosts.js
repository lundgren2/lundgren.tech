import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const BlogPosts = ({posts}) => (
  <section className="posts">
    {posts.map(edge => <BlogPost key={edge.node.id} post={edge.node} />)}
  </section>
)

const BlogLink = styled(Link)`
  color: #000;
  text-decoration: none;
`
const Body = styled('div')`
  p:first-of-type:first-letter {
    color: rgb(48, 4, 125);
    float: left;
    font-family: 'Playfair Display', serif;
    text-transform: uppercase;
    font-size: 75px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
  }
`

const Article = styled('article')`
  margin: 1.5em auto;
  padding: 1em;
`

const BlogPost = ({post}) => {
  const {
    title,
    slug,
    body,
    createdAt
  } = post
  return (
    <Article className="post">
      <h1><BlogLink to={slug}>{title}</BlogLink></h1>
      <p>{createdAt}</p>
      <Body dangerouslySetInnerHTML={{
        __html: body.childMarkdownRemark.html
      }}/>
    </Article>
  )
}

module.exports = {
  BlogPost,
  BlogPosts
}
