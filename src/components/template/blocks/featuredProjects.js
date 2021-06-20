/** @jsxImportSource theme-ui */

import { useStaticQuery, graphql } from 'gatsby'
import MasonryGrid from '../elements/masonryGrid'

const FeaturedProjectsBlock = () => {
    const portfolio = useStaticQuery(graphql`
        query PortfolioQuery {
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
    const dataNodes = portfolio.allWpPortfolio.nodes
    const heading = 'Featured Projects'
    const viewAllLink = '/portfolio/'
    return <MasonryGrid dataNodes={dataNodes} heading={heading} viewAllLink={viewAllLink} />
}

export default FeaturedProjectsBlock
