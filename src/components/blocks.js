import CoverBlock from '../components/template/blocks/coverBlock'
import ContentBlock from '../components/template/blocks/contentBlock'
import TestimonialsBlock from '../components/template/blocks/testimonialsBlock'
import FeaturedProjectsBlock from '../components/template/blocks/featuredProjects'
import ServicesBlock from '../components/template/blocks/servicesBlock'
import LatestPostsBlock from '../components/template/blocks/latestPostsBlock'

const CUSTOM_BLOCKS = {
    'core/cover': CoverBlock,
    'blackalsatian/content-block': ContentBlock,
    'blackalsatian/services-block': ServicesBlock,
    'blackalsatian/latest-posts': LatestPostsBlock,
    'blackalsatian/featured-projects': FeaturedProjectsBlock,
    'blackalsatian/testimonials-block': TestimonialsBlock,
}

export default CUSTOM_BLOCKS

// WpCoreCoverBlock: CoverBlock,
// WpBlackalsatianContentBlock: ContentBlock,
// WpBlackalsatianServicesBlock: ServicesBlock,
// WpBlackalsatianLatestPostsBlock: LatestPostsBlock,
// WpBlackalsatianFeaturedProjectsBlock: FeaturedProjectsBlock,
// WpBlackalsatianTestimonialsBlock: TestimonialsBlock,
