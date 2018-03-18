import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { TypographyStyle } from 'react-typography'
import styled from 'react-emotion'

import Header from '../components/Header'
import Footer from '../components/Footer'
import typography from '../utils/typography'

import './index.css'

const Wrapper = styled('div')`
  margin: 0 auto;
  padding: 0px, 1.0875rem 1.45rem;
  width: 100%;
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <TypographyStyle typography={typography} />
    <Header />
    <Wrapper>{children()}</Wrapper>
    {/* <Footer /> */}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
