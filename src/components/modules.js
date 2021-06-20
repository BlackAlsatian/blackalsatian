import React, { useCallback } from 'react'
import CoverBlock from '../components/template/blocks/coverBlock'
import ContentBlock from '../components/template/blocks/contentBlock'
import TestimonialsBlock from '../components/template/blocks/testimonialsBlock'
import FeaturedProjectsBlock from '../components/template/blocks/featuredProjects'
import ServicesBlock from '../components/template/blocks/servicesBlock'
import LatestPostsBlock from '../components/template/blocks/latestPostsBlock'

function Modules(props) {
    // console.log(props)
    const { attributes, featuredImage, innerBlocks, module } = props
    const components = {
        'core/cover': CoverBlock,
        'blackalsatian/content-block': ContentBlock,
        'blackalsatian/services-block': ServicesBlock,
        'blackalsatian/latest-posts': LatestPostsBlock,
        'blackalsatian/featured-projects': FeaturedProjectsBlock,
        'blackalsatian/testimonials-block': TestimonialsBlock,
    }

    const Module = components[module.name]
    if (!Module) {
        return null
    }

    const ModuleComponent = useCallback(() => {
        return (
            <Module attributes={attributes} featuredImage={featuredImage} innerBlocks={innerBlocks} module={module} />
        )
    }, [module])

    return <ModuleComponent />
}
export default React.memo(Modules)
