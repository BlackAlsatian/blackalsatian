/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import MasonryGrid from '../elements/masonryGrid'

const LatestPostsBlock = () => {
    const data = useStaticQuery(graphql`
        {
            allWpPost(limit: 6, filter: { status: { eq: "publish" } }) {
                nodes {
                    id
                    uri
                    title
                    excerpt
                    ...FeaturedMediaFragment
                }
            }
        }
    `)
    const dataNodes = data.allWpPost
    const heading = 'Latest From The Blogosphere'
    const viewAllLink = '/blog/'
    return <MasonryGrid dataNodes={dataNodes} heading={heading} viewAllLink={viewAllLink} />
}

export default LatestPostsBlock
