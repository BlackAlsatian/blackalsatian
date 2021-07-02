/** @jsxImportSource theme-ui */
import { useStaticQuery, graphql } from 'gatsby'
import { useContext } from 'react'
import { OffCanvasMenuContext } from '../offCanvasMenuProvider'
import { Link } from 'gatsby'
import MenuIcon from '../menuIcon'
import OffCanvas from './offCanvasNav'
import Logo from '../logo'
import Nav from '../nav'

const Header = ({ pageStyle }) => {
    const data = useStaticQuery(graphql`
        {
            wpMenu(slug: { eq: "primary-menu" }) {
                ...WpMenuItems
            }
        }
    `)
    const navLinks = data.wpMenu.menuItems.nodes

    const { handleBurgerMenuClick, isOpen } = useContext(OffCanvasMenuContext)

    const menuStyles = ['white', 'yellow', 'altyellow']

    let headerStyle = 'white'

    if (menuStyles.includes(pageStyle)) {
        // setHeaderStyle('black')
        headerStyle = 'black'
    }
    // console.log('PageStyle: ' + pageStyle, 'Headerstyle: ' + headerStyle)
    // useEffect(() => {
    //     if (menuStyles.includes(pageStyle)) {
    //         setHeaderStyle('black')
    //     }
    //     // switch (pageStyle) {
    //     //     case 'white':
    //     //         setHeaderStyle('black')
    //     //         break
    //     //     case 'yellow':
    //     //         setHeaderStyle('black')
    //     //         break
    //     //     case 'altyellow':
    //     //         setHeaderStyle('black')
    //     //         break
    //     //     default:
    //     //         setHeaderStyle('white')
    //     // }
    // }, [pageStyle])
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
