/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { useState } from 'react'
import MenuIcon from '../menuIcon'
import FullMenu from './fullMenu'
import Logo from '../logo'
import Nav from '../nav'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleBurgerMenuClick = () => {
        setIsOpen(!isOpen)
    }

    console.log(isOpen)
    return (
        <header
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: 'screenWidth',
                top: 0,
                left: 0,
                right: 0,
                variant: 'layout.header.closedMenu',
            }}
        >
            <Link to='/'>
                <Logo />
            </Link>
            <Nav />
            <FullMenu isOpen={isOpen} />
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
        </header>
    )
}

export default Header
