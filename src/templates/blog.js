/** @jsxImportSource theme-ui */
/* eslint-disable react/prop-types */
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { useContext, useLayoutEffect } from 'react'
import { Box, Container, Heading } from 'theme-ui'
import { PageStyleContext } from '../components/pageStyleProvider'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import PagesNav from '../components/pagesNav'
import SEO from '../components/seo'
import GridTile from '../components/template/elements/gridTile'
import PageHeader from '../components/template/pageHeader'

const BlogIndex = ({ data, pageContext: { nextPagePath, previousPagePath, pageNumber }, location: { pathname } }) => {
    const { setPageStyle } = useContext(PageStyleContext)
    // console.log(pathname)
    const pageStyle = 'white'

    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle, setPageStyle])

    const posts = data.allWpPost.nodes

    const pageTitle = data.site.siteMetadata.blog.title

    const content = data.site.siteMetadata.blog.intro

    if (!posts.length) {
        return (
            <Layout>
                <p>No blog posts found.</p>
            </Layout>
        )
    }

    return (
        <Layout>
            {pathname === '/blog/' && <PageHeader title={pageTitle} intro={content} headerStyle={pageStyle} />}
            <Box
                as='section'
                sx={{
                    display: 'block',
                    alignItems: 'normal',
                    minHeight: 'initial',
                    variant: 'sections.pageHeaders.' + pageStyle,
                }}
            >
                {pathname !== '/blog/' && (
                    <Container
                        sx={{
                            width: '100%',
                            px: 3,
                            mt: pathname !== '/blog/' ? 6 : null,
                        }}
                    >
                        <Heading
                            as='h1'
                            sx={{
                                // lineHeight: 'tight',
                                fontSize: 4,
                                // fontWeight: 'bold',
                                mt: 7,
                                mb: 6,
                                // display: 'block',
                                width: '65%',
                                animation: 'fadeBlockIn 400ms ease-in both',
                                animationDelay: '500ms',
                            }}
                        >
                            {'Web Development & Digital Trends From Around The Web: Page ' + pageNumber}
                        </Heading>
                    </Container>
                )}

                <Container
                    sx={{
                        width: '100%',
                        columnCount: [1, 2, 3],
                        columnGap: 4,
                        counterReset: 'item-counter',
                        px: 3,
                        pb: 5,
                        mt: pathname !== '/blog/' ? 5 : null,
                    }}
                >
                    {posts.map((post) => {
                        {
                            /* const title = post.title
                        const excerpt = post.excerpt
                        const featuredImage = {
                            fluid: post.featuredImage?.node?.tile?.childImageSharp?.gatsbyImageData,
                            alt: post.featuredImage?.node?.altText || ``,
                        } */
                        }
                        return (
                            <Link
                                // paintDrip
                                // duration={0.5}
                                bg='white'
                                color='white'
                                to={post.uri}
                                key={post.uri}
                                title={post.title}
                                style={{
                                    display: 'inline-block',
                                }}
                            >
                                <GridTile linkNode={post} headerType='h2' />
                            </Link>
                        )
                    })}
                </Container>
            </Box>

            <Box
                as='section'
                sx={{
                    variant: 'sections.noypadding',
                }}
            >
                <PagesNav
                    previousPagePath={previousPagePath && previousPagePath}
                    nextPagePath={nextPagePath && nextPagePath}
                    backgroundColor='white'
                    color='black'
                    swipeColor='white'
                />
            </Box>
        </Layout>
    )
}

BlogIndex.propTypes = {
    data: PropTypes.object,
    pageContext: PropTypes.object,
    location: PropTypes.object,
}

export default BlogIndex

export const Head = ({ data, pageContext: { pageNumber }, location: { pathname } }) => {
    const browserTitle = data.site.siteMetadata.blog.browserTitle

    const posts = data.allWpPost.nodes

    const content = data.site.siteMetadata.blog.intro

    if (!posts.length) {
        return (
            <>
                <SEO title={browserTitle} description={content} url={pathname} />
                <p>No blog posts found.</p>
            </>
        )
    }

    return (
        <>
            <SEO
                title={pageNumber > 1 ? browserTitle + ' - Page ' + pageNumber : browserTitle}
                description={pageNumber > 1 ? content + ' - Page ' + pageNumber : content}
                url={pathname}
            />
        </>
    )
}

export const pageQuery = graphql`
    query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
        allWpPost(sort: { date: DESC }, limit: $postsPerPage, skip: $offset) {
            nodes {
                id
                uri
                date(formatString: "MMMM DD, YYYY")
                title
                excerpt
                ...FeaturedMediaFragment
            }
        }
        site {
            siteMetadata {
                blog {
                    title
                    browserTitle
                    intro
                }
            }
        }
    }
`
