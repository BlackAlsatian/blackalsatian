/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'

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
                <Link key={item.id} to={item.url} sx={{ color: `${color}`, pb: 3 }} onClick={handleMenuClick}>
                    {item.label}
                </Link>
            ))}
        </Flex>
    )
}
