/** @jsx jsx */
import { jsx } from 'theme-ui'
import MasonryGrid from '../elements/masonryGrid'

const LatestPostsBlock = ({ latestPosts }) => {
    const dataNodes = latestPosts
    const heading = 'Latest From The Blogosphere'
    const viewAllLink = '/blog/'
    return <MasonryGrid dataNodes={dataNodes} heading={heading} viewAllLink={viewAllLink} />
}

export default LatestPostsBlock
