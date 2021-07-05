/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { PageStyleContext } from './pageStyleProvider'
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
    const pageStyle = useContext(PageStyleContext).pageStyle
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
                height: '100%',
                width: '100%',
            }}
            id='start'
        >
            <Header pageStyle={pageStyle} />
            <main>{children}</main>
            <Footer siteTitle='Black Alsatian' pageStyle={pageStyle} />
            <GoToTopButton visible={scroll} />
            <CookieConsent visible={consentScroll} />
        </div>
    )
}

export default Layout
