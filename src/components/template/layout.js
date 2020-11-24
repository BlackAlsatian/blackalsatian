/** @jsx jsx */
import { jsx } from 'theme-ui'
// import React from "react"

import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

// import 'normalize.css'

const Layout = ({ children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        variant: 'layout.root',
      }}
    >
      <Header />
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer siteTitle={title} />
    </div>
  )
}

export default Layout
