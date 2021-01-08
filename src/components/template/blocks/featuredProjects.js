/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
// import parse from 'html-react-parser'
import { getHeight } from '../../helpers'

const FeaturedProjectsBlock = () => {
    const data = useStaticQuery(graphql`
        {
            allWpPortfolio(filter: { projectFeatured: { in: "1" } }) {
                edges {
                    node {
                        id
                        uri
                        title
                        excerpt
                        projectFeatured
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
                <Heading as='h3' sx={{ ml: [4, 4, 5], fontSize: 5, fontWeight: 'light' }}>
                    Featured Projects
                </Heading>
            </div>
            <div
                sx={{
                    width: '100%',
                    columnCount: [1, 2, 3],
                    columnGap: 4,
                    // rowGap: 5,
                    counterReset: 'item-counter',
                    px: 3,
                }}
            >
                {data.allWpPortfolio.edges.map(({ node }) => (
                    <Link to={node.uri} key={node.id} title={node.title}>
                        <div
                            sx={{
                                height: getHeight(),
                                position: 'relative',
                                transition: 'all .25s ease 0s',
                                breakInside: 'avoid',
                                counterIncrement: 'item-counter',
                                // mx: 3,
                                mt: 4,
                                mb: 4,
                                '&:first-of-type': {
                                    mt: 0,
                                },
                                boxShadow: 'xl',
                            }}
                        >
                            <Img
                                fluid={node.featuredImage.node.localFile.childImageSharp.fluid}
                                alt={node.featuredImage.node.altText}
                                // id={node.featuredImage.node.altText}
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
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
                    pt: 5,
                    backgroundColor: 'transparent',
                    textAlign: 'center',
                }}
            >
                <Link
                    to='/portfolio/'
                    title='Our web and marketing portfolio'
                    sx={{
                        variant: 'buttons.simple',
                        backgroundColor: 'black',
                        color: 'white',
                        textDecoration: 'none',
                        boxShadow: 'xl',
                        '&:hover': {
                            boxShadow: 'none',
                        },
                    }}
                >
                    View All...
                </Link>
            </div>
        </section>
        // <section
        //   sx={{
        //     display: 'grid',
        //     gridGap: 3,
        //     gridTemplateColumns: `repeat(auto-fit, minmax(30%, 1fr))`,
        //   }}
        // >
        //   {data.allWpPortfolio.edges.map(({ node }) => (
        //     <div key={node.id} sx={{ minWidth: '30%' }}>
        //       <Img
        //         fluid={node.featuredImage.node.localFile.childImageSharp.fluid}
        //         id={node.featuredImage.node.altText}
        //       />
        //       <h4>{node.title}</h4>
        //       {parse(node.excerpt)}
        //     </div>
        //   ))}
        // </section>
    )
}

export default FeaturedProjectsBlock
