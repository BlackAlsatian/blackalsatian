/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import ComponentParser from '../components/componentParser'
import SEO from '../components/seo'
import HeroBlock from '../components/template/blocks/heroBlock'

const LanderTemplate = ({ data: { lander } }) => {
    const heroAttributes = lander.blocks[0].innerBlocks[0].attributes
    return (
        <>
            <SEO
                title={lander.title}
                description={lander.seo.metaDesc}
                url={lander.uri}
                featuredImage={lander.featuredImage && lander.featuredImage.node.og.childImageSharp.fluid.src}
            />
            <HeroBlock
                featuredImage={lander.featuredImage}
                color={heroAttributes.heroFontColor}
                title={heroAttributes.heroTitle}
                intro={heroAttributes.heroIntro}
            />
            <ComponentParser blocks={lander.blocks} featuredImage={lander.featuredImage} />
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
