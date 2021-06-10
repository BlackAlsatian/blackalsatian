/** @jsxImportSource theme-ui */

import MasonryGrid from '../elements/masonryGrid'

const FeaturedProjectsBlock = ({ portfolio }) => {
    const dataNodes = portfolio
    const heading = 'Featured Projects'
    const viewAllLink = '/portfolio/'
    return <MasonryGrid dataNodes={dataNodes} heading={heading} viewAllLink={viewAllLink} />
}

export default FeaturedProjectsBlock
