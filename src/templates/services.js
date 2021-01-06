/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
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
                    // featuredImage={page.featuredImage.node.localFile.childImageSharp.fluid.src}
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
                // featuredImage={page.featuredImage.node.localFile.childImageSharp.fluid.src}
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
                        console.log(i)
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

                                {/* <div
                                    sx={{
                                        display: 'grid',
                                        gridGap: 4, // theme.space[4]
                                        // use arrays for mobile-first responsive styles
                                        gridTemplateColumns: [
                                            'auto', // default to a stacked layout on small screens
                                            '1fr 1fr 1fr 1fr', // use columns for larger screens
                                        ],
                                        gridAutoRows: '25vmin',
                                    }}
                                >
                                    <div
                                        sx={{
                                            gridColumnStart: 1,
                                            gridColumnEnd: [5, 4],
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
                                            gridColumnStart: [1, 3],
                                            gridColumnEnd: 5,
                                            gridRowStart: 2,
                                            gridRowEnd: [4, 3],
                                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                            zIndex: 30,
                                            borderRadius: 10,
                                            p: [2, 2, 5],
                                        }}
                                    >
                                        <Heading>
                                            <span itemProp='headline'>{parse(title)}</span>
                                        </Heading>
                                        {parse(service.excerpt)}
                                    </div>
                                </div> */}
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
            pageintro
            pagesubheading
            pagesubtitle
        }
    }
`
