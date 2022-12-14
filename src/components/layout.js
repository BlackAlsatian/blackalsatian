/** @jsxImportSource theme-ui */
import { useContext } from 'react'
// import { useScrollRestoration } from 'gatsby'
import PropTypes from 'prop-types'
import { Flex } from 'theme-ui'
import CookieConsent from './cookie-notice/cookieConsent'
import GoToTopButton from './goToTopButton'
import { useHasScrolled } from './hooks/useHasScrolled'
import { PageStyleContext } from './pageStyleProvider'
import Footer from './template/footer'
import Header from './template/header'

const Layout = ({ children }) => {
    const pageStyle = useContext(PageStyleContext).pageStyle
    const scroll = useHasScrolled(1500)
    const consentScroll = useHasScrolled(50)
    // const doScrollRestoration = useScrollRestoration('page-scroll-restorer')

    return (
        <Flex
            sx={{
                flexDirection: 'column',
                minHeight: '100vh',
                overflow: 'hidden',
                variant: 'main.' + pageStyle,
            }}
            id='start'
            // {...doScrollRestoration}
        >
            <Header pageStyle={pageStyle} />
            <main>{children}</main>
            <Footer siteTitle='Black Alsatian' pageStyle={pageStyle} />
            <GoToTopButton visible={scroll} />
            <CookieConsent visible={consentScroll} />
        </Flex>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
