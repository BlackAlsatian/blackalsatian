/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import ComponentParser from '../components/componentParser'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import LeftColumn from '../components/template/elements/leftColumn'
// import { handleBodyTextColor } from '../components/helpers'

const PageTemplate = ({ data: { page, latestPostsBlock, portfolioBlock, servicesBlock, testimonialsBlock } }) => {
    const pageStyle = page.pageStyle
    console.log(pageStyle)
    let bodyFontColor = 'black'
    if (pageStyle === 'red') {
        bodyFontColor = 'white'
    }
    const seoImgSrc = getSrc(page.featuredImage?.node?.og)
    return (
        <>
            <SEO
                title={page.title}
                description={page.seo?.metaDesc}
                url={page.uri}
                featuredImage={seoImgSrc && seoImgSrc}
            />
            {!page.isFrontPage && !page.title.includes('Services') && !page.title.includes('Portfolio') ? (
                <>
                    <PageHeader title={parse(page.title)} intro={page.pageintro} headerStyle={pageStyle} />
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
                                <LeftColumn
                                    heading={page.pagesubheading}
                                    title={page.pagesubtitle}
                                    headerSize='h2'
                                    page
                                    color={bodyFontColor}
                                />
                                <Box
                                    py={[0, 0, 4]}
                                    px={[4, 4, 6]}
                                    sx={{
                                        flex: [null, null, 3],
                                        width: ['100%', null],
                                        variant: 'layout',
                                        color: bodyFontColor,
                                    }}
                                >
                                    {page.content && parse(page.content)}
                                </Box>
                            </Flex>
                        </Container>
                    </section>
                </>
            ) : (
                <ComponentParser
                    blocks={page.blocks}
                    featuredImage={page.featuredImage}
                    latestPosts={latestPostsBlock}
                    portfolio={portfolioBlock}
                    services={servicesBlock}
                    testimonials={testimonialsBlock}
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
            pageStyle
            pageintro
            pagesubheading
            pagesubtitle
            uri
            seo {
                metaDesc
            }
            blocks {
                name
                ...CoreCoverblock
                ...BlackalsatianContentBlock
                ...BlackalsatianPageMetaBlock
            }
        }
        portfolioBlock: allWpPortfolio(filter: { projectFeatured: { in: "1" } }) {
            nodes {
                id
                uri
                title
                excerpt
                projectFeatured
                ...PortfolioFeaturedMediaFragment
            }
        }
        servicesBlock: wpMenu(slug: { eq: "services-menu" }) {
            ...WpMenuItems
        }
        latestPostsBlock: allWpPost(limit: 6, filter: { status: { eq: "publish" } }) {
            nodes {
                id
                uri
                title
                excerpt
                ...FeaturedMediaFragment
            }
        }
        testimonialsBlock: allWpTestimonial {
            nodes {
                id
                title
                content
                uri
                slug
                testimonialRole
                testimonialCompany
                testimonialAuthor
            }
        }
    }
`
