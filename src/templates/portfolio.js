/** @jsx jsx */
import { jsx, Container, Flex, Heading, Box } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
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
                <p>No blog projects found.</p>
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
                    backgroundColor: 'black',
                    color: 'white',
                }}
            >
                <PageHeader title={parse(page.title)} intro={page.pageintro} backgroundColor='black' color='white' />

                <section
                    sx={{
                        py: 5,
                    }}
                >
                    <Container p={1}>
                        <Flex
                            sx={{
                                flexDirection: ['column', 'column', 'row'],
                            }}
                        >
                            <Box
                                p={[5, 5, 3, 6]}
                                sx={{
                                    textAlign: ['left', 'left', 'right'],
                                    flex: [null, null, 1],
                                    width: ['100%', null],
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    // justifyContent: 'center',
                                    borderRight: [0, 0, '1px solid white'],
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
                                py={[4, 4, 5]}
                                pr={[5, 5, 6]}
                                sx={{
                                    flex: [null, null, 3],
                                    width: ['100%', null],
                                    variant: 'layout',
                                }}
                            >
                                <div sx={{ pl: [5, 5, 6], pb: 5 }}>{parse(page.content)}</div>
                                {portfolio.map((portfolio) => {
                                    const title = portfolio.title
                                    return (
                                        <AniLink
                                            cover
                                            duration={0.5}
                                            direction='left'
                                            bg='#f5df4d'
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
                                                    pl: [5, 5, 6],
                                                    minHeight: ['3rem', '3rem', '5rem'],
                                                    borderBottom: '0.01rem solid white',
                                                    transition: 'background 500ms ease-in',
                                                }}
                                            >
                                                <p sx={{ flex: 1 }}>{portfolio.projectYear}</p>
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
            content
            pageintro
            pagesubheading
            pagesubtitle
        }
    }
`
