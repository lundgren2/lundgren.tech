import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const {
      title,
      id,
      slug,
      body,
      createdAt
    } = post

    return (
      <div>
        <h1>{title}</h1>
        <p>{createdAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.html
          }}
        />
      </div>
    )
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
