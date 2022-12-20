/* eslint-disable react/prop-types */
/** @jsxImportSource theme-ui */
import { Link } from 'gatsby'
import GridTile from './gridTile'

const MasonryTileLink = ({ node, headerType }) => (
    <Link to={node.uri} key={node.id} title={node.title} sx={{ display: 'inline-block' }}>
        <GridTile linkNode={node} headerType={headerType} />
    </Link>
)

export default MasonryTileLink
