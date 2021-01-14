/** @jsx jsx */
import { jsx } from 'theme-ui'
import WhatsApp from '../../icons/whatsappIcon'
import Phone from '../../icons/phoneIcon'
import Home from '../../icons/homeIcon'
// import Fax from '../icons/faxIcon'

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
                        <WhatsApp color={textcolor} width={28} height={28} />
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
                        WhatsApp Business (office hours)
                    </a>
                </div>
            </div>
            <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <div sx={{ p: 2 }}>
                    <Phone color={textcolor} width={28} height={28} />
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
                    <Home color={textcolor} width={28} height={28} />
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
    )
}

export default ContactDetails
