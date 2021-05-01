import React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo'
import Contact from '../components/Contact/Contact'

const ContactPage = () => {
  return (
    <Layout>
      <Seo title='Contact' />
      <Contact />
    </Layout>
  )
}

export default ContactPage
