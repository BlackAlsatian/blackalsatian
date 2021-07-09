/** @jsxImportSource theme-ui */
import { Container, Heading, Flex, Box, Badge } from 'theme-ui'
import { useLayoutEffect, useContext } from 'react'
import { PageStyleContext } from '../components/pageStyleProvider'
import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage, getSrc } from 'gatsby-plugin-image'

import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import Bio from '../components/bio'
import PagesNav from '../components/pagesNav'

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
    // console.log({ pageContext })
    // const pageStyle = pageContext.style
    const { setPageStyle } = useContext(PageStyleContext)
    const pageStyle = 'postwhite'
    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle])
    const featuredImage = {
        fluid: post.featuredImage?.node?.main?.childImageSharp?.gatsbyImageData,
        alt: post.featuredImage?.node?.altText || ``,
    }
    const seoImgSrc = getSrc(post.featuredImage.node.og)
    return (
        <>
            <SEO
                title={post.title}
                description={post.seo.metaDesc}
                featuredImage={seoImgSrc && seoImgSrc}
                url={post.uri}
                author={post.author.node.firstName + ` ` + post.author.node.lastName}
                datePublished={post.dateGmt}
                dateModified={post.modifiedGmt}
                isBlogPost
            />

            {/* <section itemScope itemType='http://schema.org/Article'> */}
            {featuredImage?.fluid ? (
                <Flex
                    as='section'
                    sx={{
                        position: 'relative',
                        color: 'white',
                        py: 0,
                    }}
                >
                    <GatsbyImage
                        image={featuredImage.fluid}
                        alt={featuredImage.alt || post.title}
                        fadeIn='false'
                        loading='eager'
                        objectPosition='50% 50%'
                        backgroundColor='white'
                        sx={{
                            position: 'relative',
                            width: '100%',
                            minHeight: '100vh',
                            filter: 'brightness(40%)',
                        }}
                    />
                    <Container p={4} sx={{ position: 'absolute', pt: ['35vh', '35vh', '45vh'], minHeight: '100vh' }}>
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
                </Flex>
            ) : (
                <PageHeader title={parse(post.title)} intro={parse(post.excerpt)} headerStyle={pageStyle} />
            )}

            {!!post.content && (
                <section sx={{ py: 5 }}>
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
                                }}
                            >
                                {parse(post.content)}
                            </Box>
                        </Flex>
                    </Container>
                </section>
            )}
            {/* </section> */}
            <section sx={{ variant: 'sections.noypadding' }}>
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
            dateGmt
            modifiedGmt
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
