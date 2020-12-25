/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
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
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                // justifyContent: 'space-around',
                width: '100%',
                minheight: '50vh',
                maxWidth: '100vw',
            }}
        >
            <Container>
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
                                px: 4,
                                minHeight: ['4rem', '4rem', '7rem'],
                                borderTop: '0.01rem solid black',
                                transition: 'transform 300ms',
                                '&:hover': {
                                    backgroundColor: 'yellow',
                                    transform: 'translateX(100%)',
                                },
                                // '&:first-of-type': {
                                //     borderTop: '0rem',
                                // },
                            }}
                        >
                            <Heading as='h3'>{node.title}</Heading>
                            {/* {parse(node.excerpt)} */}
                        </div>
                    </Link>
                ))}
            </Container>
        </section>
    )
}

export default ServicesBlock
