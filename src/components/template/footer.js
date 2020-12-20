/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import Facebook from '../icons/facebookIcon'
import Twitter from '../icons/twitterIcon'
import Instagram from '../icons/instagramIcon'
import LinkedIn from '../icons/linkedinIcon'
import WhatsApp from '../icons/whatsappIcon'
import Phone from '../icons/phoneIcon'
import Home from '../icons/homeIcon'
import Fax from '../icons/faxIcon'
// import Email from '../icons/emailIcon'
import EnquiryForm from '../forms/enquiryForm'

const Footer = ({ siteTitle }) => {
    return (
        <footer
            sx={{
                bg: 'black',
                width: '100%',
                fontSize: 0,
                fontWeight: 'medium',
                color: 'white',
                variant: 'footer',
            }}
        >
            <section>
                <Flex
                    p={4}
                    sx={{
                        alignItems: 'flex-start',
                        justifyContent: 'space-around',
                        py: 4,
                        px: 6,
                    }}
                >
                    <div sx={{ flex: 1, p: 4 }}>
                        <div
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                p: 2,
                            }}
                        >
                            <a
                                href='https://facebook.com/blackalsatian'
                                title='Follow Us on Facebook'
                                target='_blank'
                                rel='noreferrer noopener'
                            >
                                <Facebook
                                    color='white'
                                    width={28}
                                    height={28}
                                />
                            </a>
                            <a
                                href='twitter.com/blackalsatian'
                                title='Follow Us on Twitter'
                                target='_blank'
                                rel='noreferrer noopener'
                            >
                                <Twitter color='white' width={28} height={28} />
                            </a>
                            <a
                                href='instagram.com/theblackalsatian'
                                title='Follow Us on Instagram'
                                target='_blank'
                                rel='noreferrer noopener'
                            >
                                <Instagram
                                    color='white'
                                    width={28}
                                    height={28}
                                />
                            </a>
                            <a
                                href='linkedin.com/company/blackalsatian'
                                title='Follow Us on LinkedIn'
                                target='_blank'
                                rel='noreferrer noopener'
                            >
                                <LinkedIn
                                    color='white'
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
                                    color='white'
                                    width={28}
                                    height={28}
                                />
                            </a>
                            {/* <a href='' title='Email Us' target='_blank'>
                                <Email color='white' width={28} height={28} />
                            </a> */}
                        </div>
                        <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <div sx={{ p: 2 }}>
                                <Home color='white' width={28} height={28} />
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
                        <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <div sx={{ p: 2 }}>
                                <Phone color='white' width={28} height={28} />
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
                                <Fax color='white' width={28} height={28} />
                            </div>
                            <div sx={{ p: 2 }}>
                                <p sx={{ pt: 0, mt: 0 }}>+27 86 688 3504</p>
                            </div>
                        </div>
                    </div>
                    <div sx={{ flex: 1, p: 4 }}>
                        List of services or something or other. What about
                        latest blog posts?
                    </div>
                    <div sx={{ flex: 2, p: 2 }}>
                        <EnquiryForm />
                    </div>
                </Flex>
            </section>
            <section
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 4,
                }}
            >
                <Link to='/privacy-policy/' sx={{ color: 'inherit' }}>
                    Privacy Policy
                </Link>
                <div sx={{ mx: 1 }} />
                <Link to='/terms-of-use/' sx={{ color: 'inherit' }}>
                    Terms of Use
                </Link>
                <div sx={{ mx: 1 }} /> &copy; 2003 - {new Date().getFullYear()}{' '}
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
            </section>
        </footer>
    )
}

export default Footer
