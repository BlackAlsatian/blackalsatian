/** @jsxImportSource theme-ui */
import { useLayoutEffect, useContext } from 'react'
import { PageStyleContext } from '../components/pageStyleProvider'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import HeroBlock from '../components/template/blocks/heroBlock'
import parse from 'html-react-parser'
import Modules from '../components/modules'
import SEO from '../components/seo'
import PageHeader from '../components/template/pageHeader'
import LeftColumn from '../components/template/elements/leftColumn'
import RightColumn from '../components/template/elements/rightColumn'
import ColumnSection from '../components/template/containers/columnSection'

const PageTemplate = ({ data: { page, pageblocks } }) => {
    const { setPageStyle } = useContext(PageStyleContext)

    const pageStyle = page.pageStyle

    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle])

    const seoImgSrc = getSrc(page.featuredImage?.node?.og)
    const pageTitles = ['Services', 'Portfolio']
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
            {page.isFrontPage ? (
                <>
                    <HeroBlock
                        featuredImage={page.featuredImage}
                        color={pageblocks.blocks[0].innerBlocks[0].attributes.heroFontColor}
                        title={pageblocks.blocks[0].innerBlocks[0].attributes.heroTitle}
                        intro={pageblocks.blocks[0].innerBlocks[0].attributes.heroIntro}
                    />
                    {pageblocks.blocks && <Modules blockmodules={pageblocks.blocks} />}
                </>
            ) : (
                !pageTitles.includes(page.title) && (
                    <>
                        <PageHeader title={parse(page.title)} intro={page.pageintro} headerStyle={pageStyle} />
                        <ColumnSection sectionVariant={'main.' + pageStyle}>
                            <LeftColumn heading={page.pagesubheading} title={page.pagesubtitle} headerSize='h2' page />
                            <RightColumn>{page.content && parse(page.content)}</RightColumn>
                        </ColumnSection>
                    </>
                )
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
                ...CoreCoverblock
                ...BlackalsatianContentBlock
                ...BlackalsatianServicesBlock
                ...BlackalsatianLatestPostsBlock
                ...BlackalsatianFeaturedProjectsBlock
                ...BlackalsatianTestimonialsBlock
            }
        }
    }
`
