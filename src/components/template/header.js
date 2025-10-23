/** @jsxImportSource theme-ui */
/* eslint-disable react/no-unknown-property */
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { lazy, Suspense } from 'react'
import MenuIcon from '../menuIcon'
import Nav from '../nav'
import OffCanvas from './offCanvasNav'

// Code-split the logo so header/footer share a single small chunk instead of duplicating it per-slice
const Logo = lazy(() => import(/* webpackChunkName: "ba-logo" */ '../logo'))

const Header = ({ pageStyle }) => {
    const data = useStaticQuery(graphql`
        {
            wpMenu(slug: { eq: "primary-menu" }) {
                ...WpMenuItems
            }
        }
    `)
    const navLinks = data.wpMenu.menuItems.nodes

    return (
        <header
            sx={{
                variant: 'header.' + pageStyle,
            }}
        >
            <Link to='/' title='Black Alsatian Web Development Company'>
                <Suspense fallback={<span aria-label='Black Alsatian' />}> 
                    <Logo />
                </Suspense>
            </Link>
            {/* <Nav navLinks={navLinks} color={headerStyle} /> */}
            <Nav navLinks={navLinks} />
            <OffCanvas navLinks={navLinks} />
            <div
                sx={{
                    display: ['flex', 'flex', 'none'],
                    variant: 'divs.hamburger',
                }}
            >
                <MenuIcon />
                <span>Open main menu</span>
            </div>
        </header>
    )
}

Header.propTypes = {
    pageStyle: PropTypes.string,
}

export default Header
