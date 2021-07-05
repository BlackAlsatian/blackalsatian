/** @jsxImportSource theme-ui */
import { Link } from 'gatsby'

const MasonryGridViewAllLink = ({ url }) => {
    return (
        <Link
            to={url}
            title='Web company blog'
            sx={{
                variant: 'buttons.simple',
                backgroundColor: 'black',
                color: 'white !important',
                textDecoration: 'none',
                boxShadow: 'xl',
                '&:hover': {
                    boxShadow: 'none',
                },
            }}
        >
            View All...
        </Link>
    )
}

export default MasonryGridViewAllLink
