/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import parse from 'html-react-parser'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import ServiceImageLeft from '../components/template/services/serviceImageLeft'
import ServiceImageRight from '../components/template/services/serviceImageRight'
import { isOdd } from '../components/helpers'

const ServicesIndex = ({ data }) => {
    const services = data.allWpService.nodes
    const page = data.wpPage
    if (!services.length) {
        return (
            <>
                <SEO
                    title={page.title}
                    description={page.seo.metaDesc}
                    url={page.uri}
                    featuredImage={page.featuredImage && page.featuredImage.node.og.childImageSharp.fluid.src}
                />
                <p>No blog services found.</p>
            </>
        )
    }

    return (
        <>
            <SEO
                title={page.title}
                description={page.seo.metaDesc}
                url={page.uri}
                featuredImage={page.featuredImage && page.featuredImage.node.og.childImageSharp.fluid.src}
            />
            <PageHeader title={parse(page.title)} intro={page.pageintro} backgroundColor='yellow' color='black' />
            <section>
                <Container sx={{ overflow: 'hidden' }}>
                    {services.map((service, i) => {
                        const title = service.title
                        const featuredImage = {
                            fluid: service.featuredImage?.node?.localFile?.childImageSharp?.fluid,
                            alt: service.featuredImage?.node?.alt || ``,
                        }
                        return (
                            <AniLink
                                cover
                                duration={0.5}
                                direction='left'
                                bg='#f5df4d'
                                key={service.slug}
                                to={service.uri}
                                itemProp='url'
                                sx={{
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                            >
                                {isOdd(i) ? (
                                    <ServiceImageRight
                                        image={featuredImage}
                                        name={parse(title)}
                                        description={parse(service.excerpt)}
                                    />
                                ) : (
                                    <ServiceImageLeft
                                        image={featuredImage}
                                        name={parse(title)}
                                        description={parse(service.excerpt)}
                                    />
                                )}
                            </AniLink>
                        )
                    })}
                </Container>
            </section>
        </>
    )
}

export default ServicesIndex

export const pageQuery = graphql`
    query WordPressServicesIndex {
        allWpService(sort: { order: DESC, fields: date }) {
            nodes {
                id
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
            seo {
                metaDesc
            }
            ...PageFeaturedMediaFragment
            pageintro
            pagesubheading
            pagesubtitle
        }
    }
`
