/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
// import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import navLinks from './navLinks'

export default function Nav({ color, handleMenuClick }) {
    return (
        <Flex as='nav'>
            {navLinks.map(({ name, url, id }) => (
                <AniLink
                    swipe
                    duration={0.35}
                    direction='left'
                    color={'color'}
                    // bg={color}
                    key={id}
                    to={url}
                    sx={{ color: `${color}` }}
                    onClick={handleMenuClick}
                >
                    {name}
                </AniLink>
            ))}
        </Flex>
    )
}
