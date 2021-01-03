/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'

const ServicesBlock = () => {
    const data = useStaticQuery(graphql`
        {
            allWpService {
                edges {
                    node {
                        id
                        uri
                        title
                    }
                }
            }
        }
    `)
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
                    <Box
                        p={[5, 5, 3, 6]}
                        sx={{
                            textAlign: ['left', 'left', 'right'],
                            flex: [null, null, 1],
                            width: ['100%', null],
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            borderRight: [0, 0, '1px solid black'],
                        }}
                    >
                        <Heading
                            sx={{
                                fontSize: [4, 3, 4, 5],
                                fontWeight: 'thin',
                                lineHeight: 1,
                                mb: 4,
                                letterSpacing: 'tighter',
                            }}
                        >
                            Everything you need to get your brand out on the world-wide web.
                        </Heading>
                        <Heading
                            as='h4'
                            sx={{
                                textTransform: 'uppercase',
                                fontSize: 0,
                                mt: [4, 4, 0],
                                ml: ['auto', 'auto', null],
                            }}
                        >
                            Web Services
                        </Heading>
                    </Box>
                    <Box
                        pr={4}
                        sx={{
                            flex: [null, null, 3],
                            width: ['100%', null],
                        }}
                    >
                        {data.allWpService.edges.map(({ node }) => (
                            <Link
                                key={node.id}
                                to={node.uri}
                                title={node.title}
                                sx={{ color: 'black', textDecoration: 'none' }}
                            >
                                <div
                                    sx={{
                                        maxWidth: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        px: 2,
                                        minHeight: ['4rem', '4rem', '7rem'],
                                        borderBottom: '0.01rem solid black',
                                        background: 'offWhite',
                                        transition: 'background 1000ms ease-in-out, padding 600ms ease-out',

                                        '&:hover': {
                                            backgroundColor: 'yellow',
                                            padding: '0 20px',
                                        },
                                    }}
                                >
                                    <Heading
                                        as='h3'
                                        sx={{
                                            fontSize: 5,
                                            fontWeight: 'medium',
                                        }}
                                    >
                                        {node.title}
                                    </Heading>
                                </div>
                            </Link>
                        ))}
                    </Box>
                </Flex>
            </Container>
        </section>
    )
}

export default ServicesBlock
