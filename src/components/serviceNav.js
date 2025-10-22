/** @jsxImportSource theme-ui */
import React from 'react'
import { Flex } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import safeParse from '../utils/safeParse'
import { removeTags } from './helpers'

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
                    title={removeTags(item.label)}
                    sx={{ pb: 3, fontWeight: 'normal' }}
                    onClick={handleMenuClick}
                >
                    {safeParse(item.label)}
                </Link>
            ))}
        </Flex>
    )
}

export default React.memo(ServiceNav)
