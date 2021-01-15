/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { handleColor } from '../../components/helpers'
import MenuIcon from '../menuIcon'
import OffCanvas from './offCanvasNav'
import Logo from '../logo'
import Nav from '../nav'

const Header = () => {
    const path = window.location.pathname
    const data = useStaticQuery(graphql`
        {
            wpMenu(slug: { eq: "primary-menu" }) {
                ...WpMenuItems
            }
        }
    `)
    const navLinks = data.wpMenu.menuItems.nodes

    const [isOpen, setIsOpen] = useState(false)

    const handleBurgerMenuClick = () => {
        setIsOpen(!isOpen)
    }
    const color = handleColor(path)
    return (
        <header
            sx={{
                display: 'flex',
                alignItems: 'center',
                top: 0,
                left: 0,
                right: 0,
                p: [3, 3],
                position: 'absolute',
                zIndex: 10,
                variant: 'layout.header.closedMenu',
            }}
        >
            <Link to='/' title='Black Alsatian Web Development Company'>
                <Logo color={color} />
            </Link>
            <Nav color={color} navLinks={navLinks} />
            <OffCanvas isOpen={isOpen} handleMenuClick={handleBurgerMenuClick} navLinks={navLinks} />
            <div
                sx={{
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    alignItems: 'center',
                    display: ['flex', 'flex', 'none'],
                    zIndex: 30,
                }}
            >
                <MenuIcon handleBurgerMenuClick={handleBurgerMenuClick} isOpen={isOpen} color={color} />
                <span
                    sx={{
                        position: 'fixed',
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: 'hidden',
                        clip: 'rect(0, 0, 0, 0)',
                        whiteSpace: 'nowrap',
                        borderWidth: 0,
                    }}
                >
                    Open main menu
                </span>
            </div>
        </header>
    )
}

export default Header
