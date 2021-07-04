/** @jsxImportSource theme-ui */
import { Container, Flex, Box } from 'theme-ui'
import { useLayoutEffect, useContext } from 'react'
import { PageStyleContext } from '../components/pageStyleProvider'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import Modules from '../components/modules'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import LeftColumn from '../components/template/elements/leftColumn'

const PageTemplate = ({ data: { page, pageblocks } }) => {
    const { setPageStyle } = useContext(PageStyleContext)

    const pageStyle = page.pageStyle

    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle])

    // console.log(pageStyle)

    const seoImgSrc = getSrc(page.featuredImage?.node?.og)
    return (
        <>
            <SEO
                title={page.title}
                description={page.seo?.metaDesc}
                url={page.uri}
                featuredImage={seoImgSrc && seoImgSrc}
                datePublished={page.dateGmt}
                dateModified={page.modifiedGmt}
                isFrontPage={page.isFrontPage}
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
                                />
                                <Box
                                    py={[0, 0, 4]}
                                    px={[4, 4, 6]}
                                    sx={{
                                        flex: [null, null, 3],
                                        width: ['100%', null],
                                        variant: 'layout',
                                    }}
                                >
                                    {page.content && parse(page.content)}
                                </Box>
                            </Flex>
                        </Container>
                    </section>
                </>
            ) : (
                <>
                    {pageblocks.blocks &&
                        pageblocks.blocks.map(({ name, order, attributes, innerBlocks }) => (
                            <Modules
                                key={order}
                                featuredImage={page.featuredImage}
                                module={{ name: name, order: order }}
                                innerBlocks={innerBlocks}
                                attributes={attributes}
                            />
                        ))}
                </>
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
            dateGmt
            modifiedGmt
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
        }
        pageblocks: wpBlockEditorContentNode(id: { eq: $id }) {
            blocks {
                name
                order
                ...CoreCoverblock
                ...BlackalsatianContentBlock
            }
        }
    }
`
