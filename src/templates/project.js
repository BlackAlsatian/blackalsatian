/** @jsx jsx */
import { jsx, Container, Heading, Flex, Box, Badge } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'
import SEO from '../components/seo'
// import PageHeader from '../components/template/pageHeader'
import PagesNav from '../components/pagesNav'

const ProjectTemplate = ({ data: { previous, next, portfolio } }) => {
    const featuredImage = {
        fluid: portfolio.featuredImage?.node?.localFile?.childImageSharp?.fluid,
        alt: portfolio.featuredImage?.node?.alt || ``,
    }
    // console.log(previous)
    // console.log(next)
    return (
        <>
            <SEO title={portfolio.title} description={portfolio.excerpt} />

            <div
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundColor: 'black',
                    color: 'white',
                }}
            >
                <section
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        // alignItems: 'center',
                        // justifyContent: 'space-between',
                        minHeight: '100vh',
                        pt: '10vh',
                    }}
                >
                    <Flex
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            px: 5,
                        }}
                    >
                        <Heading
                            as='h1'
                            sx={{
                                fontSize: [7, 8],
                                lineHeight: 'none',
                                letterSpacing: 'tighter',
                                pr: 5,
                                // color: 'black',
                            }}
                        >
                            {parse(portfolio.title)}
                        </Heading>
                        <div
                            sx={{
                                pl: 5,
                                textAlign: 'right',
                                // color: 'black'
                            }}
                        >
                            {parse(portfolio.excerpt)}
                        </div>
                    </Flex>
                    <Container p={5}>
                        {featuredImage?.fluid && (
                            <Image
                                fluid={featuredImage.fluid}
                                alt={featuredImage.alt}
                            />
                        )}
                    </Container>
                </section>
                <section sx={{ py: 5 }}>
                    <Container p={5}>
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
                                {portfolio.projectYear && (
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
                                        {portfolio.projectYear}
                                    </Heading>
                                )}

                                {portfolio.projectUrl && (
                                    <a
                                        href={portfolio.projectUrl}
                                        title={parse(portfolio.title)}
                                        target='_blank'
                                        rel='noopener nofollow noreferrer'
                                        sx={{
                                            variant: 'buttons.simple',
                                            display: 'inline-block',
                                            backgroundColor: 'white',
                                            color: 'black',
                                            textDecoration: 'none',
                                            boxShadow: 'xl',
                                            '&:hover': {
                                                boxShadow: 'none',
                                            },
                                        }}
                                    >
                                        Visit
                                    </a>
                                )}

                                <div
                                    sx={{
                                        py: 5,
                                        pl: 5,
                                        lineHeight: 'loose',
                                    }}
                                >
                                    {portfolio.tags.nodes &&
                                        portfolio.tags.nodes.map(
                                            ({ name, id }) => (
                                                <Badge
                                                    key={id}
                                                    variant='outline'
                                                >
                                                    {name}
                                                </Badge>
                                            ),
                                        )}
                                </div>
                            </Box>
                            <Box
                                py={[4, 4, 5]}
                                px={[5, 5, 6]}
                                sx={{
                                    flex: [null, null, 3],
                                    width: ['100%', null],
                                    variant: 'layout',
                                }}
                            >
                                {parse(portfolio.content)}
                            </Box>
                        </Flex>
                    </Container>
                </section>
                <section>
                    <PagesNav
                        previousPagePath={previous && previous.uri}
                        nextPagePath={next && next.uri}
                        previousName={previous && parse(previous.title)}
                        nextName={next && parse(next.title)}
                        backgroundColor='white'
                        color='black'
                        swipeColor='#111827'
                        // swipeColor='#f5df4d'
                    />
                </section>
            </div>
        </>
    )
}

export default ProjectTemplate

export const portfolioQuery = graphql`
    query PortfolioById(
        # these variables are passed in via createPage.pageContext in gatsby-node.js
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        # selecting the current post by id
        portfolio: wpPortfolio(id: { eq: $id }) {
            id
            title
            excerpt
            content
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

        # this gets us the previous post by id (if it exists)
        previous: wpPortfolio(id: { eq: $previousPostId }) {
            uri
            title
        }

        # this gets us the next post by id (if it exists)
        next: wpPortfolio(id: { eq: $nextPostId }) {
            uri
            title
        }
    }
`
