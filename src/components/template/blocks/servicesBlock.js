/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import ServiceLink from '../elements/serviceLink'
import LeftColumn from '../elements/leftColumn'

const ServicesBlock = ({ services }) => {
    const serviceLinks = services.menuItems.nodes
    return (
        <section
            sx={{
                backgroundColor: 'offWhite',
                color: 'black',
                width: '100%',
                py: 6,
                minHeight: '100vh',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
            }}
            id='services'
        >
            <Container px={1}>
                <Flex
                    sx={{
                        flexDirection: ['column', 'column', 'row'],
                    }}
                >
                    <LeftColumn
                        heading='Everything you need to get your brand out on the world-wide web.'
                        title='Web Services'
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
                </Flex>
            </Container>
        </section>
    )
}

export default ServicesBlock
