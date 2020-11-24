/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
// import Image from 'gatsby-image'
import parse from 'html-react-parser'

// import Bio from '../components/bio'
import Layout from '../components/template/layout'
import SEO from '../components/seo'

const PageTemplate = ({ data: { page } }) => {
  //   const featuredImage = {
  //     fluid: page.featuredImage?.node?.localFile?.childImageSharp?.fluid,
  //     alt: page.featuredImage?.node?.alt || ``,
  //   }

  return (
    <Layout>
      <SEO title={page.title} description={page.excerpt} />

      <article
        className='site-page'
        itemScope
        itemType='http://schema.org/Article'
      >
        <header>
          <h1 itemProp='headline'>{parse(page.title)}</h1>

          {/* <p>{page.date}</p> */}

          {/* if we have a featured image for this page let's display it */}
          {/* {featuredImage?.fluid && (
            <Image
              fluid={featuredImage.fluid}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )} */}
        </header>

        {!!page.content && (
          <section itemProp='articleBody'>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                variant: 'blog.page',
              }}
            >
              {parse(page.content)}
            </div>
          </section>
        )}

        <hr />

        <footer>{/* <Bio /> */}</footer>
      </article>
      {/* 
      <nav className='blog-page-nav'>
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
      </nav> */}
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String! # $previousPostId: String # $nextPostId: String
  ) {
    # selecting the current post by id
    page: wpPage(id: { eq: $id }) {
      id
      #   excerpt
      content
      title
      #   date(formatString: "MMMM DD, YYYY")

      #   ...FeaturedMediaFragment
    }

    # this gets us the previous post by id (if it exists)
    # previous: wpPost(id: { eq: $previousPostId }) {
    #   uri
    #   title
    # }

    # this gets us the next post by id (if it exists)
    # next: wpPost(id: { eq: $nextPostId }) {
    #   uri
    #   title
    # }
  }
`
