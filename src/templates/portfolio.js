/** @jsx jsx */
import { jsx, Container, Flex, Heading, Box } from 'theme-ui'
import React from 'react'
import { Link, graphql } from 'gatsby'
// import Image from 'gatsby-image'
import parse from 'html-react-parser'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'

const PortfolioIndex = ({ data }) => {
    const portfolio = data.allWpPortfolio.nodes
    const page = data.wpPage
    if (!portfolio.length) {
        return (
            <>
                <SEO title='All portfolio' />
                <p>
                    No blog portfolio found. Add portfolio to your WordPress
                    site and they'll appear here!
                </p>
            </>
        )
    }

    return (
        <>
            <SEO title='All portfolio' />
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
                    backgroundColor='black'
                    color='white'
                />

                <section
                    sx={{
                        py: 5,
                        backgroundColor: 'black',
                        color: 'white',
                    }}
                >
                    <Container p={1}>
                        <Flex
                            sx={{
                                flexDirection: ['column', 'column', 'row'],
                            }}
                        >
                            <Box
                                pr={5}
                                py={4}
                                sx={{
                                    textAlign: ['left', 'left', 'right'],
                                    flex: [null, null, 1],
                                    width: ['100%', null],
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    borderRight: [0, '1px solid white'],
                                }}
                            >
                                {page.pagesubheading && (
                                    <Heading
                                        as='h3'
                                        sx={{
                                            fontSize: [4, 3, 4, 5],
                                            fontWeight: 'thin',
                                            lineHeight: 1,
                                            mb: 4,
                                            letterSpacing: 'tighter',
                                        }}
                                    >
                                        {page.pagesubheading}
                                    </Heading>
                                )}

                                {page.pagesubtitle && (
                                    <Heading
                                        as='h4'
                                        sx={{
                                            textTransform: 'uppercase',
                                            fontSize: 0,
                                            mt: [4, 4, 0],
                                            ml: ['auto', 'auto', null],
                                        }}
                                    >
                                        {page.pagesubtitle}
                                    </Heading>
                                )}
                            </Box>
                            <Box
                                py={4}
                                pr={5}
                                sx={{
                                    flex: [null, null, 3],
                                    width: ['100%', null],
                                    variant: 'layout',
                                }}
                            >
                                <div sx={{ pl: 5 }}>{parse(page.content)}</div>
                                {portfolio.map((portfolio) => {
                                    const title = portfolio.title
                                    return (
                                        <Link
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
                                                    justifyContent:
                                                        'space-between',
                                                    pl: 5,
                                                    minHeight: [
                                                        '3rem',
                                                        '3rem',
                                                        '5rem',
                                                    ],
                                                    borderBottom:
                                                        '0.01rem solid white',
                                                    transition:
                                                        'background 500ms ease-in',
                                                }}
                                            >
                                                <p sx={{ flex: 1 }}>
                                                    {portfolio.projectYear}
                                                </p>
                                                <Heading
                                                    as='h3'
                                                    sx={{
                                                        flex: 4,
                                                        fontSize: 2,
                                                        fontWeight: 'medium',
                                                    }}
                                                >
                                                    {parse(title)}
                                                </Heading>
                                                <div
                                                    sx={{
                                                        flex: 2,
                                                        fontSize: 0,
                                                    }}
                                                >
                                                    {portfolio.tags.nodes &&
                                                        portfolio.tags.nodes.map(
                                                            ({ name, id }) => (
                                                                <span
                                                                    sx={{
                                                                        m: 0,
                                                                    }}
                                                                    key={id}
                                                                >
                                                                    {' '}
                                                                    + {name}
                                                                </span>
                                                            ),
                                                        )}
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </Box>
                        </Flex>
                    </Container>
                </section>
            </div>
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
                projectUrl
                projectYear
                tags {
                    nodes {
                        id
                        name
                    }
                }
                ...PortfolioFeaturedMediaFragment
            }
        }
        wpPage(slug: { eq: "portfolio" }) {
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
