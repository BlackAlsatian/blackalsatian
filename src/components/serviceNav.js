/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default function ServiceNav({ color, handleMenuClick }) {
    const data = useStaticQuery(graphql`
        {
            wpMenu(slug: { eq: "services-menu" }) {
                ...WpMenuItems
            }
        }
    `)
    const serviceLinks = data.wpMenu.menuItems.nodes
    return (
        <Flex as='nav' sx={{ flexDirection: 'column' }}>
            {serviceLinks.map((item) => (
                <AniLink
                    swipe
                    // duration={0.7}
                    direction='down'
                    // top='entry'
                    entryOffset={80}
                    color='black'
                    key={item.id}
                    to={item.url}
                    sx={{ color: `${color}`, pb: 3 }}
                    onClick={handleMenuClick}
                >
                    {item.label}
                </AniLink>
            ))}
        </Flex>
    )
}
