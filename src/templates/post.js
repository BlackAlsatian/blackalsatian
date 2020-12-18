/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'

import Bio from '../components/bio'
// import Layout from '../components/template/layout'
import SEO from '../components/seo'

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
    const featuredImage = {
        fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
        alt: post.featuredImage?.node?.alt || ``,
    }
    return (
        <>
            <SEO title={post.title} description={post.excerpt} />

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
                            style={{ width: '100%', minHeight: '100vh' }}
                        />
                    )}

                    <div
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            pt: '30vh',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            minHeight: '100vh',
                        }}
                    >
                        <Heading
                            as='h1'
                            sx={{
                                fontSize: [6, 9],
                            }}
                            itemProp='headline'
                        >
                            {parse(post.title)}
                        </Heading>
                        <p sx={{ fontSize: [2, 3], my: 0 }}>
                            {parse(post.excerpt)}
                        </p>

                        <p>{post.date}</p>
                    </div>
                </header>

                {!!post.content && (
                    <section itemProp='articleBody'>
                        <Container
                            p={6}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '100vh',
                            }}
                        >
                            {parse(post.content)}
                        </Container>
                    </section>
                )}

                <hr />

                <footer>
                    <Bio />
                </footer>
            </article>

            <nav className='blog-post-nav'>
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={previous.uri} rel='prev'>
                                ← {parse(previous.title)}
                            </Link>
                        )}
                    </li>

                    <li>
                        {next && (
                            <Link to={next.uri} rel='next'>
                                {parse(next.title)} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
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
            date(formatString: "MMMM DD, YYYY")

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
