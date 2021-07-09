/** @jsxImportSource theme-ui */
import { Heading } from 'theme-ui'
import MasonryTileLink from './masonryTileLink'
import MasonryGridViewAllLink from './masonryGridViewAllLink'

const MasonryGrid = ({ dataNodes, heading, viewAllLink, headerType }) => {
    return (
        <section
            sx={{
                px: [1, 1, 6],
                backgroundColor: 'white',
                variant: 'sections.masonryWrapper',
            }}
        >
            <div
                sx={{
                    variant: 'sections.masonryWrapper.header',
                }}
            >
                <Heading as='h3' sx={{ mx: [4, 4, 0] }}>
                    {heading}
                </Heading>
            </div>
            <div sx={{ columnCount: [1, 2, 3], variant: 'sections.masonryWrapper.grid' }}>
                {dataNodes.map((node) => (
                    <MasonryTileLink key={node.id} node={node} headerType={headerType} />
                ))}
            </div>
            {viewAllLink && (
                <div
                    sx={{
                        variant: 'sections.masonryWrapper.footer',
                    }}
                >
                    <MasonryGridViewAllLink url={viewAllLink} />
                </div>
            )}
        </section>
    )
}

export default MasonryGrid
