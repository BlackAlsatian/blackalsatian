import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/template/layout'
import SEO from '../components/seo'

const TempHome = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='Temp Home' />
      <h1>Temp Home</h1>
      <p>Ooh, but it's cummin', ainnit'</p>
    </Layout>
  )
}

export default TempHome

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
