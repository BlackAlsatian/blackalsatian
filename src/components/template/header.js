/** @jsxImportSource theme-ui */
import { useStaticQuery, graphql } from 'gatsby'
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

    // const menuStyles = ['white', 'yellow', 'altyellow']
    // const [headerStyle, setHeaderStyle] = useState('white')
    // let headerStyle = 'white'

    // if (menuStyles.includes(pageStyle)) {
    //     // setHeaderStyle('black')
    //     headerStyle = 'black'
    // }
    // console.log('PageStyle: ' + pageStyle, 'Headerstyle: ' + headerStyle)
    // useEffect(() => {
    // if (menuStyles.includes(pageStyle)) {
    //     setHeaderStyle('black')
    // }
    // switch (pageStyle) {
    //     case 'white':
    //         setHeaderStyle('black')
    //         break
    //     case 'yellow':
    //         setHeaderStyle('black')
    //         break
    //     case 'altyellow':
    //         setHeaderStyle('black')
    //         break
    //     default:
    //         setHeaderStyle('white')
    // }
    // }, [pageStyle])
    return (
        <header
            sx={{
                // variant: 'layout.header.' + headerStyle,
                variant: 'layout.header.' + pageStyle,
            }}
        >
            <Link to='/' title='Black Alsatian Web Development Company'>
                {/* <Logo color={headerStyle} /> */}
                <Logo />
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

export default Header
