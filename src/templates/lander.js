import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import { useContext, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import Modules from '../components/modules'
import { PageStyleContext } from '../components/pageStyleProvider'
import SEO from '../components/seo'
import HeroBlock from '../components/template/blocks/heroBlock'

const LanderTemplate = ({ data: { lander } }) => {
    const seoImgSrc = getSrc(lander.featuredImage?.node?.og)
    const { setPageStyle } = useContext(PageStyleContext)

    const pageStyle = 'default'

    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle, setPageStyle])

    const HeroAttributes = lander.blocks[0].innerBlocks[0].attributes
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
            {lander.blocks && <Modules blockmodules={lander.blocks} />}
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

LanderTemplate.propTypes = {
    data: PropTypes.object,
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
