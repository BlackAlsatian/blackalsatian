/** @jsxImportSource theme-ui */
import { useStaticQuery, graphql } from 'gatsby'
import Header from './template/header'
import Footer from './template/footer'
import GoToTopButton from './goToTopButton'
import { useHasScrolled } from './hooks/useHasScrolled'
import CookieConsent from './cookie-notice/cookieConsent'

// if (typeof window !== 'undefined') {
//     // Make scroll behavior of internal links smooth
//     // eslint-disable-next-line global-require
//     require('smooth-scroll')('a[href*="#"]')
// }

const Layout = ({ children, pageContext }) => {
    let pageStyle = pageContext.pageStyle
    if (typeof pageStyle === 'undefined') {
        pageStyle = 'white'
    }

    const {
        site: {
            siteMetadata: { title },
        },
    } = useStaticQuery(graphql`
        query LayoutQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const scroll = useHasScrolled(1500)
    const consentScroll = useHasScrolled(50)
    return (
        <div
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                overflow: 'hidden',
                variant: 'layout.main.' + pageStyle,
            }}
            id='start'
        >
            <Header pageStyle={pageStyle} />
            <main>{children}</main>
            {typeof pageStyle !== 'undefined' && <Footer siteTitle={title} pageStyle={pageStyle} />}
            <GoToTopButton visible={scroll} />
            <CookieConsent visible={consentScroll} />
        </div>
    )
}

export default Layout
