/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'

// import Bio from '../components/bio'
import Layout from '../components/template/layout'
import SEO from '../components/seo'

const PageTemplate = ({ data: { previous, next, service } }) => {
  const featuredImage = {
    fluid: service.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: service.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <SEO title={service.title} description={service.excerpt} />

      <article
        className='service-page'
        itemScope
        itemType='http://schema.org/Article'
      >
        <header>
          <h1 itemProp='headline'>{parse(service.title)}</h1>

          {/* <p>{page.date}</p> */}

          {/* if we have a featured image for this page let's display it */}
          {featuredImage?.fluid && (
            <Image
              fluid={featuredImage.fluid}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
        </header>

        {!!service.content && (
          <section itemProp='articleBody'>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                variant: 'blog.service',
              }}
            >
              {parse(service.content)}
            </div>
          </section>
        )}

        <hr />

        <footer>{/* <Bio /> */}</footer>
      </article>

      <nav className='service-page-nav'>
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
    </Layout>
  )
}

export default PageTemplate

export const serviceQuery = graphql`
  query ServiceById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    service: wpService(id: { eq: $id }) {
      id
      excerpt
      content
      title

      ...ServiceMediaFragment
    }

    # this gets us the previous post by id (if it exists)
    previous: wpService(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpService(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
