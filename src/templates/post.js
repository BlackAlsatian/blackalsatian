/** @jsx jsx */
import { jsx, Container, Heading, Flex, Box, Badge } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
// import Image from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import parse from 'html-react-parser'

import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import Bio from '../components/bio'
import PagesNav from '../components/pagesNav'

const BlogPostTemplate = ({ data: { previous, next, post }, pageContext }) => {
    // console.log({ pageContext })
    const pageStyle = pageContext.style
    const featuredImage = {
        fluid: post.featuredImage?.node?.main?.childImageSharp?.fluid,
        alt: post.featuredImage?.node?.alt || ``,
    }
    return (
        <>
            <SEO
                title={post.title}
                description={post.seo.metaDesc}
                featuredImage={post.featuredImage.node.og.childImageSharp.fluid.src}
                url={post.uri}
                author={post.author.node.firstName + ` ` + post.author.node.lastName}
                datePublished={post.date}
                isBlogPost
            />

            <article itemScope itemType='http://schema.org/Article'>
                <header>
                    {featuredImage?.fluid ? (
                        <BackgroundImage
                            Tag='section'
                            fluid={featuredImage.fluid}
                            backgroundColor='white'
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                backgroundAttachment: 'scroll',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '50% 50%',
                                flexDirection: 'column',
                                minHeight: '100vh',
                                color: 'white',
                                pt: ['35vh', '35vh', '45vh'],
                                zIndex: 0,
                                '&:before, &:after': {
                                    filter: 'brightness(40%)',
                                },
                            }}
                        >
                            <Container p={4}>
                                <Heading
                                    as='h1'
                                    sx={{
                                        fontSize: [6, 7, 7, 9],
                                        letterSpacing: 'tighter',
                                        textShadow: '0 0 4rem rgba(0, 0, 0, 0.5)',
                                    }}
                                    itemProp='headline'
                                >
                                    {parse(post.title)}
                                </Heading>
                                <Box sx={{ fontSize: [2, 2, 3], my: 0, textShadow: '0 0 3rem rgba(0, 0, 0, 0.5)' }}>
                                    {parse(post.excerpt)}
                                </Box>
                            </Container>
                        </BackgroundImage>
                    ) : (
                        <PageHeader title={parse(post.title)} intro={parse(post.excerpt)} headerStyle={pageStyle} />
                    )}
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
                                    p={[4, 4, 3, 6]}
                                    sx={{
                                        textAlign: ['left', 'left', 'right'],
                                        flex: [null, null, 1],
                                        width: ['100%', null],
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: ['flex-start', 'flex-start', 'flex-end'],
                                        // justifyContent: 'center',
                                        borderRight: [0, 0, '1px solid black'],
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
                                                textAlign: ['left', 'left', 'right'],
                                            }}
                                        >
                                            {post.date}
                                        </span>
                                    </p>
                                    <div
                                        sx={{
                                            py: [2, 2, 5],
                                            pl: [null, null, 5],
                                            lineHeight: 'loose',
                                        }}
                                    >
                                        {post.tags.nodes.map(({ name, id }) => (
                                            <Badge key={id} variant='primary' mx={1}>
                                                {name}
                                            </Badge>
                                        ))}
                                    </div>
                                </Box>
                                <Box
                                    py={[0, 0, 4]}
                                    px={[4, 4, 5]}
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
