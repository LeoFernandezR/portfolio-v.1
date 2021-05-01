import React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo'
import Projects from '../components/Projects/Projects'

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo title='Projects' />
      <Projects />
    </Layout>
  )
}

export default ProjectsPage
