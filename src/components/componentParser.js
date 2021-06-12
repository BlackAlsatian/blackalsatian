import React, { Fragment } from 'react'
// import LazyLoad from 'react-lazyload'
import { randomID } from '../components/helpers'

// import CoverBlock from './template/blocks/coverBlock'
// import ContentBlock from '../components/template/blocks/contentBlock'
// import TestimonialsBlock from '../components/template/blocks/testimonialsBlock'
// import FeaturedProjectsBlock from '../components/template/blocks/featuredProjects'
// import ServicesBlock from '../components/template/blocks/servicesBlock'
// import LatestPostsBlock from '../components/template/blocks/latestPostsBlock'
// import PlaceholderLoader from '../components/placeholderLoader'
import CustomBlock from '../components/customBlock'

const ComponentParser = (props) => {
    const { blocks, latestPosts, portfolio, services, testimonials, featuredImage } = props

    return (
        <>
            {blocks &&
                blocks.map(({ name, attributes, innerBlocks }) => (
                    <Fragment key={randomID()}>
                        <CustomBlock
                            customBlock={name}
                            featuredImage={featuredImage}
                            innerBlocks={innerBlocks}
                            attributes={attributes}
                            latestPosts={latestPosts}
                            portfolio={portfolio}
                            services={services}
                            testimonials={testimonials}
                        />
                    </Fragment>
                ))}
        </>
    )
}
export default ComponentParser

// import CoverBlock from './template/blocks/coverBlock'
// import ContentBlock from '../components/template/blocks/contentBlock'
// import TestimonialsBlock from '../components/template/blocks/testimonialsBlock'
// import FeaturedProjectsBlock from '../components/template/blocks/featuredProjects'
// import ServicesBlock from '../components/template/blocks/servicesBlock'
// import LatestPostsBlock from '../components/template/blocks/latestPostsBlock'
// import PlaceholderLoader from '../components/placeholderLoader'

// {/* {name === 'core/cover' &&
//                             (innerBlocks[0].name === 'blackalsatian/hero-block' ? (
//                                 <HeroBlock featuredImage={featuredImage} innerBlocks={innerBlocks} />
//                             ) : (
//                                 <CTABlock attributes={attributes} innerBlocks={innerBlocks} />
//                             ))} */}
//
//                             {name === 'core/cover' && (
//                                 <CoverBlock
//                                     attributes={attributes}
//                                     innerBlocks={innerBlocks}
//                                     featuredImage={featuredImage}
//                                 />
//                             )}
//
//                             {name === 'blackalsatian/content-block' && (
//                                 <ContentBlock attributes={attributes} innerBlocks={innerBlocks} />
//                             )}
//
//                             {/* {name === 'blackalsatian/services-block' && (
//                                 <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
//                                     <ServicesBlock services={services} />
//                                 </LazyLoad>
//                             )} */}
//
//                             {name === 'blackalsatian/services-block' && <ServicesBlock services={services} />}
//
//                             {/* {name === 'blackalsatian/latest-posts' && (
//                                 <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
//                                     <LatestPostsBlock latestPosts={latestPosts} />
//                                 </LazyLoad>
//                             )} */}
//
//                             {name === 'blackalsatian/latest-posts' && <LatestPostsBlock latestPosts={latestPosts} />}
//
//                             {name === 'blackalsatian/featured-projects' && (
//                                 <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
//                                     <FeaturedProjectsBlock portfolio={portfolio} />
//                                 </LazyLoad>
//                             )}
//
//                             {/* {name === 'blackalsatian/featured-projects' && <FeaturedProjectsBlock portfolio={portfolio} />} */}
//
//                             {name === 'blackalsatian/testimonials-block' && (
//                                 <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
//                                     <TestimonialsBlock testimonials={testimonials} />
//                                 </LazyLoad>
//                             )}
//
//                             {/* {name === 'blackalsatian/testimonials-block' && (
//                                 <TestimonialsBlock testimonials={testimonials} />
//                             )} */}
