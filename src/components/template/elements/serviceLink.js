/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { Link } from 'gatsby'

const LinkDivStyle = {
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    px: 2,
    py: [3, 3, null],
    minHeight: ['4rem', '4rem', '7rem'],
    borderBottom: '0.01rem solid black',
    background: 'offWhite',
    // transition: 'background 1000ms ease-in-out, padding 600ms ease-out',
    // transition: 'padding 600ms ease-out',
    transition: 'background-color 500ms ease-in',
    '&:hover': {
        backgroundColor: 'yellow',
        // padding: '0 20px',
    },
}
const ServiceLink = ({ item }) => {
    return (
        <Link key={item.id} to={item.url} title={item.label} sx={{ color: 'black', textDecoration: 'none' }}>
            <div sx={LinkDivStyle}>
                <Heading
                    as='h3'
                    sx={{
                        fontSize: 5,
                        fontWeight: 'medium',
                    }}
                >
                    {item.label}
                </Heading>
            </div>
        </Link>
    )
}
export default ServiceLink
