/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import parse from 'html-react-parser'

export default function Nav({ color, navLinks }) {
    return (
        <Flex
            as='nav'
            sx={{
                ml: 'auto',
                display: ['none', 'none', 'flex'],
            }}
        >
            {navLinks.map(
                (item) =>
                    item.label !== 'Home' && (
                        <Link
                            to={item.url}
                            key={item.id}
                            sx={{
                                color: `${color}`,
                                '&:hover, &:focus, &.active': {
                                    color: `${color}`,
                                    opacity: 0.7,
                                },
                                cursor: 'pointer',
                                fontSize: 1,
                                fontWeight: 'extrabold',
                                textDecoration: 'none',
                                px: 3,
                                '&:last-child': {
                                    pr: 0,
                                },
                            }}
                            title={parse(item.label)}
                        >
                            {parse(item.label)}
                        </Link>
                    ),
            )}
        </Flex>
    )
}
