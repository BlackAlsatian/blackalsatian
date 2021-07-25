/** @jsxImportSource theme-ui */
import { graphql } from 'gatsby'
import { useLayoutEffect, useContext } from 'react'
import { PageStyleContext } from '../components/pageStyleProvider'
import { getSrc } from 'gatsby-plugin-image'
import HeroBlock from '../components/template/blocks/heroBlock'
import Modules from '../components/modules'
import SEO from '../components/seo'

const LanderTemplate = ({ data: { lander, pageblocks } }) => {
    const seoImgSrc = getSrc(lander.featuredImage?.node?.og)
    const { setPageStyle } = useContext(PageStyleContext)

    const pageStyle = 'default'

    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle])

    const HeroAttributes = pageblocks.blocks[0].innerBlocks[0].attributes
    return (
        <>
            <HeroBlock
                featuredImage={lander.featuredImage}
                color={HeroAttributes.heroFontColor}
                title={HeroAttributes.heroTitle}
                intro={HeroAttributes.heroIntro}
            />
            <SEO
                title={lander.title}
                description={lander.seo?.metaDesc}
                url={lander.uri}
                featuredImage={seoImgSrc && seoImgSrc}
                datePublished={lander.dateGmt}
                dateModified={lander.modifiedGmt}
            />
            {pageblocks.blocks && <Modules blockmodules={pageblocks.blocks} />}
            {/* {pageblocks.blocks &&
                pageblocks.blocks.map(({ name, order, attributes, innerBlocks }) => (
                    <Module
                        key={order}
                        module={{ name: name, order: order }}
                        innerBlocks={innerBlocks}
                        attributes={attributes}
                    />
                ))} */}
        </>
    )
}

export default LanderTemplate

export const landerQuery = graphql`
    query LanderById(
        # these variables are passed in via createPage.pageContext in gatsby-node.js
        $id: String!
    ) {
        # selecting the current post by id
        lander: wpLander(id: { eq: $id }) {
            id
            title
            slug
            ...LanderFeaturedMediaFragment
            uri
            dateGmt
            modifiedGmt
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
