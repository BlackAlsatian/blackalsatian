/* eslint-disable react/prop-types */
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import { useContext, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import Modules from '../components/modules'
import { PageStyleContext } from '../components/pageStyleProvider'
import SEO from '../components/seo'
import HeroBlock from '../components/template/blocks/heroBlock'
import ColumnSection from '../components/template/containers/columnSection'
import LeftColumn from '../components/template/elements/leftColumn'
import RightColumn from '../components/template/elements/rightColumn'
import PageHeader from '../components/template/pageHeader'

const PageTemplate = ({ data: { page } }) => {
    const { setPageStyle } = useContext(PageStyleContext)

    const pageStyle = page.pageStyle

    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle, setPageStyle])

    const pageTitles = ['Services', 'Portfolio']

    return (
        <>
            {page.isFrontPage ? (
                <>
                    <HeroBlock
                        featuredImage={page.featuredImage}
                        color={page.blocks[0].innerBlocks[0].attributes.heroFontColor}
                        title={page.blocks[0].innerBlocks[0].attributes.heroTitle}
                        intro={page.blocks[0].innerBlocks[0].attributes.heroIntro}
                    />
                    {page.blocks && <Modules blockmodules={page.blocks} />}
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

PageTemplate.propTypes = {
    data: PropTypes.object,
}

export default PageTemplate

export const Head = ({ data: { page } }) => {
    const seoImgSrc = getSrc(page.featuredImage?.node?.main)

    return (
        <SEO
            title={page.title}
            description={page.seo?.metaDesc}
            url={page.uri}
            featuredImage={seoImgSrc && seoImgSrc}
            datePublished={page.dateGmt}
            dateModified={page.modifiedGmt}
            isFrontPage={page.isFrontPage}
        />
    )
}

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
