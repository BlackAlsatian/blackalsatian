/** @jsxImportSource theme-ui */
import { useInView } from 'react-intersection-observer'
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
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px 0px 0px',
    })
    const dataNodes = portfolio.allWpPortfolio.nodes
    const heading = 'Featured Projects'
    const viewAllLink = '/portfolio/'
    return (
        <div
            sx={{
                width: '100%',
                height: '100%',
            }}
            ref={ref}
        >
            {inView && <MasonryGrid dataNodes={dataNodes} heading={heading} viewAllLink={viewAllLink} headerType='p' />}
        </div>
    )
}

export default FeaturedProjectsBlock
