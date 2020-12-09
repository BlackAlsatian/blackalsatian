/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

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
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}
      >
        {children}
      </main>
      <Footer siteTitle={title} />
    </Container>
  )
}

export default Layout
