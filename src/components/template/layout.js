/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

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
        width: '100vw',
        '::selection': {
          background: 'yellow',
          backgroundColor: 'yellow',
        },
      }}
    >
      <Header />
      <main
        sx={{
          width: '100vw',
          flex: '1 1 auto',
        }}
      >
        {children}
      </main>
      <Footer siteTitle={title} />
    </div>
  )
}

export default Layout
