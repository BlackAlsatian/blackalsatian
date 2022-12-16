/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { Slice } from 'gatsby'
import PropTypes from 'prop-types'
import { Flex } from 'theme-ui'
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
            <Slice alias='header' pageStyle={pageStyle} />
            <main>{children}</main>
            <Slice alias='footer' siteTitle='Black Alsatian' pageStyle={pageStyle} />
            <Slice alias='go-to-top' visible={scroll} />
            <Slice alias='cookie-consent' visible={consentScroll} />
        </Flex>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
