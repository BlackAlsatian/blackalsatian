import React, { Fragment } from 'react'
import LazyLoad from 'react-lazyload'
import { randomID } from '../components/helpers'

import HeroBlock from './template/blocks/heroBlock'
import CTABlock from './template/blocks/ctaBlock'
import ContentBlock from '../components/template/blocks/contentBlock'
import TestimonialsBlock from '../components/template/blocks/testimonialsBlock'
import FeaturedProjectsBlock from '../components/template/blocks/featuredProjects'
import ServicesBlock from '../components/template/blocks/servicesBlock'
import LatestPostsBlock from '../components/template/blocks/latestPostsBlock'
import PlaceholderLoader from '../components/placeholderLoader'

const ComponentParser = (props) => {
    const { blocks, featuredImage, latestPosts, portfolio, services, testimonials } = props
    // console.log(services)
    return (
        <>
            {blocks &&
                blocks.map(({ name, attributes, innerBlocks }) => (
                    <Fragment key={randomID()}>
                        {/* {name === 'WpCoreCoverBlock' && */}
                        {name === 'core/cover' &&
                            (innerBlocks[0].name === 'blackalsatian/hero-block' ? (
                                <HeroBlock featuredImage={featuredImage} innerBlocks={innerBlocks} />
                            ) : (
                                <CTABlock attributes={attributes} innerBlocks={innerBlocks} />
                            ))}
                        {/* {__typename === 'WpBlackalsatianContentBlock' && ( */}
                        {name === 'blackalsatian/content-block' && (
                            <ContentBlock attributes={attributes} innerBlocks={innerBlocks} />
                        )}

                        {/* {__typename === 'WpBlackalsatianServicesBlock' && ( */}
                        {name === 'blackalsatian/services-block' && (
                            <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
                                <ServicesBlock services={services} />
                            </LazyLoad>
                        )}

                        {/* {__typename === 'WpBlackalsatianServicesBlock' && <ServicesBlock />} */}

                        {/* {__typename === 'WpBlackalsatianLatestPostsBlock' && ( */}
                        {name === 'blackalsatian/latest-posts' && (
                            <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
                                <LatestPostsBlock latestPosts={latestPosts} />
                            </LazyLoad>
                        )}

                        {/* {__typename === 'WpBlackalsatianLatestPostsBlock' && <LatestPostsBlock />} */}

                        {/* {__typename === 'WpBlackalsatianFeaturedProjectsBlock' && ( */}
                        {name === 'blackalsatian/featured-projects' && (
                            <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
                                <FeaturedProjectsBlock portfolio={portfolio} />
                            </LazyLoad>
                        )}

                        {/* {__typename === 'WpBlackalsatianFeaturedProjectsBlock' && <FeaturedProjectsBlock />} */}

                        {/* {__typename === 'WpBlackalsatianTestimonialsBlock' && ( */}
                        {name === 'blackalsatian/testimonials-block' && (
                            <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
                                <TestimonialsBlock testimonials={testimonials} />
                            </LazyLoad>
                        )}

                        {/* {__typename === 'WpBlackalsatianTestimonialsBlock' && <TestimonialsBlock />} */}
                    </Fragment>
                ))}
        </>
    )
}
export default ComponentParser
