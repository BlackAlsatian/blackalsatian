/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import parse from 'html-react-parser'

const FeaturedProjectsBlock = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPortfolio(filter: { projectFeatured: { in: "1" } }) {
        edges {
          node {
            id
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
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: `repeat(auto-fit, minmax(30%, 1fr))`,
      }}
    >
      {data.allWpPortfolio.edges.map(({ node }) => (
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

export default FeaturedProjectsBlock
