import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'

import Layout from '../components/template/layout'
import SEO from '../components/seo'

const PortfolioIndex = ({ data }) => {
  const portfolio = data.allWpPortfolio.nodes
  const page = data.wpPage

  console.log(portfolio)
  if (!portfolio.length) {
    return (
      <Layout>
        <SEO title='All portfolio' />
        <p>
          No blog portfolio found. Add portfolio to your WordPress site and
          they'll appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title='All portfolio' />
      <section itemProp='articleBody'>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            variant: 'blog.page',
          }}
        >
          <h1 itemProp='headline'>{parse(page.title)}</h1>
          {parse(page.content)}
        </div>
      </section>

      <ol style={{ listStyle: `none` }}>
        {portfolio.map(portfolio => {
          const title = portfolio.title
          const featuredImage = {
            fluid:
              portfolio.featuredImage?.node?.localFile?.childImageSharp?.fluid,
            alt: portfolio.featuredImage?.node?.alt || ``,
          }
          return (
            <li key={portfolio.uri}>
              <article
                className='portfolio-list-item'
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
                    <Link to={portfolio.uri} itemProp='url'>
                      <span itemProp='headline'>{parse(title)}</span>
                    </Link>
                  </h2>
                </header>
                <section itemProp='description'>
                  {parse(portfolio.excerpt)}
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default PortfolioIndex

export const pageQuery = graphql`
  query WordPressPortfolioIndex {
    allWpPortfolio {
      nodes {
        uri
        title
        excerpt
        ...PortfolioFeaturedMediaFragment
      }
    }
    wpPage(slug: { eq: "portfolio" }) {
      id
      title
      uri
      slug
      content
    }
  }
`
