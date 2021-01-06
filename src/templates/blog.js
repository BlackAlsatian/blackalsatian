/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { getHeight } from '../components/helpers'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import PagesNav from '../components/pagesNav'

const BlogIndex = ({ data, pageContext: { nextPagePath, previousPagePath }, location: { pathname } }) => {
    const posts = data.allWpPost.nodes
    const pageTitle = 'Blog'
    const content = 'This is an intro to say something about this blog of crazy folk.'
    const browserTitle = 'A Web Company Blog'
    if (!posts.length) {
        return (
            <>
                <SEO
                    title={browserTitle}
                    description={content}
                    url={pathname}
                    // featuredImage={page.featuredImage.node.localFile.childImageSharp.fluid.src}
                />
                <p>No blog posts found.</p>
            </>
        )
    }

    return (
        <>
            <SEO
                title={browserTitle}
                description={content}
                url={pathname}
                // featuredImage={page.featuredImage.node.localFile.childImageSharp.fluid.src}
            />
            {pathname === '/blog/' && (
                <PageHeader title={pageTitle} intro={content} backgroundColor='white' color='black' />
            )}
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
                        const featuredImage = {
                            fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
                            alt: post.featuredImage?.node?.alt || ``,
                        }
                        return (
                            <AniLink
                                paintDrip
                                duration={1}
                                color='white'
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
                                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                            },
                                        }}
                                    >
                                        <Heading as='h4' sx={{ fontSize: 3 }}>
                                            {parse(title)}
                                        </Heading>
                                        <small>{post.date}</small>
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
    }
`
