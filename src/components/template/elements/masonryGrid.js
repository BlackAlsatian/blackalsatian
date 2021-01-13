/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import MasonryTileLink from './masonryTileLink'
import MasonryGridViewAllLink from './masonryGridViewAllLink'
import { randomID } from '../../helpers'

const MasonryGrid = ({ dataNodes, heading, viewAllLink }) => {
    return (
        <section
            sx={{
                width: '100%',
                minHeight: '100vh',
                my: 6,
                zIndex: 20,
            }}
        >
            <div
                sx={{
                    width: '100%',
                    pb: 6,
                }}
            >
                <Heading as='h3' sx={{ ml: [4, 4, 5], fontSize: 5, fontWeight: 'light' }}>
                    {heading}
                </Heading>
            </div>
            <div
                sx={{
                    width: '100%',
                    columnCount: [1, 2, 3],
                    columnGap: 4,
                    counterReset: 'item-counter',
                    px: 3,
                }}
            >
                {dataNodes.nodes.map((node) => (
                    <MasonryTileLink key={randomID()} node={node} />
                ))}
            </div>
            <div
                sx={{
                    width: '100%',
                    pt: 4,
                    // pb: 6,
                    backgroundColor: 'transparent',
                    textAlign: 'center',
                }}
            >
                <MasonryGridViewAllLink url={viewAllLink} />
            </div>
        </section>
    )
}

export default MasonryGrid