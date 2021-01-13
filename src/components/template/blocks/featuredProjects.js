/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import MasonryGrid from '../elements/masonryGrid'

const FeaturedProjectsBlock = () => {
    const data = useStaticQuery(graphql`
        {
            allWpPortfolio(filter: { projectFeatured: { in: "1" } }) {
                nodes {
                    id
                    uri
                    title
                    excerpt
                    projectFeatured
                    ...PortfolioFeaturedMediaFragment
                }
            }
        }
    `)
    const dataNodes = data.allWpPortfolio
    const heading = 'Featured Projects'
    const viewAllLink = '/portfolio/'
    return <MasonryGrid dataNodes={dataNodes} heading={heading} viewAllLink={viewAllLink} />
}

export default FeaturedProjectsBlock
