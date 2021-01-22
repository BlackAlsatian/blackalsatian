/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
// import { handleColor } from '../../components/helpers'
import MenuIcon from '../menuIcon'
import OffCanvas from './offCanvasNav'
import Logo from '../logo'
import Nav from '../nav'

const Header = ({ pathName }) => {
    const data = useStaticQuery(graphql`
        {
            wpMenu(slug: { eq: "primary-menu" }) {
                ...WpMenuItems
            }
        }
    `)
    const navLinks = data.wpMenu.menuItems.nodes
    // const darkNavPages = ['yellow', 'altyellow', 'white']
    // const navcolor = darkNavPages.includes(pageStyle) ? 'black' : 'white'
    const [isOpen, setIsOpen] = useState(false)
    const handleBurgerMenuClick = () => {
        setIsOpen(!isOpen)
    }
    // let headerStyle = 'white'
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
    // if (
    //     (pathName.includes('/blog') && pathName.length <= 10) ||
    //     pathName.includes('/contact') ||
    //     pathName.includes('/services') ||
    //     typeof pathName === 'undefined'
    // ) {
    //     headerStyle = 'black'
    // }
    console.log(pathName)
    console.log(headerStyle)
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
                <MenuIcon handleBurgerMenuClick={handleBurgerMenuClick} isOpen={isOpen} color={headerStyle} />
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
