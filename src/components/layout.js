/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { handleColor } from './helpers'

import Header from './template/header'
import Footer from './template/footer'

const Layout = ({ children, location }) => {
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
                // maxWidth: '100vw',
            }}
        >
            <Header color={handleColor(location.pathname)} uri={location.pathname} />
            <main>{children}</main>
            <Footer siteTitle={title} path={location.pathname} />
        </div>
    )
}

export default Layout
