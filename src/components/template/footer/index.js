/** @jsxImportSource theme-ui */
import { Flex, Heading } from 'theme-ui'
import LazyLoad from 'react-lazyload'
import { Link } from 'gatsby'
import ContactDetails from './contactDetails'
import Logo from '../../logo'
import ServiceNav from '../../serviceNav'
import SocialIcons from './socialIcons'
import GetForm from '../../getForm'

// const footerColors = {
//     yellow: {
//         bgcolor: 'yellow',
//         textcolor: 'black',
//     },
//     red: {
//         bgcolor: 'red',
//         textcolor: 'white',
//     },
//     white: {
//         bgcolor: 'white',
//         textcolor: 'black',
//     },
//     postwhite: {
//         bgcolor: 'white',
//         textcolor: 'black',
//     },
// }
//
// const footerStyles = ['yellow', 'red', 'white', 'postwhite']

const Footer = ({ siteTitle, pageStyle }) => {
    // const [bgcolor, setBgcolor] = useState('black')
    // const [textcolor, setTextcolor] = useState('white')
    // let bgcolor = 'black'
    // let textcolor = 'white'

    // useEffect(() => {
    // if (footerStyles.includes(pageStyle)) {
    //     // bgcolor = footerColors[pageStyle].bgcolor
    //     // textcolor = footerColors[pageStyle].textcolor
    //     setBgcolor(footerColors[pageStyle].bgcolor)
    //     setTextcolor(footerColors[pageStyle].textcolor)
    // }
    // }, [pageStyle])
    return (
        <footer
            sx={{
                variant: 'footers.' + pageStyle,
                animation: 'fadeBlockIn 400ms ease-in both',
                animationDelay: '500ms',
            }}
            id='contact'
        >
            <section sx={{ variant: 'sections.noypadding' }}>
                <Flex
                    p={4}
                    sx={{
                        alignItems: [null, null, 'flex-start'],
                        justifyContent: 'space-around',
                        flexDirection: ['column', 'column', 'column', 'row'],
                        px: [3, 3, 3, 5],
                        pt: [5, 5, 6, 6],
                        pb: [0, 0, 4, 4],
                    }}
                >
                    <ContactDetails />
                    <div sx={{ flex: [null, null, 1], p: 4 }}>
                        <Heading as='h4' sx={{ mb: 4, fontSize: 2 }}>
                            Web Development Services
                        </Heading>
                        <ServiceNav />
                    </div>
                    <div
                        sx={{
                            flex: [null, null, 2],
                            p: 4,
                            width: [null, null, '100%'],
                        }}
                    >
                        <LazyLoad height='100%' offset={200} once>
                            <GetForm
                                option='enquiry'
                                buttonName='Fetch!'
                                // backgroundColor={bgcolor}
                                // buttonBackground={textcolor}
                                formStyle='inputs.underline'
                                footerError={'footer.' + pageStyle}
                            />
                        </LazyLoad>
                    </div>
                </Flex>
            </section>
            <section
                sx={{
                    alignItems: [null, null, 'flex-end'],
                    flexDirection: ['column', 'column', 'row'],
                    variant: 'sections.footerRowTwo',
                }}
            >
                <div sx={{ flex: 1, mx: 1, my: [2, 2, null] }}>
                    <Link
                        sx={{
                            textDecoration: 'none',
                            outline: 0,
                            '&:hover, &:focus, &:active': {
                                textDecoration: 'none',
                                outline: 0,
                            },
                        }}
                        to='/'
                        title='Web development & online marketing by Black Alsatian'
                    >
                        <Logo />
                    </Link>
                    <br />
                    Port Elizabeth, South Africa
                </div>

                <div
                    sx={{
                        flex: 2,
                        mx: 1,
                        my: [2, 2, null],
                        textAlign: [null, null, 'center'],
                    }}
                >
                    {' '}
                    &copy; 2003 - {new Date().getFullYear()}{' '}
                    <Link
                        to='/'
                        sx={{
                            ml: 1,
                            color: 'inherit',
                        }}
                    >
                        {siteTitle}
                    </Link>
                    , All Rights Reserved.
                </div>
                <div
                    sx={{
                        flex: 1,
                        mx: [null, null, 1],
                        my: [2, 2, null],
                        textAlign: ['left', 'left', 'right'],
                    }}
                >
                    <SocialIcons />
                    <div>
                        <Link to='/terms-of-use/' sx={{ color: 'inherit' }}>
                            Terms of Use
                        </Link>
                        {` `}|{` `}
                        <Link to='/privacy-policy/' sx={{ color: 'inherit' }}>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
