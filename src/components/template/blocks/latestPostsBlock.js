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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexShrink: '3',
        height: '100%',
        minheight: '50vh',
      }}
    >
      {data.allWpPost.edges.map(({ node }) => (
        <div key={node.id} sx={{ minWidth: '30%' }}>
          <Img
            fluid={node.featuredImage.node.localFile.childImageSharp.fluid}
            id={node.featuredImage.node.altText}
          />
          <h4>{node.title}</h4>
          {parse(node.excerpt)}
        </div>
      ))}
    </section>
  )
}

export default LatestPostsBlock
