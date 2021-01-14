/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import ComponentParser from '../components/componentParser'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import LeftColumn from '../components/template/elements/leftColumn'
import { handleBodyTextColor } from '../components/helpers'

const PageTemplate = ({ data: { page } }) => {
    return (
        <>
            <SEO
                title={page.title}
                description={page.seo.metaDesc}
                url={page.uri}
                featuredImage={page.featuredImage && page.featuredImage.node.og.childImageSharp.fluid.src}
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
                        backgroundColor={
                            page.title.includes('About')
                                ? 'black'
                                : page.title.includes('Terms of Use') || page.title.includes('Privacy Policy')
                                ? 'red'
                                : 'yellow'
                        }
                        color={page.title.includes('Contact') ? 'black' : 'white'}
                    />
                    <section sx={{ py: 5 }}>
                        <Container p={1}>
                            <Flex
                                sx={{
                                    flexDirection: ['column', 'column', 'row'],
                                }}
                            >
                                <LeftColumn
                                    heading={page.pagesubheading}
                                    title={page.pagesubtitle}
                                    headerSize='h2'
                                    page
                                    color={handleBodyTextColor(page.uri)}
                                />
                                <Box
                                    py={[0, 0, 4]}
                                    px={[4, 4, 6]}
                                    sx={{
                                        flex: [null, null, 3],
                                        width: ['100%', null],
                                        variant: 'layout',
                                        color: `${handleBodyTextColor(page.uri)}`,
                                    }}
                                >
                                    {page.content && parse(page.content)}
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
