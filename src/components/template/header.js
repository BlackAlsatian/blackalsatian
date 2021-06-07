/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect, useContext } from 'react'
import { OffCanvasMenuContext } from '../offCanvasMenuProvider'
import { Link } from 'gatsby'
// import { handleColor } from '../../components/helpers'
import MenuIcon from '../menuIcon'
import OffCanvas from './offCanvasNav'
import Logo from '../logo'
import Nav from '../nav'

const Header = ({ pathName, menuItems }) => {
    const navLinks = menuItems
    const { handleBurgerMenuClick } = useContext(OffCanvasMenuContext)
    const [headerStyle, setHeaderStyle] = useState('white')
    useEffect(() => {
        if (
            (pathName.includes('/blog') && pathName.length <= 10) ||
            pathName.includes('/contact') ||
            pathName.includes('/services') ||
            typeof pathName === 'undefined'
        ) {
            setHeaderStyle('black')
        } else {
            setHeaderStyle('white')
        }
    }, [pathName])
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
                variant: 'layout.header.' + headerStyle,
            }}
        >
            <Link to='/' title='Black Alsatian Web Development Company'>
                <Logo color={headerStyle} />
            </Link>
            <Nav navLinks={navLinks} color={headerStyle} />
            <OffCanvas navLinks={navLinks} />
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
                    color={headerStyle}
                    handleBurgerMenuClick={() => {
                        handleBurgerMenuClick()
                    }}
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
