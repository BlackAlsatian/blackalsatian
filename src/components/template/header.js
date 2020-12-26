/** @jsx jsx */
import { jsx } from 'theme-ui'
// import { Link } from 'gatsby'
import { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import MenuIcon from '../menuIcon'
import FullMenu from './fullMenu'
import Logo from '../logo'
import Nav from '../nav'
// import { useThemeUI } from 'theme-ui'

const Header = ({ color }) => {
    // console.log(color)
    const [isOpen, setIsOpen] = useState(false)

    const handleBurgerMenuClick = () => {
        setIsOpen(!isOpen)
    }
    // console.log(isOpen)
    return (
        <header
            sx={{
                display: 'flex',
                alignItems: 'center',
                // width: 'screenWidth',
                top: 0,
                left: 0,
                right: 0,
                variant: 'layout.header.closedMenu',
            }}
        >
            {/* <AniLink
                fade
                duration={0.5}
                hex='#ebc8de'
                to='/'
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
            > */}
            <AniLink fade duration={0.5} hex='black' direction='down' to='/'>
                <Logo color={color} />
            </AniLink>
            <Nav color={color} />
            <FullMenu isOpen={isOpen} handleMenuClick={handleBurgerMenuClick} />
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
                <MenuIcon
                    handleBurgerMenuClick={handleBurgerMenuClick}
                    isOpen={isOpen}
                    color={color}
                />
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
            {/* </AniLink> */}
        </header>
    )
}

export default Header
