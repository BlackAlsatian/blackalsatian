/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import parse from 'html-react-parser'

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
                display: 'grid',
                gridGap: 4,
                gridTemplateColumns: `repeat(auto-fit, minmax(400px, 1fr))`,
            }}
        >
            {data.allWpPost.edges.map(({ node }) => (
                <div key={node.id}>
                    <Img
                        fluid={
                            node.featuredImage.node.localFile.childImageSharp
                                .fluid
                        }
                        alt={node.featuredImage.alt}
                        id={node.featuredImage.node.altText}
                        style={{ width: '100%' }}
                    />
                    <div
                        sx={{
                            position: 'absolute',
                            // top: 0,
                            // left: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        }}
                    >
                        <h4>{node.title}</h4>
                        {parse(node.excerpt)}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default LatestPostsBlock
