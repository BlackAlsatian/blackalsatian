/** @jsxImportSource theme-ui */
import { useStaticQuery, graphql } from 'gatsby'
import { Box } from 'theme-ui'
import ServiceLink from '../elements/serviceLink'
import LeftColumn from '../elements/leftColumn'
import ColumnSection from '../containers/columnSection'

const ServicesBlock = () => {
    const services = useStaticQuery(graphql`
        query ServicesQuery {
            wpMenu(slug: { eq: "services-menu" }) {
                ...WpMenuItems
            }
        }
    `)
    const serviceLinks = services.wpMenu.menuItems.nodes
    return (
        <ColumnSection sectionVariant='sections.servicesBlock' id='services'>
            <LeftColumn
                heading='Everything you need to get your brand out on the world-wide web.'
                title='"Web Design & Digital Marketing Services"'
            />
            <Box
                pr={[null, null, 4]}
                sx={{
                    flex: [null, null, 3],
                    width: ['100%', null],
                }}
            >
                {serviceLinks.map((item) => (
                    <ServiceLink key={item.id} item={item} />
                ))}
            </Box>
        </ColumnSection>
    )
}

export default ServicesBlock
