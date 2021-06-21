import CoverBlock from './template/blocks/coverBlock'
import ContentBlock from './template/blocks/contentBlock'
import TestimonialsBlock from './template/blocks/testimonialsBlock'
import FeaturedProjectsBlock from './template/blocks/featuredProjects'
import ServicesBlock from './template/blocks/servicesBlock'
import LatestPostsBlock from './template/blocks/latestPostsBlock'

const blocks = {
    'core/cover': CoverBlock,
    'blackalsatian/content-block': ContentBlock,
    'blackalsatian/services-block': ServicesBlock,
    'blackalsatian/latest-posts': LatestPostsBlock,
    'blackalsatian/featured-projects': FeaturedProjectsBlock,
    'blackalsatian/testimonials-block': TestimonialsBlock,
}

export default blocks
