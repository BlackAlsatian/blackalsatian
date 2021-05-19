import CoverBlock from '../components/template/blocks/coverBlock'
import ContentBlock from '../components/template/blocks/contentBlock'
import TestimonialsBlock from '../components/template/blocks/testimonialsBlock'
import FeaturedProjectsBlock from '../components/template/blocks/featuredProjects'
import ServicesBlock from '../components/template/blocks/servicesBlock'
import LatestPostsBlock from '../components/template/blocks/latestPostsBlock'
// import loadable from '@loadable/component'

const CUSTOM_BLOCKS = {
    WpCoreCoverBlock: CoverBlock,
    // WpCoreCoverBlock: loadable(() => import('../components/template/blocks/coverBlock')),
    WpBlackalsatianContentBlock: ContentBlock,
    // WpBlackalsatianContentBlock: loadable(() => import('../components/template/blocks/contentBlock')),
    WpBlackalsatianServicesBlock: ServicesBlock,
    // WpBlackalsatianServicesBlock: loadable(() => import('../components/template/blocks/servicesBlock')),
    WpBlackalsatianLatestPostsBlock: LatestPostsBlock,
    // WpBlackalsatianLatestPostsBlock: loadable(() => import('../components/template/blocks/latestPostsBlock')),
    WpBlackalsatianFeaturedProjectsBlock: FeaturedProjectsBlock,
    // WpBlackalsatianFeaturedProjectsBlock: loadable(() => import('../components/template/blocks/featuredProjects')),
    WpBlackalsatianTestimonialsBlock: TestimonialsBlock,
    // WpBlackalsatianTestimonialsBlock: loadable(() => import('../components/template/blocks/testimonialsBlock')),
}

export default CUSTOM_BLOCKS
