/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'
import { getHeight } from '../components/helpers'

// import Bio from '../components/bio'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'

const BlogIndex = ({
    data,
    pageContext: { nextPagePath, previousPagePath },
}) => {
    const posts = data.allWpPost.nodes
    const title = 'Blog'
    const content =
        'This is an intro to say something about this blog of crazy folk.'
    console.log(posts)
    if (!posts.length) {
        return (
            <>
                <SEO title='All posts' />
                {/* <Bio /> */}
                <p>
                    No blog posts found. Add posts to your WordPress site and
                    they'll appear here!
                </p>
            </>
        )
    }

    return (
        <>
            <SEO title='All posts' />

            <div
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <PageHeader
                    title={title}
                    intro={content}
                    backgroundColor='yellow'
                    color='black'
                />
                <section>
                    <Container
                        sx={{
                            width: '100%',
                            columnCount: [1, 2, 3],
                            columnGap: 4,
                            // rowGap: 5,
                            counterReset: 'item-counter',
                            px: 3,
                            py: 5,
                        }}
                    >
                        {posts.map((post) => {
                            const title = post.title
                            const featuredImage = {
                                fluid:
                                    post.featuredImage?.node?.localFile
                                        ?.childImageSharp?.fluid,
                                alt: post.featuredImage?.node?.alt || ``,
                            }
                            return (
                                <Link
                                    to={post.uri}
                                    key={post.uri}
                                    title={post.title}
                                >
                                    <article
                                        sx={{
                                            height: getHeight(),
                                            position: 'relative',
                                            transition: 'all .25s ease 0s',
                                            breakInside: 'avoid',
                                            counterIncrement: 'item-counter',
                                            // mx: 3,
                                            mt: 4,
                                            mb: 4,
                                            '&:first-of-type': {
                                                mt: 0,
                                            },
                                            boxShadow: 'xl',
                                        }}
                                    >
                                        {featuredImage?.fluid && (
                                            <Image
                                                fluid={featuredImage.fluid}
                                                alt={featuredImage.alt}
                                                // id={node.featuredImage.node.altText}
                                                style={{
                                                    display: 'block',
                                                    position: 'relative',
                                                    height: '100%',
                                                }}
                                            />
                                        )}
                                        <div
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                width: '100%',
                                                height: '100%',
                                                px: 4,
                                                py: 5,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-end',
                                                color: 'white',
                                                backgroundColor:
                                                    'rgba(0, 0, 0, 0.8)',
                                                '&:hover': {
                                                    backgroundColor:
                                                        'rgba(0, 0, 0, 0.6)',
                                                },
                                            }}
                                        >
                                            <Heading
                                                as='h4'
                                                sx={{ fontSize: 3 }}
                                            >
                                                {parse(title)}
                                            </Heading>
                                            <small>{post.date}</small>
                                            <section itemProp='description'>
                                                {/* {parse(post.excerpt)} */}
                                            </section>
                                        </div>
                                    </article>
                                </Link>
                            )
                        })}
                    </Container>
                </section>

                <nav>
                    <ul
                        sx={{
                            display: `flex`,
                            flexWrap: `wrap`,
                            justifyContent: `space-between`,
                            listStyle: `none`,
                            p: 4,
                        }}
                    >
                        <li>
                            {previousPagePath && (
                                <>
                                    <Link
                                        to={previousPagePath}
                                        sx={{
                                            variant: 'buttons.simple',
                                            backgroundColor: 'yellow',
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Previous page
                                    </Link>
                                    <br />
                                </>
                            )}
                        </li>
                        <li>
                            {nextPagePath && (
                                <Link
                                    to={nextPagePath}
                                    sx={{
                                        variant: 'buttons.simple',
                                        backgroundColor: 'yellow',
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Next page
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
        allWpPost(
            sort: { fields: [date], order: DESC }
            limit: $postsPerPage
            skip: $offset
        ) {
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
`
