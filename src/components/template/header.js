/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import MenuIcon from '../menuIcon'
import OffCanvas from './offCanvasNav'
import Logo from '../logo'
import Nav from '../nav'
// import { useSpring } from 'react-spring'

const Header = ({ color }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleBurgerMenuClick = () => {
        setIsOpen(!isOpen)
    }

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
            <AniLink fade duration={1} to='/'>
                <Logo color={color} />
            </AniLink>
            <Nav color={color} />
            <OffCanvas isOpen={isOpen} handleMenuClick={handleBurgerMenuClick} />
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
