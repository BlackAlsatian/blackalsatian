import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'

import Bio from '../components/bio'
import Layout from '../components/template/layout'
import SEO from '../components/seo'

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  console.log(posts)
  if (!posts.length) {
    return (
      <Layout isHomePage>
        <SEO title='All posts' />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <SEO title='All posts' />

      <Bio />

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.title
          const featuredImage = {
            fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
            alt: post.featuredImage?.node?.alt || ``,
          }
          return (
            <li key={post.uri}>
              <article
                className='post-list-item'
                itemScope
                itemType='http://schema.org/Article'
              >
                <header>
                  {featuredImage?.fluid && (
                    <Image
                      fluid={featuredImage.fluid}
                      alt={featuredImage.alt}
                      style={{ marginBottom: 50 }}
                    />
                  )}
                  <h2>
                    <Link to={post.uri} itemProp='url'>
                      <span itemProp='headline'>{parse(title)}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </header>
                <section itemProp='description'>{parse(post.excerpt)}</section>
              </article>
            </li>
          )
        })}
      </ol>

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
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
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        ...FeaturedMediaFragment
      }
    }
  }
`