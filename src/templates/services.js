'use client'
/** @jsxImportSource theme-ui */
/* eslint-disable react/prop-types */
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { useContext, useLayoutEffect } from 'react'
import { Container } from 'theme-ui'
import { PageStyleContext } from '../components/pageStyleProvider'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import ServiceImageLeft from '../components/template/services/serviceImageLeft'
import safeParse from '../utils/safeParse'

import { isOdd } from '../components/helpers'
import ServiceImageRight from '../components/template/services/serviceImageRight'

const ServicesIndex = ({ data }) => {
    const { setPageStyle } = useContext(PageStyleContext)

    const pageStyle = 'altyellow'

    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle, setPageStyle])
    const services = data.allWpService.nodes
    const page = data.wpPage

    if (!services.length) {
        return (
            <Layout>
                <p>No blog services found.</p>
            </Layout>
        )
    }

    return (
        <Layout>
            <PageHeader title={safeParse(page.title)} intro={page.pageintro} headerStyle={pageStyle} />
            <section
                // eslint-disable-next-line react/no-unknown-property
                sx={{
                    variant: 'sections.noypadding',
                }}
            >
                <Container sx={{ overflow: 'hidden' }}>
                    {services.map((service, i) => {
                        const title = service.title
                        const featuredImage = {
                            fluid: service.featuredImage?.node?.main,
                            alt: service.featuredImage?.node?.altText || '',
                        }
                        return (
                            <Link
                                cover='true'
                                // duration={0.5}
                                // direction='left'
                                bg='#f5df4d'
                                key={service.slug}
                                to={service.uri}
                                itemProp='url'
                                sx={{
                                    color: 'black',
                                    textDecoration: 'none',
                                    fontWeight: 'normal',
                                }}
                            >
                                {isOdd(i) ? (
                                    <ServiceImageRight
                                        image={featuredImage}
                                        name={safeParse(title)}
                                        description={safeParse(service.excerpt)}
                                    />
                                ) : (
                                    <ServiceImageLeft
                                        image={featuredImage}
                                        name={safeParse(title)}
                                        description={safeParse(service.excerpt)}
                                    />
                                )}
                            </Link>
                        )
                    })}
                </Container>
            </section>
        </Layout>
    )
}

ServicesIndex.propTypes = {
    data: PropTypes.object,
}

export default ServicesIndex

export const Head = ({ data }) => {
    const services = data.allWpService.nodes
    const page = data.wpPage
    const seoImgSrc = getSrc(page.featuredImage?.node?.main)
    if (!services.length) {
        return (
            <>
                <SEO
                    title={page.title}
                    description={page.seo?.metaDesc}
                    url={page.uri}
                    featuredImage={seoImgSrc && seoImgSrc}
                    datePublished={page.dateGmt}
                    dateModified={page.modifiedGmt}
                />
                <p>No blog services found.</p>
            </>
        )
    }
    return (
        <SEO
            title={page.title}
            description={page.seo?.metaDesc}
            url={page.uri}
            featuredImage={seoImgSrc && seoImgSrc}
            datePublished={page.dateGmt}
            dateModified={page.modifiedGmt}
        />
    )
}

export const pageQuery = graphql`
    query WordPressServicesIndex {
        allWpService(sort: { date: DESC }) {
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
            dateGmt
            modifiedGmt
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
