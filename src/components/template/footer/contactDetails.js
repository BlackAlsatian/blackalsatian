/** @jsxImportSource theme-ui */
import WhatsApp from '../../icons/whatsappIcon'
import LazyLoad from 'react-lazyload'
import Phone from '../../icons/phoneIcon'
import Home from '../../icons/homeIcon'
import PlaceholderLoader from '../../placeholderLoader'

const ContactDetails = ({ textcolor }) => {
    return (
        <div sx={{ flex: [null, null, 1], p: [null, null, 4] }}>
            <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <div sx={{ p: 2 }}>
                    <a
                        href='https://wa.me/27605036601?text=Hi,%20I%20was%20just%20browsing%20your%20website%20and...'
                        title='WhatsApp Us'
                        target='_blank'
                        rel='noreferrer noopener nofollow'
                    >
                        <LazyLoad height='100' offset={100} debounce={1000} once fallback={<PlaceholderLoader />}>
                            <WhatsApp color={textcolor} width={28} height={28} />
                        </LazyLoad>
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
                        WhatsApp
                    </a>{' '}
                    (office hours)
                </div>
            </div>
            <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <div sx={{ p: 2 }}>
                    <LazyLoad height='100' offset={100} debounce={1000} once fallback={<PlaceholderLoader />}>
                        <Phone color={textcolor} width={28} height={28} />
                    </LazyLoad>
                </div>
                <div sx={{ p: 2 }}>
                    <a
                        href='tel:+27 87 821 7172'
                        title='Click to call'
                        sx={{
                            color: 'inherit',
                            pt: 0,
                            mt: 0,
                        }}
                    >
                        087 821 7172
                    </a>
                </div>
            </div>
            <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <div sx={{ p: 2 }}>
                    <LazyLoad height='100' offset={100} debounce={1000} once fallback={<PlaceholderLoader />}>
                        <Home color={textcolor} width={28} height={28} />
                    </LazyLoad>
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
        </div>
    )
}

export default ContactDetails
