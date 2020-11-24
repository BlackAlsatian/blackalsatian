import { graphql } from 'gatsby'

export const fragments = graphql`
  fragment FeaturedMediaFragment on WpPost {
    featuredImage {
      node {
        altText
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
