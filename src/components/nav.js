/** @jsxImportSource theme-ui */

import { Flex } from 'theme-ui'
import { Link } from 'gatsby'
import parse from 'html-react-parser'

const Nav = ({ color, navLinks }) => {
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
                                    opacity: 0.9,
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

export default Nav
