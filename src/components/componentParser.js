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
    const { blocks, featuredImage } = props
    return (
        <>
            {blocks &&
                blocks.map(({ __typename, attributes, innerBlocks }) => (
                    <Fragment key={randomID()}>
                        {__typename === 'WpCoreCoverBlock' &&
                            (innerBlocks[0].name === 'blackalsatian/hero-block' ? (
                                <HeroBlock featuredImage={featuredImage} innerBlocks={innerBlocks} />
                            ) : (
                                <CTABlock attributes={attributes} innerBlocks={innerBlocks} />
                            ))}
                        {__typename === 'WpBlackalsatianContentBlock' && (
                            <ContentBlock attributes={attributes} innerBlocks={innerBlocks} />
                        )}
                        {__typename === 'WpBlackalsatianServicesBlock' && (
                            <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
                                <ServicesBlock />
                            </LazyLoad>
                        )}
                        {__typename === 'WpBlackalsatianLatestPostsBlock' && (
                            <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
                                <LatestPostsBlock />
                            </LazyLoad>
                        )}
                        {__typename === 'WpBlackalsatianFeaturedProjectsBlock' && (
                            <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
                                <FeaturedProjectsBlock />
                            </LazyLoad>
                        )}
                        {__typename === 'WpBlackalsatianTestimonialsBlock' && (
                            <LazyLoad height='100%' offSet={150} once placeholder={<PlaceholderLoader />}>
                                <TestimonialsBlock />
                            </LazyLoad>
                        )}
                    </Fragment>
                ))}
        </>
    )
}
export default ComponentParser
