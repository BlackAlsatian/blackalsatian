/** @jsxImportSource theme-ui */
import { useContext } from 'react'
// import { Slice } from 'gatsby'
import PropTypes from 'prop-types'
import { Flex } from 'theme-ui'
import CookieConsent from '../components/cookie-notice/cookieConsent'
import GoToTopButton from '../components/goToTopButton'
import Footer from '../components/template/footer'
import Header from '../components/template/header'
import { useHasScrolled } from './hooks/useHasScrolled'
import { PageStyleContext } from './pageStyleProvider'

const Layout = ({ children }) => {
    const pageStyle = useContext(PageStyleContext).pageStyle
    const scroll = useHasScrolled(1500)
    const consentScroll = useHasScrolled(50)
    return (
        <Flex
            sx={{
                flexDirection: 'column',
                minHeight: '100vh',
                overflow: 'hidden',
                variant: 'main.' + pageStyle,
            }}
            id='start'
        >
            {/* <Slice alias='header' pageStyle={pageStyle} /> */}
            <Header pageStyle={pageStyle} />
            <main>{children}</main>
            {/* <Slice alias='footer' siteTitle='Black Alsatian' pageStyle={pageStyle} /> */}
            <Footer pageStyle={pageStyle} siteTitle='Black Alsatian' />
            {/* <Slice alias='go-to-top' visible={scroll} /> */}
            <GoToTopButton visible={scroll} />
            {/* <Slice alias='cookie-consent' visible={consentScroll} /> */}
            <CookieConsent visible={consentScroll} />
        </Flex>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
