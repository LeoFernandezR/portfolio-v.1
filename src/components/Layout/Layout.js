/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Header/Header'
import 'normalize.css'
import Footer from './Footer/Footer'
import { background, container } from './layout.module.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div className={background}>
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <main className={container}>{children}</main>
      <Footer siteAuthor={data.site.siteMetadata?.author || 'Author'} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
