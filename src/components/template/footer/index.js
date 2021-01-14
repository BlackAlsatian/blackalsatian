/** @jsx jsx */
import { jsx, Flex, Heading } from 'theme-ui'
import { Link } from 'gatsby'
import ContactDetails from './contactDetails'
import Logo from '../../logo'
import ServiceNav from '../../serviceNav'
import EnquiryForm from '../../forms/enquiryForm'
import SocialIcons from './socialIcons'
import { handleErrorColor } from '../../helpers'

const Footer = ({ siteTitle, path }) => {
    // console.log(path)
    let bgcolor = 'black'
    let textcolor = 'white'
    if (path.includes('blog') || path.includes('/404/')) {
        bgcolor = 'white'
        textcolor = 'black'
    }
    if (path.includes('contact')) {
        bgcolor = 'yellow'
        textcolor = 'black'
    }
    if (path.includes('terms-of-use') || path.includes('privacy-policy')) {
        bgcolor = 'red'
        textcolor = 'white'
    }
    const errorColor = handleErrorColor(bgcolor)
    return (
        <footer
            sx={{
                bg: `${bgcolor}`,
                width: '100%',
                fontSize: 0,
                fontWeight: 'medium',
                color: `${textcolor}`,
                variant: 'footer',
            }}
        >
            <section>
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
                    <ContactDetails textcolor={textcolor} />
                    <div sx={{ flex: [null, null, 1], p: 4 }}>
                        <Heading as='h4' sx={{ pb: 3, fontSize: 2 }}>
                            Get
                        </Heading>
                        <ServiceNav color={textcolor} />
                    </div>
                    <div
                        sx={{
                            flex: [null, null, 2],
                            p: 4,
                            width: [null, null, '100%'],
                        }}
                    >
                        <EnquiryForm
                            formStyle='inputs.underline'
                            buttonBackground={textcolor}
                            btnColor={bgcolor}
                            errorColor={errorColor}
                        />
                    </div>
                </Flex>
            </section>
            <section
                sx={{
                    display: 'flex',
                    alignItems: [null, null, 'flex-end'],
                    justifyContent: 'center',
                    flexDirection: ['column', 'column', 'row'],
                    p: 4,
                    width: '100%',
                }}
            >
                <div sx={{ flex: 1, mx: 1, my: [3, 3, null] }}>
                    <Logo color={textcolor} />
                    <br />
                    Port Elizabeth, South Africa
                </div>

                <div
                    sx={{
                        flex: 2,
                        mx: 1,
                        my: [3, 3, null],
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
                        mx: 1,
                        my: [3, 3, null],
                        textAlign: [null, null, 'right'],
                    }}
                >
                    <SocialIcons textcolor={textcolor} />

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
