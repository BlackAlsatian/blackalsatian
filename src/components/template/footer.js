/** @jsx jsx */
import { jsx, Flex, Heading } from 'theme-ui'
import { Link } from 'gatsby'
import Facebook from '../icons/facebookIcon'
import Twitter from '../icons/twitterIcon'
import Instagram from '../icons/instagramIcon'
import LinkedIn from '../icons/linkedinIcon'
import WhatsApp from '../icons/whatsappIcon'
import Phone from '../icons/phoneIcon'
import Home from '../icons/homeIcon'
// import Fax from '../icons/faxIcon'
// import Email from '../icons/emailIcon'
import Logo from '../logo'
import ServiceNav from '../serviceNav'
import EnquiryForm from '../forms/enquiryForm'

const Footer = ({ siteTitle, path }) => {
    // console.log(path)
    let bgcolor = 'black'
    let textcolor = 'white'
    if (path.includes('blog')) {
        bgcolor = 'white'
        textcolor = 'black'
    }
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
                        px: [4, 4, 6, 7],
                        pt: [5, 5, 6],
                        pb: [0, 0, 4],
                    }}
                >
                    <div sx={{ flex: [null, null, 1], p: [null, null, 4] }}>
                        <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <div sx={{ p: 2 }}>
                                <a
                                    href='https://wa.me/27605036601?text=Hi,%20I%20was%20just%20browsing%20your%20website%20and...'
                                    title='WhatsApp Us'
                                    target='_blank'
                                    rel='noreferrer noopener nofollow'
                                >
                                    <WhatsApp
                                        color={textcolor}
                                        width={28}
                                        height={28}
                                    />
                                </a>
                            </div>
                            <div sx={{ p: 2 }}>
                                <a
                                    href='https://wa.me/27605036601?text=Hi,%20I%20was%20just%20browsing%20your%20website%20and...'
                                    title='WhatsApp Us'
                                    target='_blank'
                                    rel='noreferrer noopener nofollow'
                                    sx={{
                                        color: `${textcolor}`,
                                    }}
                                >
                                    WhatsApp Business during office hours
                                </a>
                            </div>
                        </div>
                        <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <div sx={{ p: 2 }}>
                                <Phone
                                    color={textcolor}
                                    width={28}
                                    height={28}
                                />
                            </div>
                            <div sx={{ p: 2 }}>
                                <a
                                    href='tel:+27 83 276 8640'
                                    title='Click to call'
                                    sx={{
                                        color: 'inherit',
                                        pt: 0,
                                        mt: 0,
                                    }}
                                >
                                    +27 83 276 8640
                                </a>
                            </div>
                        </div>
                        <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <div sx={{ p: 2 }}>
                                <Home
                                    color={textcolor}
                                    width={28}
                                    height={28}
                                />
                            </div>
                            <div sx={{ p: 2 }}>
                                <p sx={{ pt: 0, mt: 0 }}>
                                    PO Box 211126
                                    <br />
                                    The Fig Tree
                                    <br />
                                    6033
                                </p>
                            </div>
                        </div>
                        {/* <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <div sx={{ p: 2 }}>
                                <Fax color='white' width={28} height={28} />
                            </div>
                            <div sx={{ p: 2 }}>
                                <p sx={{ pt: 0, mt: 0 }}>+27 86 688 3504</p>
                            </div>
                        </div> */}
                    </div>
                    <div sx={{ flex: [null, null, 1], p: 4 }}>
                        <Heading as='h4' sx={{ pb: 3 }}>
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
                            buttonBackground={bgcolor}
                            btnColor={textcolor}
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
                    <div
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '60%',
                            ml: [null, null, 'auto'],
                        }}
                    >
                        <a
                            href='https://www.facebook.com/blackalsatian/'
                            title='Follow Us on Facebook'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <Facebook
                                color={textcolor}
                                width={28}
                                height={28}
                            />
                        </a>
                        <a
                            href='https://instagram.com/theblackalsatian/'
                            title='Follow Us on Instagram'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <Instagram
                                color={textcolor}
                                width={28}
                                height={28}
                            />
                        </a>
                        <a
                            href='https://twitter.com/blackalsatian/'
                            title='Follow Us on Twitter'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <Twitter color={textcolor} width={28} height={28} />
                        </a>
                        <a
                            href='https://linkedin.com/company/blackalsatian/'
                            title='Follow Us on LinkedIn'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <LinkedIn
                                color={textcolor}
                                width={28}
                                height={28}
                            />
                        </a>
                        <a
                            href='https://wa.me/27605036601?text=Hi,%20I%20was%20just%20browsing%20your%20website%20and...'
                            title='WhatsApp Us'
                            target='_blank'
                            rel='noreferrer noopener nofollow'
                        >
                            <WhatsApp
                                color={textcolor}
                                width={28}
                                height={28}
                            />
                        </a>
                        {/* <a href='' title='Email Us' target='_blank'>
                                <Email color='white' width={28} height={28} />
                            </a> */}
                    </div>

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
