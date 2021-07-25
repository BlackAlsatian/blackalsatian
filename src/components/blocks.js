import loadable from '@loadable/component'

// import CoverBlock from './template/blocks/coverBlock'
// import ContentBlock from './template/blocks/contentBlock'
// import TestimonialsBlock from './template/blocks/testimonialsBlock'
// import FeaturedProjectsBlock from './template/blocks/featuredProjects'
// import ServicesBlock from './template/blocks/servicesBlock'
// import LatestPostsBlock from './template/blocks/latestPostsBlock'

const blocks = {
    // 'core/cover': CoverBlock,
    // 'blackalsatian/content-block': ContentBlock,
    // 'blackalsatian/services-block': ServicesBlock,
    // 'blackalsatian/latest-posts': LatestPostsBlock,
    // 'blackalsatian/featured-projects': FeaturedProjectsBlock,
    // 'blackalsatian/testimonials-block': TestimonialsBlock,

    WpCoreCoverBlock: loadable(() => import('./template/blocks/coverBlock')),
    WpBlackalsatianContentBlock: loadable(() => import('./template/blocks/contentBlock')),
    WpBlackalsatianServicesBlock: loadable(() => import('./template/blocks/servicesBlock')),
    WpBlackalsatianLatestPostsBlock: loadable(() => import('./template/blocks/latestPostsBlock')),
    WpBlackalsatianFeaturedProjectsBlock: loadable(() => import('./template/blocks/featuredProjects')),
    WpBlackalsatianTestimonialsBlock: loadable(() => import('./template/blocks/testimonialsBlock')),
}

export default blocks

// WpCoreCoverBlock
// WpBlackalsatianContentBlock
// WpBlackalsatianServicesBlock
// WpBlackalsatianLatestPostsBlock
// WpBlackalsatianFeaturedProjectsBlock
// WpBlackalsatianTestimonialsBlock
//
// 'core/cover': loadable(() => import('./template/blocks/coverBlock')),
// 'blackalsatian/content-block': loadable(() => import('./template/blocks/contentBlock')),
// 'blackalsatian/services-block': loadable(() => import('./template/blocks/servicesBlock')),
// 'blackalsatian/latest-posts': loadable(() => import('./template/blocks/latestPostsBlock')),
// 'blackalsatian/featured-projects': loadable(() => import('./template/blocks/featuredProjects')),
// 'blackalsatian/testimonials-block': loadable(() => import('./template/blocks/testimonialsBlock')),
