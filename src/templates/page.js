/** @jsx jsx */
import { jsx, Container, Heading, Flex, Box } from 'theme-ui'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import Image from 'gatsby-image'
import parse from 'html-react-parser'
import ComponentParser from '../components/componentParser'
// import Layout from '../components/layout'
import SEO from '../components/seo'

const PageTemplate = ({ data: { page } }) => {
    console.log(page)
    const MAX_LENGTH = 51
    const subheading = `Crafting websites for the love of building websites.`
    const subtitle = `Web Artisans`
    const intro = `Not just another web design agency. Black Alsatian is your new best friend on the web.`
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
                    <section
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'black',
                            backgroundColor: 'yellow',
                            minHeight: '60vh',
                            pt: '25vh',
                        }}
                    >
                        <Container p={4}>
                            <Heading
                                as='h1'
                                sx={{
                                    fontSize: [7, 10],
                                }}
                            >
                                {parse(page.title)}
                            </Heading>
                            {page.pageintro && (
                                <div sx={{ fontSize: [3, 4], my: 1 }}>
                                    {/* {parse(page.excerpt)} */}
                                    {/* {parse(page.content.substring(0, MAX_LENGTH))} */}
                                    {/* {page.excerpt} */}
                                    {page.pageintro}
                                </div>
                            )}
                        </Container>
                    </section>
                    <section>
                        <Container p={1}>
                            <Flex
                                sx={{
                                    flexDirection: ['column', 'column', 'row'],
                                }}
                            >
                                <Box
                                    pr={3}
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
