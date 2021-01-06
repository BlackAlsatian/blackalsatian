/** @jsx jsx */
import { jsx, Container, Heading, Flex, Box, Badge } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'

import Bio from '../components/bio'
import SEO from '../components/seo'
import PagesNav from '../components/pagesNav'

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
    const featuredImage = {
        fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
        alt: post.featuredImage?.node?.alt || ``,
    }
    return (
        <>
            <SEO
                title={post.title}
                description={post.seo.metaDesc}
                featuredImage={post.featuredImage.node.localFile.childImageSharp.fluid.src}
                url={post.uri}
                author={post.author.node.firstName + ` ` + post.author.node.lastName}
                isBlogPost
            />

            <article itemScope itemType='http://schema.org/Article'>
                <header
                    sx={{
                        position: 'relative',
                        minHeight: '100vh',
                    }}
                >
                    {/* if we have a featured image for this post let's display it */}
                    {featuredImage?.fluid && (
                        <Image
                            fluid={featuredImage.fluid}
                            alt={featuredImage.alt}
                            style={{ width: '100%', height: '100vh' }}
                        />
                    )}
                    <Container>
                        <div
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                pt: '36vh',
                                px: 4,
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                height: '100vh',
                                width: '100%',
                            }}
                        >
                            <Heading
                                as='h1'
                                sx={{
                                    fontSize: [6, 7, 7, 9],
                                    letterSpacing: 'tighter',
                                }}
                                itemProp='headline'
                            >
                                {parse(post.title)}
                            </Heading>
                            <div sx={{ fontSize: [2, 2, 3], my: 0 }}>{parse(post.excerpt)}</div>
                        </div>
                    </Container>
                </header>

                {!!post.content && (
                    <section itemProp='articleBody' sx={{ py: 5, zIndex: 20 }}>
                        <Container px={1}>
                            <Flex
                                sx={{
                                    flexDirection: ['column', 'column', 'row'],
                                }}
                            >
                                <Box
                                    pr={5}
                                    py={4}
                                    sx={{
                                        textAlign: ['left', 'left', 'right'],
                                        flex: [null, null, 1],
                                        width: ['100%', null],
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                        // justifyContent: 'flex-end',
                                        borderRight: [0, '1px solid black'],
                                    }}
                                >
                                    <Heading
                                        as='h3'
                                        sx={{
                                            fontSize: [4, 3, 4, 5],
                                            fontWeight: 'thin',
                                            lineHeight: 1,
                                            mb: 4,
                                            letterSpacing: 'tighter',
                                        }}
                                    >
                                        {parse(post.title)}
                                    </Heading>
                                    <Bio author={post.author.node} />
                                    <p>
                                        <span
                                            sx={{
                                                color: 'muted',
                                                textAlign: 'right',
                                            }}
                                        >
                                            {post.date}
                                        </span>
                                    </p>
                                    <div
                                        sx={{
                                            py: 5,
                                            pl: 5,
                                            lineHeight: 'loose',
                                        }}
                                    >
                                        {post.tags.nodes.map(({ name, id }) => (
                                            <Badge key={id} variant='primary'>
                                                {name}
                                            </Badge>
                                        ))}
                                    </div>
                                </Box>
                                <Box
                                    py={4}
                                    px={5}
                                    sx={{
                                        flex: [null, null, 3],
                                        width: ['100%', null],
                                        variant: 'layout',
                                    }}
                                >
                                    {parse(post.content)}
                                </Box>
                            </Flex>
                        </Container>
                    </section>
                )}

                <footer>{/* <Bio /> */}</footer>
            </article>
            <section>
                <PagesNav
                    previousPagePath={previous && previous.uri}
                    nextPagePath={next && next.uri}
                    previousName={previous && parse(previous.title)}
                    nextName={next && parse(next.title)}
                    backgroundColor='black'
                    color='white'
                    swipeColor='white'
                />
            </section>
        </>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostById(
        # these variables are passed in via createPage.pageContext in gatsby-node.js
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        # selecting the current post by id
        post: wpPost(id: { eq: $id }) {
            id
            excerpt
            content
            title
            uri
            date(formatString: "MMMM DD, YYYY")
            seo {
                metaDesc
            }
            author {
                node {
                    id
                    firstName
                    lastName
                    description
                    avatar {
                        url
                    }
                }
            }
            tags {
                nodes {
                    id
                    slug
                    uri
                    name
                }
            }
            ...FeaturedMediaFragment
        }

        # this gets us the previous post by id (if it exists)
        previous: wpPost(id: { eq: $previousPostId }) {
            uri
            title
        }

        # this gets us the next post by id (if it exists)
        next: wpPost(id: { eq: $nextPostId }) {
            uri
            title
        }
    }
`
