/** @jsxImportSource theme-ui */
import { Container } from 'theme-ui'
import { useLayoutEffect, useContext } from 'react'
import { PageStyleContext } from '../components/pageStyleProvider'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import parse from 'html-react-parser'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import ServiceImageLeft from '../components/template/services/serviceImageLeft'

import ServiceImageRight from '../components/template/services/serviceImageRight'
import { isOdd } from '../components/helpers'

const ServicesIndex = ({ data }) => {
    const { setPageStyle } = useContext(PageStyleContext)

    const pageStyle = 'altyellow'

    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle])
    const services = data.allWpService.nodes
    const page = data.wpPage
    const seoImgSrc = getSrc(page.featuredImage?.node?.og)
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
        <>
            <SEO
                title={page.title}
                description={page.seo?.metaDesc}
                url={page.uri}
                featuredImage={seoImgSrc && seoImgSrc}
                datePublished={page.dateGmt}
                dateModified={page.modifiedGmt}
            />
            <PageHeader title={parse(page.title)} intro={page.pageintro} headerStyle={pageStyle} />
            <section>
                <Container sx={{ overflow: 'hidden' }}>
                    {services.map((service, i) => {
                        const title = service.title
                        const featuredImage = {
                            fluid: service.featuredImage?.node?.main?.childImageSharp?.gatsbyImageData,
                            alt: service.featuredImage?.node?.altText || ``,
                        }
                        {
                            /* console.log(featuredImage) */
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
            dateGmt
            modifiedGmt
            uri
            slug
            content
            seo {
                metaDesc
            }
            ...PageFeaturedMediaFragment
            # pageStyle
            pageintro
            pagesubheading
            pagesubtitle
        }
    }
`
