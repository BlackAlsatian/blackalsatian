/** @jsxImportSource theme-ui */
import { Container, Heading, Flex, Box, Badge, Paragraph } from 'theme-ui'
import { useLayoutEffect, useContext } from 'react'
import { PageStyleContext } from '../components/pageStyleProvider'
import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage, getSrc } from 'gatsby-plugin-image'

import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import Bio from '../components/bio'
import PagesNav from '../components/pagesNav'
import PageHeroHeader from '../components/template/containers/pageHeroHeader'
import PageHeaderContainer from '../components/template/containers/pageHeaderContainer'
import { removeTags } from '../components/helpers'

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

    const postExcerpt = removeTags(post.excerpt)
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
                <PageHeroHeader containerVariant='default'>
                    <GatsbyImage
                        image={featuredImage.fluid}
                        alt={featuredImage.alt || post.title}
                        fadeIn='false'
                        loading='eager'
                        objectPosition='50% 50%'
                        backgroundColor='#111827'
                        sx={{
                            position: 'relative',
                            width: '100%',
                            minHeight: '100vh',
                            filter: 'brightness(40%)',
                        }}
                    />
                    <PageHeaderContainer>
                        <Heading
                            as='h1'
                            sx={{
                                // fontSize: [6, 7, 7, 9],
                                fontSize: [6, 8, 10],
                                animation: 'fadeBlockIn 400ms ease-in both',
                                animationDelay: '300ms',
                            }}
                        >
                            {parse(post.title)}
                        </Heading>
                        <Paragraph sx={{ variant: 'paragraph.pageHeading' }}>{parse(postExcerpt)}</Paragraph>
                    </PageHeaderContainer>
                </PageHeroHeader>
            ) : (
                <PageHeader title={parse(post.title)} intro={parse(postExcerpt)} headerStyle={pageStyle} />
            )}

            {!!post.content && (
                <section
                    sx={{
                        py: 5,
                        minHeight: 'initial',
                        variant: 'main.' + pageStyle,
                    }}
                >
                    <Container px={1}>
                        <Flex
                            sx={{
                                flexDirection: ['column', 'column', 'row'],
                            }}
                        >
                            <Box
                                p={[3, 3, 2, 5]}
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
                                        fontWeight: ['bold', 'bold', 'thin', 'thin'],
                                        lineHeight: 1,
                                        mb: 4,
                                        letterSpacing: 'tighter',
                                        animation: 'fadeBlockIn 400ms ease-in both',
                                        animationDelay: '300ms',
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
                                py={[3, 3, 2, 5]}
                                px={[3, 3, 5]}
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
                    swipeColor='#fff'
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
