/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'

// import Layout from '../components/template/layout'
import SEO from '../components/seo'

const ServicesIndex = ({ data }) => {
    const services = data.allWpService.nodes
    const page = data.wpPage
    const MAX_LENGTH = 51
    console.log(services)
    if (!services.length) {
        return (
            <>
                <SEO title='All services' />
                <p>
                    No blog services found. Add services to your WordPress site
                    and they'll appear here!
                </p>
            </>
        )
    }

    return (
        <>
            <SEO title='All services' />
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
                        backgroundColor: 'blue',
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
                    {services.map((service) => {
                        const title = service.title
                        const featuredImage = {
                            fluid:
                                service.featuredImage?.node?.localFile
                                    ?.childImageSharp?.fluid,
                            alt: service.featuredImage?.node?.alt || ``,
                        }
                        return (
                            <li key={service.uri}>
                                <article
                                    className='service-list-item'
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
                                                to={service.uri}
                                                itemProp='url'
                                            >
                                                <span itemProp='headline'>
                                                    {parse(title)}
                                                </span>
                                            </Link>
                                        </h2>
                                    </header>
                                    <section itemProp='description'>
                                        {parse(service.excerpt)}
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

export default ServicesIndex

export const pageQuery = graphql`
    query WordPressServicesIndex {
        allWpService {
            nodes {
                uri
                title
                excerpt
                ...ServiceMediaFragment
            }
        }
        wpPage(slug: { eq: "services" }) {
            id
            title
            uri
            slug
            content
        }
    }
`
