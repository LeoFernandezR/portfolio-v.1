import * as React from 'react'

import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title='404: Not found' />
    <h1 style={notFoundTitle}>404: Not Found</h1>
    <p style={notFoundParagraph}>
      You just hit a route that doesn&#39;t exist... the sadness :(
    </p>
  </Layout>
)

const notFoundTitle = {
  color: 'white',
  fontSize: '3rem',
  textAlign: 'center',
}

const notFoundParagraph = {
  color: 'white',
  fontSize: '2rem',
  textAlign: 'center',
}

export default NotFoundPage
