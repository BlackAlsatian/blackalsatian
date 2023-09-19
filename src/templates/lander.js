/* eslint-disable react/prop-types */
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { useContext, useLayoutEffect } from 'react'
import Layout from '../components/layout'
import Modules from '../components/modules'
import { PageStyleContext } from '../components/pageStyleProvider'
import SEO from '../components/seo'
import HeroBlock from '../components/template/blocks/heroBlock'

const LanderTemplate = ({ data: { lander } }) => {
    const { setPageStyle } = useContext(PageStyleContext)

    const pageStyle = 'default'

    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle, setPageStyle])

    const HeroAttributes = lander.blocks[0].innerBlocks[0].attributes
    return (
        <Layout>
            <HeroBlock
                featuredImage={lander.featuredImage}
                color={HeroAttributes.heroFontColor}
                title={HeroAttributes.heroTitle}
                intro={HeroAttributes.heroIntro}
            />
            {lander.blocks && <Modules blockmodules={lander.blocks} />}
        </Layout>
    )
}

LanderTemplate.propTypes = {
    data: PropTypes.object,
}

export default LanderTemplate

export const Head = ({ data: { lander } }) => {
    const seoImgSrc = getSrc(lander.featuredImage?.node?.main)
    return (
        <SEO
            title={lander.title}
            description={lander.seo?.metaDesc}
            url={lander.uri}
            featuredImage={seoImgSrc && seoImgSrc}
            datePublished={lander.dateGmt}
            dateModified={lander.modifiedGmt}
        />
    )
}

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
