/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default function Nav({ color, handleMenuClick }) {
    const data = useStaticQuery(graphql`
        {
            wpMenu(slug: { eq: "primary-menu" }) {
                ...WpMenuItems
            }
        }
    `)
    const navLinks = data.wpMenu.menuItems.nodes
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
                        <AniLink
                            swipe
                            duration={0.35}
                            direction='left'
                            color={color}
                            key={item.id}
                            to={item.url}
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
                            onClick={handleMenuClick}
                        >
                            {item.label}
                        </AniLink>
                    ),
            )}
        </Flex>
    )
}
