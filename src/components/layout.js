/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { handleBgColor } from '../components/helpers'
import Header from './template/header'
import Footer from './template/footer'

if (typeof window !== 'undefined') {
    // Make scroll behavior of internal links smooth
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
}

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
    const path = location.pathname
    return (
        <div
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: handleBgColor(path),
                overflow: 'hidden',
            }}
        >
            <Header path={path} />
            <main>{children}</main>
            <Footer siteTitle={title} path={path} />
        </div>
    )
}

export default Layout
