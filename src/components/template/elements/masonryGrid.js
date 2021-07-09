/** @jsxImportSource theme-ui */
import { Heading } from 'theme-ui'
import MasonryTileLink from './masonryTileLink'
import MasonryGridViewAllLink from './masonryGridViewAllLink'

const MasonryGrid = ({ dataNodes, heading, viewAllLink, headerType }) => {
    return (
        <section
            sx={{
                px: [3, 3, 6],
                variant: 'sections.masonry',
            }}
        >
            <div>
                <Heading as='h3' sx={{ ml: [4, 4, 0] }}>
                    {heading}
                </Heading>
            </div>
            <div
                sx={{
                    columnCount: [1, 2, 3],
                }}
            >
                {dataNodes.map((node) => (
                    <MasonryTileLink key={node.id} node={node} headerType={headerType} />
                ))}
            </div>
            {viewAllLink && (
                <div>
                    <MasonryGridViewAllLink url={viewAllLink} />
                </div>
            )}
        </section>
    )
}

export default MasonryGrid
