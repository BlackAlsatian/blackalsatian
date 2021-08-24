/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui'
import { useContext } from 'react'
import { PageStyleContext } from './pageStyleProvider'
import Header from './template/header'
import Footer from './template/footer'
import GoToTopButton from './goToTopButton'
import { useHasScrolled } from './hooks/useHasScrolled'
import CookieConsent from './cookie-notice/cookieConsent'

const Layout = ({ children }) => {
    const pageStyle = useContext(PageStyleContext).pageStyle
    const scroll = useHasScrolled(1500)
    const consentScroll = useHasScrolled(50)
    console.log(
        "%c Black Alsatian's web developer, https://bjorn.africa. JavaScript FTW!",
        'background: #000000; padding:3px; font-size: 11px; color: #ffffff',
    )
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
            <Header pageStyle={pageStyle} />
            <main>{children}</main>
            <Footer siteTitle='Black Alsatian' pageStyle={pageStyle} />
            <GoToTopButton visible={scroll} />
            <CookieConsent visible={consentScroll} />
        </Flex>
    )
}

export default Layout
