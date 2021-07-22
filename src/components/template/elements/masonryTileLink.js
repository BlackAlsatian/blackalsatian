import { Link } from 'gatsby'
import GridTile from './gridTile'

const MasonryTileLink = ({ node, headerType }) => (
    <Link to={node.uri} key={node.id} title={node.title}>
        <GridTile node={node} headerType={headerType} />
    </Link>
)

export default MasonryTileLink
