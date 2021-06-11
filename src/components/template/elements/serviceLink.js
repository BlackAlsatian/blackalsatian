/** @jsxImportSource theme-ui */
import { Heading } from 'theme-ui'
import { Link } from 'gatsby'

const LinkDivStyle = {
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    px: 3,
    py: [2, 2, null],
    minHeight: ['4rem', '4rem', '7rem'],
    borderBottom: '0.01rem solid black',
    background: 'offWhite',
    transition: 'background-color 500ms ease-in',
    '&:hover': {
        backgroundColor: 'yellow',
    },
}
const ServiceLink = ({ item }) => {
    return (
        <Link key={item.id} to={item.url} title={item.label} sx={{ color: 'black', textDecoration: 'none' }}>
            <div sx={LinkDivStyle}>
                <Heading
                    as='h4'
                    sx={{
                        fontSize: 4,
                        fontWeight: 'normal',
                    }}
                >
                    {item.label}
                </Heading>
            </div>
        </Link>
    )
}
export default ServiceLink
