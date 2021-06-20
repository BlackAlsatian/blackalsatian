/** @jsxImportSource theme-ui */
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import Modules from '../components/modules'
import SEO from '../components/seo'

const LanderTemplate = ({ data: { lander } }) => {
    const seoImgSrc = getSrc(lander.featuredImage?.node?.og)
    return (
        <>
            <SEO
                title={lander.title}
                description={lander.seo?.metaDesc}
                url={lander.uri}
                featuredImage={seoImgSrc && seoImgSrc}
                datePublished={lander.dateGmt}
                dateModified={lander.modifiedGmt}
            />
            {lander.blocks &&
                lander.blocks.map(({ name, order, attributes, innerBlocks }) => (
                    <Modules
                        key={order}
                        featuredImage={lander.featuredImage}
                        module={{ name: name, order: order }}
                        innerBlocks={innerBlocks}
                        attributes={attributes}
                    />
                ))}
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
            blocks {
                ...CoreCoverblock
                ...BlackalsatianContentBlock
            }
        }
    }
`
