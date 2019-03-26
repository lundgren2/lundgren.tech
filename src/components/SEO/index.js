import path from 'path'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import SchemaOrg from './SchemaOrg'
import website from '../../../config/website'

const SEO = ({ postData, frontmatter = {}, postImage, isBlogPost }) => {
  const postMeta = frontmatter || postData.childMarkdownRemark.frontmatter || {}
  const description = postMeta.description || website.description
  const title = postMeta.title || website.title
  const image = postImage ? `${seo.canonicalUrl}${postImage}` : seo.image
  const url = postMeta.slug ? `${seo.canonicalUrl}${path.sep}${postMeta.slug}` : seo.canonicalUrl
  const datePublished = isBlogPost ? postMeta.datePublished : false

  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.social.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        canonicalUrl={seo.canonicalUrl}
        author={seo.author}
        organization={seo.organization}
        defaultTitle={seo.defaultTitle}
      />
    </>
  )
}

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
  postImage: PropTypes.string,
}

SEO.defaultProps = {
  isBlogPost: false,
  postData: { childMarkdownRemark: {} },
  postImage: null,
}

export default SEO
