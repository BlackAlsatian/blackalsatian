/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import LazyLoad from 'react-lazyload'
import { handleBgColor } from '../components/helpers'
import Header from './template/header'
import Footer from './template/footer'
import PlaceholderLoader from '../components/placeholderLoader'

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
    const path = window.location.pathname ? window.location.pathname : location.pathname
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
            <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
                <Footer siteTitle={title} path={path} />
            </LazyLoad>
        </div>
    )
}

export default Layout
