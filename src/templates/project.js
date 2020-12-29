/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import PagesNav from '../components/pagesNav'

const ProjectTemplate = ({ data: { previous, next, portfolio } }) => {
    const featuredImage = {
        fluid: portfolio.featuredImage?.node?.localFile?.childImageSharp?.fluid,
        alt: portfolio.featuredImage?.node?.alt || ``,
    }
    // const MAX_LENGTH = 100
    console.log(previous)
    console.log(next)
    return (
        <>
            <SEO title={portfolio.title} description={portfolio.excerpt} />

            <div
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <PageHeader
                    title={parse(portfolio.title)}
                    intro={parse(portfolio.excerpt)}
                    backgroundColor='blue'
                    color='white'
                />
                <section>
                    <Container
                        p={4}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <div sx={{ flex: 2 }}>
                            <header>
                                <h1 itemProp='headline'>
                                    {parse(portfolio.title)}
                                </h1>

                                {/* if we have a featured image for this page let's display it */}
                                {featuredImage?.fluid && (
                                    <Image
                                        fluid={featuredImage.fluid}
                                        alt={featuredImage.alt}
                                        style={{ marginBottom: 50 }}
                                    />
                                )}
                            </header>
                        </div>

                        <div sx={{ flex: 2 }}>
                            {!!portfolio.content && (
                                <section itemProp='articleBody'>
                                    <div
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            minHeight: '100vh',
                                            variant: 'blog.portfolio',
                                        }}
                                    >
                                        {parse(portfolio.content)}
                                    </div>
                                </section>
                            )}
                        </div>
                    </Container>
                </section>
                <section>
                    <PagesNav
                        previousPagePath={previous && previous.uri}
                        nextPagePath={next && next.uri}
                        previousName={previous && parse(previous.title)}
                        nextName={next && parse(next.title)}
                        backgroundColor='blue'
                        color='white'
                    />
                </section>
            </div>
        </>
    )
}

export default ProjectTemplate

export const portfolioQuery = graphql`
    query PortfolioById(
        # these variables are passed in via createPage.pageContext in gatsby-node.js
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        # selecting the current post by id
        portfolio: wpPortfolio(id: { eq: $id }) {
            id
            excerpt
            content
            title
            ...PortfolioFeaturedMediaFragment
        }

        # this gets us the previous post by id (if it exists)
        previous: wpPortfolio(id: { eq: $previousPostId }) {
            uri
            title
        }

        # this gets us the next post by id (if it exists)
        next: wpPortfolio(id: { eq: $nextPostId }) {
            uri
            title
        }
    }
`
