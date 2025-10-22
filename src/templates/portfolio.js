'use client'
/** @jsxImportSource theme-ui */ /* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { useContext, useLayoutEffect } from 'react'
import { Box, Heading } from 'theme-ui'
import { PageStyleContext } from '../components/pageStyleProvider'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ColumnSection from '../components/template/containers/columnSection'
import LeftColumn from '../components/template/elements/leftColumn'
import PageHeader from '../components/template/pageHeader'

const PortfolioIndex = ({ data }) => {
    const { setPageStyle } = useContext(PageStyleContext)
    const pageStyle = 'black'
    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle, setPageStyle])
    const portfolio = data.allWpPortfolio.nodes
    const page = data.wpPage

    if (!portfolio.length) {
        return (
            <Layout>
                <p>No blog projects found.</p>
            </Layout>
        )
    }

    return (
        <Layout>
            <PageHeader title={parse(page.title)} intro={page.pageintro} headerStyle={pageStyle} />
            <ColumnSection>
                <LeftColumn
                    heading={page.pagesubheading}
                    title={page.pagesubtitle}
                    color='white'
                    headerSize='h2'
                    page
                />
                <Box
                    py={[3, 3, 5]}
                    pr={[3, 3, 5]}
                    sx={{
                        flex: [null, null, 3],
                        width: ['100%', null],
                    }}
                >
                    <div sx={{ pl: [4, 4, 6], pr: [4, 4, null], pb: 5 }}>{parse(page.content)}</div>
                    {portfolio.map((portfolio) => {
                        const title = portfolio.title
                        return (
                            <Link
                                cover='true'
                                // duration={0.5}
                                // direction='left'
                                bg='#111827'
                                key={portfolio.uri}
                                to={portfolio.uri}
                                title={parse(title)}
                                sx={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    display: 'block',
                                    width: '100%',
                                    '&:hover, &:focus, &:active': {
                                        color: '#f5df4d !important',
                                    },
                                    '&:visited': {
                                        color: 'white',
                                    },
                                }}
                            >
                                <div
                                    sx={{
                                        maxWidth: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        pl: [1, 1, 6],
                                        py: [3, 3, null],
                                        minHeight: ['3rem', '3rem', '5rem'],
                                        borderBottom: '0.01rem solid white',
                                        transition: 'background 500ms ease-in',
                                    }}
                                >
                                    <span sx={{ flex: 1, px: 2 }}>{portfolio.projectYear}</span>
                                    <Heading
                                        as='span'
                                        sx={{
                                            flex: 4,
                                            fontSize: 2,
                                            fontWeight: 'bold',
                                            px: 2,
                                        }}
                                    >
                                        {parse(title)}
                                    </Heading>
                                    <div
                                        sx={{
                                            flex: 2,
                                            fontSize: 0,
                                            px: 2,
                                        }}
                                    >
                                        {portfolio.tags.nodes &&
                                            portfolio.tags.nodes.map(({ name, id }) => (
                                                <span
                                                    sx={{
                                                        m: 0,
                                                        fontWeight: 'normal',
                                                    }}
                                                    key={id}
                                                >
                                                    {' '}
                                                    + {name}
                                                </span>
                                            ))}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </Box>
            </ColumnSection>
        </Layout>
    )
}

PortfolioIndex.propTypes = {
    data: PropTypes.object,
}

export default PortfolioIndex

export const Head = ({ data }) => {
    const portfolio = data.allWpPortfolio.nodes
    const page = data.wpPage
    const seoImgSrc = getSrc(page.featuredImage?.node?.main)
    if (!portfolio.length) {
        return (
            <>
                <SEO
                    title={page.title}
                    description={page.seo.metaDesc}
                    url={page.uri}
                    featuredImage={seoImgSrc && seoImgSrc}
                    datePublished={page.dateGmt}
                    dateModified={page.modifiedGmt}
                />
            </>
        )
    }
    return (
        <SEO
            title={page.title}
            description={page.seo.metaDesc}
            url={page.uri}
            featuredImage={seoImgSrc && seoImgSrc}
            datePublished={page.dateGmt}
            dateModified={page.modifiedGmt}
        />
    )
}

export const pageQuery = graphql`
    query WordPressPortfolioIndex {
        allWpPortfolio(sort: { projectYear: DESC }) {
            nodes {
                uri
                title
                excerpt
                projectFeatured
                projectYear
                tags {
                    nodes {
                        id
                        name
                    }
                }
            }
        }
        wpPage(slug: { eq: "portfolio" }) {
            id
            title
            uri
            slug
            dateGmt
            modifiedGmt
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
