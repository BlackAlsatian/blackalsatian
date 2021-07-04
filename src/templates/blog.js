/** @jsxImportSource theme-ui */
import { Container, Heading } from 'theme-ui'
import { useLayoutEffect, useContext } from 'react'
import { PageStyleContext } from '../components/pageStyleProvider'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { getHeight } from '../components/helpers'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import PagesNav from '../components/pagesNav'

const BlogIndex = ({ data, pageContext: { nextPagePath, previousPagePath, pageIndex }, location: { pathname } }) => {
    const { setPageStyle } = useContext(PageStyleContext)

    const pageStyle = 'white'

    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle])

    const posts = data.allWpPost.nodes

    const pageTitle = data.site.siteMetadata.blog.title

    const content = data.site.siteMetadata.blog.intro

    const browserTitle = data.site.siteMetadata.blog.browserTitle

    if (!posts.length) {
        return (
            <>
                <SEO
                    title={browserTitle}
                    description={content}
                    url={pathname}
                    // featuredImage={page.featuredImage?.node?.og?.childImageSharp?.gatsbyImageData?.src}
                />
                <p>No blog posts found.</p>
            </>
        )
    }

    return (
        <>
            <SEO
                title={pageIndex > 1 ? browserTitle + ' - Page ' + pageIndex : browserTitle}
                description={pageIndex > 1 ? content + ' - Page ' + pageIndex : content}
                url={pathname}
                // featuredImage={page.featuredImage?.node?.og?.childImageSharp?.gatsbyImageData?.src}
            />
            {pathname === '/blog/' && <PageHeader title={pageTitle} intro={content} headerStyle={pageStyle} />}
            <section>
                <Container
                    sx={{
                        width: '100%',
                        columnCount: [1, 2, 3],
                        columnGap: 4,
                        counterReset: 'item-counter',
                        px: 3,
                        py: 5,
                        mt: pathname !== '/blog/' ? 6 : null,
                    }}
                >
                    {posts.map((post) => {
                        const title = post.title
                        const excerpt = post.excerpt
                        const featuredImage = {
                            fluid: post.featuredImage?.node?.tile?.childImageSharp?.gatsbyImageData,
                            alt: post.featuredImage?.node?.alt || ``,
                        }
                        return (
                            <AniLink
                                paintDrip
                                duration={0.5}
                                bg='white'
                                color='white'
                                to={post.uri}
                                key={post.uri}
                                title={post.title}
                            >
                                <article
                                    sx={{
                                        height: getHeight(),
                                        position: 'relative',
                                        breakInside: 'avoid',
                                        counterIncrement: 'item-counter',
                                        mt: 4,
                                        mb: 4,
                                        '&:first-of-type': {
                                            mt: 0,
                                        },
                                        boxShadow: 'xl',
                                    }}
                                >
                                    {featuredImage?.fluid && (
                                        <GatsbyImage
                                            image={featuredImage.fluid}
                                            alt={featuredImage.alt}
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
                                            // py: 5,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-end',
                                            color: 'white',
                                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                            transition: 'background-color 200ms ease-in',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                            },
                                        }}
                                    >
                                        <Heading as='h4' sx={{ fontSize: 3 }}>
                                            {parse(title)}
                                        </Heading>
                                        <small>{post.date}</small>
                                        {parse(excerpt)}
                                    </div>
                                </article>
                            </AniLink>
                        )
                    })}
                </Container>
            </section>

            <section>
                <PagesNav
                    previousPagePath={previousPagePath && previousPagePath}
                    nextPagePath={nextPagePath && nextPagePath}
                    backgroundColor='white'
                    color='black'
                    swipeColor='black'
                />
            </section>
        </>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
        allWpPost(sort: { fields: [date], order: DESC }, limit: $postsPerPage, skip: $offset) {
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
