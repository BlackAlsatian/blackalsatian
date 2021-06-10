/** @jsxImportSource theme-ui */

import React from 'react'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import ComponentParser from '../components/componentParser'
import SEO from '../components/seo'

const LanderTemplate = ({ data: { lander } }) => {
    const seoImgSrc = getSrc(lander.featuredImage?.node?.og)
    return (
        <>
            <SEO
                title={lander.title}
                description={lander.seo.metaDesc}
                url={lander.uri}
                featuredImage={seoImgSrc && seoImgSrc}
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
