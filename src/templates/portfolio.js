/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'

// import Layout from '../components/template/layout'
import SEO from '../components/seo'

const PortfolioIndex = ({ data }) => {
    const portfolio = data.allWpPortfolio.nodes
    const page = data.wpPage
    const MAX_LENGTH = 51
    console.log(portfolio)
    if (!portfolio.length) {
        return (
            <>
                <SEO title='All portfolio' />
                <p>
                    No blog portfolio found. Add portfolio to your WordPress
                    site and they'll appear here!
                </p>
            </>
        )
    }

    return (
        <>
            <SEO title='All portfolio' />
            <div
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <section
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        backgroundColor: 'red',
                        minHeight: '60vh',
                        pt: '25vh',
                    }}
                >
                    <Container p={4}>
                        <Heading
                            as='h1'
                            sx={{
                                fontSize: [7, 10],
                            }}
                        >
                            {parse(page.title)}
                        </Heading>
                        <div sx={{ fontSize: [3, 4], my: 1 }}>
                            {/* {parse(page.excerpt)} */}
                            {parse(page.content.substring(0, MAX_LENGTH))}
                            {/* {page.excerpt} */}
                        </div>
                    </Container>
                </section>

                <ol style={{ listStyle: `none` }}>
                    {portfolio.map((portfolio) => {
                        const title = portfolio.title
                        const featuredImage = {
                            fluid:
                                portfolio.featuredImage?.node?.localFile
                                    ?.childImageSharp?.fluid,
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
                                            <Link
                                                to={portfolio.uri}
                                                itemProp='url'
                                            >
                                                <span itemProp='headline'>
                                                    {parse(title)}
                                                </span>
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
            </div>
        </>
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
