/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { PageStyleContext } from './pageStyleProvider'
// import { useStaticQuery, graphql } from 'gatsby'
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

const Layout = ({ children }) => {
    // let pageStyle = pageContext.pageStyle
    const pageStyle = useContext(PageStyleContext).pageStyle
    // const pageStyle = styleOfPage.pageStyle
    // if (typeof pageStyle === 'undefined') {
    //     pageStyle = 'white'
    // }
    // console.log(pageStyle)
    // const {
    //     site: {
    //         siteMetadata: { title },
    //     },
    // } = useStaticQuery(graphql`
    //     query LayoutQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)
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
            {/* {typeof pageStyle !== 'undefined' && <Footer siteTitle='Black Alsatian' pageStyle={pageStyle} />} */}
            <Footer siteTitle='Black Alsatian' pageStyle={pageStyle} />
            <GoToTopButton visible={scroll} />
            <CookieConsent visible={consentScroll} />
        </div>
    )
}

export default Layout
