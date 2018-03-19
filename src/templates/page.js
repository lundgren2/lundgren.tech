import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { rhythm } from '../utils/typography'

const propTypes = {
  data: PropTypes.object.isRequired
}

class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.contentfulPage
    const { title, id, slug, body, createdAt } = page

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

PageTemplate.propTypes = propTypes

export default PageTemplate

export const pageQuery = graphql`
  query PageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
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
