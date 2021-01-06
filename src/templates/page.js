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
            <SEO
                title={page.title}
                description={page.seo.metaDesc}
                url={page.uri}
                // featuredImage={page.featuredImage.node.localFile.childImageSharp.fluid.src}
            />
            {!page.isFrontPage &&
            !page.title.includes('Services') &&
            !page.title.includes('Portfolio') &&
            !page.title.includes('Specials') &&
            !page.title.includes('Packages') ? (
                <>
                    <PageHeader
                        title={parse(page.title)}
                        intro={page.pageintro}
                        backgroundColor={page.title.includes('About') ? 'black' : 'yellow'}
                        color={
                            page.title.includes('Contact') ||
                            page.title.includes('Terms of Use') ||
                            page.title.includes('Privacy Policy')
                                ? 'black'
                                : 'white'
                        }
                    />
                    <section sx={{ py: 5 }}>
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
                                        borderRight: [0, 0, '1px solid black'],
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
                                    px={[5, 5, 6]}
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
                </>
            ) : (
                <ComponentParser blocks={page.blocks} featuredImage={page.featuredImage} />
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
            uri
            seo {
                metaDesc
            }
            blocks {
                ...CoreCoverblock
                ...BlackalsatianContentBlock
                ...BlackalsatianPageMetaBlock
            }
        }
    }
`
