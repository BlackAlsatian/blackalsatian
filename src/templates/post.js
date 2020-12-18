/** @jsx jsx */
import { jsx } from 'theme-ui'
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

            <article
                className='blog-post'
                itemScope
                itemType='http://schema.org/Article'
            >
                <header>
                    <h1 itemProp='headline'>{parse(post.title)}</h1>

                    <p>{post.date}</p>

                    {/* if we have a featured image for this post let's display it */}
                    {featuredImage?.fluid && (
                        <Image
                            fluid={featuredImage.fluid}
                            alt={featuredImage.alt}
                            style={{ marginBottom: 50 }}
                        />
                    )}
                </header>

                {!!post.content && (
                    <section itemProp='articleBody'>
                        <div
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '100vh',
                                variant: 'blog.post',
                            }}
                        >
                            {parse(post.content)}
                        </div>
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
