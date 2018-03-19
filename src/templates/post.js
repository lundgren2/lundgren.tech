import React from 'react'
import * as PropTypes from 'prop-types'
import { BlogPost } from '../components/Post/BlogPosts'

const propTypes = {
  data: PropTypes.object.isRequired
}

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const { title, id, slug, body, createdAt } = post

    return <BlogPost post={post} />
  }
}

PostTemplate.propTypes = propTypes

export default PostTemplate

export const pageQuery = graphql`
  query PostQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      createdAt(formatString: "DD MMMM, YYYY")
      slug
      id
    }
  }
`
