/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Image from 'gatsby-image'
import parse from 'html-react-parser'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'

const ServicesIndex = ({ data }) => {
    const services = data.allWpService.nodes
    const page = data.wpPage
    if (!services.length) {
        return (
            <>
                <SEO title='All services' />
                <p>No blog services found.</p>
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
                    overflow: 'hidden',
                }}
            >
                <PageHeader
                    title={parse(page.title)}
                    intro={page.pageintro}
                    backgroundColor='yellow'
                    color='black'
                />
                <section>
                    <Container>
                        {services.map((service) => {
                            const title = service.title
                            const featuredImage = {
                                fluid:
                                    service.featuredImage?.node?.localFile
                                        ?.childImageSharp?.fluid,
                                alt: service.featuredImage?.node?.alt || ``,
                            }
                            return (
                                <AniLink
                                    swipe
                                    duration={0.35}
                                    direction='left'
                                    color='yellow'
                                    key={service.slug}
                                    to={service.uri}
                                    itemProp='url'
                                    sx={{
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <div
                                        sx={{
                                            display: 'grid',
                                            gridGap: 4, // theme.space[4]
                                            // use arrays for mobile-first responsive styles
                                            gridTemplateColumns: [
                                                'auto', // default to a stacked layout on small screens
                                                '1fr 2fr 1fr', // use columns for larger screens
                                            ],
                                            gridAutoRows: '25vmin',
                                        }}
                                    >
                                        <div
                                            sx={{
                                                gridColumnStart: 1,
                                                gridColumnEnd: [4, 3],
                                                gridRowStart: 1,
                                                gridRowEnd: 4,
                                            }}
                                        >
                                            {featuredImage?.fluid && (
                                                <Image
                                                    fluid={featuredImage.fluid}
                                                    alt={featuredImage.alt}
                                                    style={{ marginBottom: 50 }}
                                                    sx={{
                                                        height: '100%',
                                                        width: '100%',
                                                        minHeight: '300px',
                                                    }}
                                                />
                                            )}
                                        </div>
                                        <div
                                            sx={{
                                                gridColumnStart: [1, 2],
                                                gridColumnEnd: 4,
                                                gridRowStart: 2,
                                                gridRowEnd: [4, 3],
                                                backgroundColor:
                                                    'rgba(255, 255, 255, 0.9)',
                                                // 'rgba(0, 0, 0, 0.8)',
                                                // 'rgba(46, 196, 182, 0.6)',
                                                zIndex: 30,
                                                borderRadius: 10,
                                                p: [2, 2, 5],
                                            }}
                                        >
                                            <Heading>
                                                <span itemProp='headline'>
                                                    {parse(title)}
                                                </span>
                                                {/* </Link> */}
                                            </Heading>
                                            {parse(service.excerpt)}
                                        </div>
                                    </div>
                                </AniLink>
                            )
                        })}
                    </Container>
                </section>
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
                slug
                ...ServiceMediaFragment
            }
        }
        wpPage(slug: { eq: "services" }) {
            id
            title
            uri
            slug
            content
            pageintro
            pagesubheading
            pagesubtitle
        }
    }
`
