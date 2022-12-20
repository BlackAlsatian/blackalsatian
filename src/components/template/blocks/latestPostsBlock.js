import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import MasonryGrid from '../elements/masonryGrid'

const LatestPostsBlock = () => {
    const latestPosts = useStaticQuery(graphql`
        query LatestPostsQuery {
            allWpPost(limit: 6, filter: { status: { eq: "publish" } }, sort: { date: DESC }) {
                nodes {
                    id
                    uri
                    date(formatString: "MMMM DD, YYYY")
                    title
                    excerpt
                    ...FeaturedMediaFragment
                }
            }
        }
    `)
    const dataNodes = latestPosts.allWpPost.nodes
    const heading = 'Latest From The Blogosphere'
    const viewAllLink = '/blog/'
    return (
        <MasonryGrid
            dataNodes={dataNodes}
            heading={heading}
            viewAllLink={viewAllLink}
            headerType='h4'
            background='white'
        />
    )
}

export default LatestPostsBlock
