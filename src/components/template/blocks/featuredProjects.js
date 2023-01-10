import { graphql, useStaticQuery } from 'gatsby'
// import React from 'react'
import LazyLoad from 'react-lazyload'
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
    return (
        <LazyLoad height='100%' offset={100} once>
            <MasonryGrid
                dataNodes={dataNodes}
                heading={heading}
                viewAllLink={viewAllLink}
                headerType='p'
                background='white'
            />
        </LazyLoad>
    )
}

export default FeaturedProjectsBlock
