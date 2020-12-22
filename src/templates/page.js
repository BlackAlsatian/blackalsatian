/** @jsx jsx */
import { jsx, Container, Heading, Flex, Box } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import ComponentParser from '../components/componentParser'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'

const PageTemplate = ({ data: { page } }) => {
    return (
        <>
            <SEO title={page.title} description={page.excerpt} />
            {!page.isFrontPage &&
            // !page.title.includes('About') &&
            !page.title.includes('Services') &&
            !page.title.includes('Portfolio') ? (
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
                        backgroundColor='yellow'
                        color='black'
                    />
                    <section sx={{ py: 5 }}>
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
                                        // justifyContent: 'flex-end',
                                        borderRight: [0, '1px solid black'],
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
                                    px={5}
                                    sx={{
                                        flex: [null, null, 3],
                                        width: ['100%', null],
                                        variant: 'layout',
                                    }}
                                >
                                    {parse(page.content)}
                                </Box>
                            </Flex>
                        </Container>
                    </section>
                </div>
            ) : (
                <ComponentParser
                    blocks={page.blocks}
                    featuredImage={page.featuredImage}
                />
            )}
        </>
    )
}

export default PageTemplate

export const pageQuery = graphql`
    query PageById(
        # these variables are passed in via createPage.pageContext in gatsby-node.js
        $id: String!
    ) {
        # selecting the current post by id
        page: wpPage(id: { eq: $id }) {
            id
            title
            content
            slug
            isFrontPage
            ...PageFeaturedMediaFragment
            pageintro
            pagesubheading
            pagesubtitle
            blocks {
                ...CoreCoverblock
                ...BlackalsatianContentBlock
                ...BlackalsatianPageMetaBlock
            }
        }
    }
`
