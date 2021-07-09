/** @jsxImportSource theme-ui */
import Facebook from '../../icons/facebookIcon'
import Twitter from '../../icons/twitterIcon'
import Instagram from '../../icons/instagramIcon'
import LinkedIn from '../../icons/linkedinIcon'
import WhatsApp from '../../icons/whatsappIcon'

const SocialIcons = ({ textcolor }) => {
    return (
        <ul
            sx={{
                listStyleType: 'none',
                display: 'flex',
                m: 0,
                p: 0,
            }}
        >
            <li sx={{ display: 'inline-block', padding: 2 }}>
                <a
                    href='https://www.facebook.com/blackalsatian/'
                    title='Follow Us on Facebook'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <Facebook color={textcolor} width={36} height={36} />
                </a>
            </li>
            <li sx={{ display: 'inline-block', padding: 2 }}>
                <a
                    href='https://instagram.com/theblackalsatian/'
                    title='Follow Us on Instagram'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <Instagram color={textcolor} width={36} height={36} />
                </a>
            </li>
            <li sx={{ display: 'inline-block', padding: 2 }}>
                <a
                    href='https://twitter.com/blackalsatian/'
                    title='Follow Us on Twitter'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <Twitter color={textcolor} width={36} height={36} />
                </a>
            </li>
            <li sx={{ display: 'inline-block', padding: 2 }}>
                <a
                    href='https://linkedin.com/company/blackalsatian/'
                    title='Follow Us on LinkedIn'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <LinkedIn color={textcolor} width={36} height={36} />
                </a>
            </li>
            <li sx={{ display: 'inline-block', paddingTop: 2, paddingRight: 0, paddingBottom: 2, paddingLeft: 2 }}>
                <a
                    href='https://wa.me/27605036601?text=Hi,%20I%20was%20just%20browsing%20your%20website%20and...'
                    title='WhatsApp Us'
                    target='_blank'
                    rel='noreferrer noopener nofollow'
                >
                    <WhatsApp color={textcolor} width={36} height={36} />
                </a>
            </li>
        </ul>
    )
}

export default SocialIcons
