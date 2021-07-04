/** @jsxImportSource theme-ui */
import { Container, Flex, Heading, Box } from 'theme-ui'
import { useLayoutEffect, useContext } from 'react'
import { PageStyleContext } from '../components/pageStyleProvider'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import parse from 'html-react-parser'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import LeftColumn from '../components/template/elements/leftColumn'

const PortfolioIndex = ({ data }) => {
    // const pageStyle = data.wpPage.pageStyle
    const { setPageStyle } = useContext(PageStyleContext)
    const pageStyle = 'black'
    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle])
    const portfolio = data.allWpPortfolio.nodes
    const page = data.wpPage
    const seoImgSrc = getSrc(page.featuredImage?.node?.og)
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
                <p>No blog projects found.</p>
            </>
        )
    }

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
            <PageHeader title={parse(page.title)} intro={page.pageintro} headerStyle={pageStyle} />

            <section
                sx={{
                    py: 5,
                    backgroundColor: 'black',
                }}
            >
                <Container p={1}>
                    <Flex
                        sx={{
                            flexDirection: ['column', 'column', 'row'],
                            color: 'white',
                        }}
                    >
                        <LeftColumn
                            heading={page.pagesubheading}
                            title={page.pagesubtitle}
                            color='white'
                            headerSize='h2'
                            page
                        />
                        <Box
                            py={[0, 0, 4]}
                            pr={[0, 0, 6]}
                            sx={{
                                flex: [null, null, 3],
                                width: ['100%', null],
                                variant: 'layout',
                            }}
                        >
                            <div sx={{ pl: [4, 4, 6], pr: [4, 4, null], pb: 5 }}>{parse(page.content)}</div>
                            {portfolio.map((portfolio) => {
                                const title = portfolio.title
                                return (
                                    <AniLink
                                        cover
                                        duration={0.5}
                                        direction='left'
                                        bg='#111827'
                                        key={portfolio.uri}
                                        to={portfolio.uri}
                                        title={parse(title)}
                                        sx={{
                                            color: 'white',
                                            textDecoration: 'none',
                                            display: 'block',
                                            width: '100%',
                                            '&:hover': {
                                                color: 'yellow',
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
                                            <p sx={{ flex: 1, px: 2 }}>{portfolio.projectYear}</p>
                                            <Heading
                                                as='p'
                                                sx={{
                                                    flex: 4,
                                                    fontSize: 2,
                                                    fontWeight: 'medium',
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
                                                            }}
                                                            key={id}
                                                        >
                                                            {' '}
                                                            + {name}
                                                        </span>
                                                    ))}
                                            </div>
                                        </div>
                                    </AniLink>
                                )
                            })}
                        </Box>
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default PortfolioIndex

export const pageQuery = graphql`
    query WordPressPortfolioIndex {
        allWpPortfolio(sort: { order: DESC, fields: projectYear }) {
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
            # pageStyle
            pageintro
            pagesubheading
            pagesubtitle
        }
    }
`
