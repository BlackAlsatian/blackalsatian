/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'

// import Bio from '../components/bio'
// import Layout from '../components/template/layout'
import SEO from '../components/seo'

const PageTemplate = ({ data: { previous, next, service } }) => {
    const featuredImage = {
        fluid: service.featuredImage?.node?.localFile?.childImageSharp?.fluid,
        alt: service.featuredImage?.node?.alt || ``,
    }
    const MAX_LENGTH = 100
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
                <section
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'black',
                        backgroundColor: 'yellow',
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
                            {parse(service.title)}
                        </Heading>
                        <div sx={{ fontSize: [3, 4], my: 1 }}>
                            {parse(service.content.substring(0, MAX_LENGTH))}
                        </div>
                    </Container>
                </section>
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
