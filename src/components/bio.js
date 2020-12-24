/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
/** @jsx jsx */
import { jsx } from 'theme-ui'
// import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import { Avatar } from 'theme-ui'

const Bio = ({ author }) => {
    // console.log(author)
    // const name = author
    // const { author } = useStaticQuery(graphql`
    //     query BioQuery($user: String) {
    //         # if there was more than one user, this would need to be filtered
    //         # author: wpUser(name: { eq: $user }) {
    //         author: wpUser(name: { eq: $user }) {
    //             firstName
    //             lastName
    //             twitter: name
    //             description
    //             avatar {
    //                 url
    //             }
    //         }
    //     }
    // `)

    const avatarUrl = author?.avatar?.url

    return (
        <div className='bio'>
            {avatarUrl && (
                <Avatar
                    alt={author?.firstName || ``}
                    className='bio-avatar'
                    src={avatarUrl}
                    width={60}
                    height={60}
                />
            )}
            {author?.firstName && (
                <p>
                    Written by{' '}
                    <strong>
                        {author.firstName} {author.lastName}
                    </strong>
                    <br />
                    <br />
                    <span sx={{ color: 'muted', fontSize: 0 }}>
                        {author?.description || null}
                    </span>
                    {` `}
                    {/* {author?.twitter && (
            <a href={`https://twitter.com/${author?.twitter || ``}`}>
              You should follow them on Twitter
            </a>
          )} */}
                </p>
            )}
        </div>
    )
}

export default Bio
