/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
// import parse from 'html-react-parser'

const ServicesBlock = () => {
    const data = useStaticQuery(graphql`
        {
            allWpService {
                edges {
                    node {
                        id
                        uri
                        title
                        slug
                        excerpt
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
                            Everything you need to get your brand out on the
                            world-wide web.
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
                        // py={5}
                        pr={4}
                        sx={{
                            flex: [null, null, 3],
                            width: ['100%', null],
                        }}
                    >
                        {data.allWpService.edges.map(({ node }) => (
                            <Link
                                key={node.slug}
                                to={node.uri}
                                title={node.title}
                                sx={{ color: 'black', textDecoration: 'none' }}
                            >
                                <div
                                    key={node.id}
                                    sx={{
                                        maxWidth: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        px: 2,
                                        minHeight: ['4rem', '4rem', '7rem'],
                                        borderBottom: '0.01rem solid black',
                                        transition: 'background 500ms ease-in',
                                        '&:hover': {
                                            backgroundColor: 'yellow',
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
                                    {/* {parse(node.excerpt)} */}
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
