/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
// import parse from 'html-react-parser'
import { getHeight } from '../../helpers'

const LatestPostsBlock = () => {
    const data = useStaticQuery(graphql`
        {
            allWpPost(limit: 6, filter: { status: { eq: "publish" } }) {
                edges {
                    node {
                        id
                        uri
                        title
                        excerpt
                        featuredImage {
                            node {
                                altText
                                localFile {
                                    childImageSharp {
                                        fluid(maxWidth: 600, quality: 100) {
                                            ...GatsbyImageSharpFluid_tracedSVG
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    return (
        <section
            sx={{
                width: '100%',
                minHeight: '100vh',
                my: 6,
                zIndex: 20,
            }}
        >
            <div
                sx={{
                    width: '100%',
                    pb: 6,
                }}
            >
                <Heading
                    as='h3'
                    sx={{ ml: 5, fontSize: 5, fontWeight: 'light' }}
                >
                    Latest From The Blogosphere
                </Heading>
            </div>
            <div
                sx={{
                    width: '100%',
                    columnCount: [1, 2, 3],
                    columnGap: 0,
                    counterReset: 'item-counter',
                }}
            >
                {data.allWpPost.edges.map(({ node }) => (
                    <Link to={node.uri} key={node.id} title={node.title}>
                        <div
                            sx={{
                                height: getHeight(),
                                position: 'relative',
                                transition: 'all .25s ease 0s',
                                breakInside: 'avoid',
                                counterIncrement: 'item-counter',
                                m: 3,
                                '&:first-of-type': {
                                    mt: 0,
                                },
                                boxShadow: 'xl',
                            }}
                        >
                            <Img
                                fluid={
                                    node.featuredImage.node.localFile
                                        .childImageSharp.fluid
                                }
                                alt={node.featuredImage.alt}
                                id={node.featuredImage.node.altText}
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    height: '100%',
                                }}
                            />
                            <div
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: '100%',
                                    height: '100%',
                                    px: 4,
                                    py: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    color: 'white',
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    },
                                }}
                            >
                                <Heading as='h4' sx={{ fontSize: 3 }}>
                                    {node.title}
                                </Heading>
                                {/* {parse(node.excerpt)} */}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div
                sx={{
                    width: '100%',
                    pt: 4,
                    pb: 6,
                    backgroundColor: 'transparent',
                    textAlign: 'center',
                }}
            >
                <Link
                    to='/blog/'
                    title='Web company blog'
                    sx={{
                        variant: 'buttons.simple',
                        backgroundColor: 'black',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    View All...
                </Link>
            </div>
        </section>
    )
}

export default LatestPostsBlock
