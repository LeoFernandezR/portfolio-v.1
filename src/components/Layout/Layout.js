import * as React from 'react'
import PropTypes from 'prop-types'
import 'typeface-roboto'
import 'normalize.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { background, container } from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={background}>
      <Header />
      <main className={container}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
