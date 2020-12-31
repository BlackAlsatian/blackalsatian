/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import navLinks from './navLinks'

export default function Nav({ isOpen, color, handleMenuClick }) {
    return (
        <Flex
            as='nav'
            sx={{
                ml: 'auto',
                display: ['none', 'none', 'flex'],
            }}
        >
            {navLinks.map(({ name, url, id }) => (
                <AniLink
                    swipe
                    duration={0.35}
                    direction='left'
                    color={color}
                    // bg={color}
                    key={id}
                    to={url}
                    sx={{
                        color: `${color}`,
                        '&:hover, &:focus, &.active': {
                            color: 'offWhite',
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
                    onClick={handleMenuClick}
                >
                    {name}
                </AniLink>
            ))}
        </Flex>
    )
}
