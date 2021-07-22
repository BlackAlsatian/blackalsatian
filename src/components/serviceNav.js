/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import parse from 'html-react-parser'

const ServiceNav = ({ handleMenuClick }) => {
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
                <Link
                    key={item.id}
                    to={item.url}
                    title={parse(item.label)}
                    sx={{ pb: 3, fontWeight: 'normal' }}
                    onClick={handleMenuClick}
                >
                    {parse(item.label)}
                </Link>
            ))}
        </Flex>
    )
}

export default ServiceNav
