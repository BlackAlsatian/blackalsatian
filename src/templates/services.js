/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link, graphql } from 'gatsby'
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
                <PageHeader
                    title={parse(page.title)}
                    intro={page.pageintro}
                    backgroundColor='blue'
                    color='white'
                />
                <section>
                    {services.map((service) => {
                        const title = service.title
                        const featuredImage = {
                            fluid:
                                service.featuredImage?.node?.localFile
                                    ?.childImageSharp?.fluid,
                            alt: service.featuredImage?.node?.alt || ``,
                        }
                        return (
                            <Link
                                to={service.uri}
                                itemProp='url'
                                sx={{ color: 'black', textDecoration: 'none' }}
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
                                            gridColumnEnd: 3,
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
                                                    minHeight: '300px',
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div
                                        sx={{
                                            gridColumnStart: 2,
                                            gridColumnEnd: 4,
                                            gridRowStart: 2,
                                            gridRowEnd: 3,
                                            backgroundColor:
                                                'rgba(255, 255, 255, 0.6)',
                                            zIndex: 30,
                                            p: 5,
                                        }}
                                    >
                                        <h2>
                                            <span itemProp='headline'>
                                                {parse(title)}
                                            </span>
                                            {/* </Link> */}
                                        </h2>
                                        {parse(service.excerpt)}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </section>
                {/* <ol style={{ listStyle: `none` }}>
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
                </ol> */}
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
            pageintro
            pagesubheading
            pagesubtitle
        }
    }
`
