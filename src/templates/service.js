/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'

const PageTemplate = ({ data: { previous, next, service } }) => {
    const featuredImage = {
        fluid: service.featuredImage?.node?.localFile?.childImageSharp?.fluid,
        alt: service.featuredImage?.node?.alt || ``,
    }
    // const MAX_LENGTH = 100
    return (
        <>
            <SEO title={service.title} description={service.excerpt} />

            <div
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <PageHeader
                    title={parse(service.title)}
                    intro={parse(service.excerpt)}
                    backgroundColor='yellow'
                    color='black'
                />
                <section>
                    <Container
                        p={4}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <div sx={{ flex: 2 }}>
                            <header>
                                <h1 itemProp='headline'>
                                    {parse(service.title)}
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
                        </div>
                    </Container>
                </section>
                <section>
                    <hr />

                    <Container p={4}>
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
                                        <Link
                                            to={previous.uri}
                                            rel='prev'
                                            sx={{
                                                variant: 'buttons.simple',
                                                backgroundColor: 'yellow',
                                                color: 'black',
                                                textDecoration: 'none',
                                                boxShadow: 'xl',
                                                transition: '200ms',
                                                py: 3,
                                                px: 4,
                                                fontSize: 3,
                                                fontWeight: 'black',
                                                '&:hover': {
                                                    backgroundColor: 'yellow',
                                                    boxShadow: 'none',
                                                },
                                            }}
                                        >
                                            ← {parse(previous.title)}
                                        </Link>
                                    )}
                                </li>

                                <li>
                                    {next && (
                                        <Link
                                            to={next.uri}
                                            rel='next'
                                            sx={{
                                                variant: 'buttons.simple',
                                                backgroundColor: 'yellow',
                                                color: 'black',
                                                textDecoration: 'none',
                                                boxShadow: 'xl',
                                                transition: '200ms',
                                                py: 3,
                                                px: 4,
                                                fontSize: 3,
                                                fontWeight: 'black',
                                                '&:hover': {
                                                    backgroundColor: 'yellow',
                                                    boxShadow: 'none',
                                                },
                                            }}
                                        >
                                            {parse(next.title)} →
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </Container>
                </section>
            </div>
        </>
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
