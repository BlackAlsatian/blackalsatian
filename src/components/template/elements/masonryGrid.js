import MasonryGridWrapper from '../containers/masonryGridWrapper'
import MasonryTileLink from './masonryTileLink'

const MasonryGrid = ({ dataNodes, heading, viewAllLink, headerType, background }) => {
    return (
        <MasonryGridWrapper heading={heading} viewAllLink={viewAllLink} background={background}>
            {dataNodes.map((node) => (
                <MasonryTileLink key={node.id} node={node} headerType={headerType} />
            ))}
        </MasonryGridWrapper>
    )
}

export default MasonryGrid
