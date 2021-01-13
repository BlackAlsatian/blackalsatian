import React, { Fragment } from 'react'
import { randomID } from '../components/helpers'
// import { motion } from 'framer-motion'

// import CoverBlock from '../components/template/blocks/coverBlock'
// import HeroBlock from '../components/template/blocks/heroBlock'
// import CTABlock from '../components/template/blocks/ctaBlock'
import HeroBlock from './template/blocks/heroBlock'
import CTABlock from './template/blocks/ctaBlock'
import ContentBlock from '../components/template/blocks/contentBlock'
import TestimonialsBlock from '../components/template/blocks/testimonialsBlock'
import FeaturedProjectsBlock from '../components/template/blocks/featuredProjects'
import ServicesBlock from '../components/template/blocks/servicesBlock'
import LatestPostsBlock from '../components/template/blocks/latestPostsBlock'

// const CUSTOM_BLOCKS = {
//     HeroBlock: HeroBlock,
//     CTABlock: CTABlock,
//     ContentBlock: ContentBlock,
//     TestimonialsBlock: TestimonialsBlock,
//     FeaturedProjectsBlock: FeaturedProjectsBlock,
//     ServicesBlock: ServicesBlock,
//     LatestPostsBlock: LatestPostsBlock,
// }
//
// const CustomBlock = ({ customBlock }) => {
//     const CustomBlockComponent = CUSTOM_BLOCKS[customBlock.key]
//     if (!CustomBlockComponent) {
//         return null
//     }
//     return (
//         <CustomBlockComponent
//             customBlock={customBlock}
//             featuredImage={customBlock.key === HeroBlock ? featuredImage : null}
//             innerBlocks={customBlock.key === HeroBlock || customBlock.key === CTABlock ? innerBlocks : null}
//             attributes={customBlock.key === CTABlock ? attributes : null}
//         />
//     )
// }
//
// export default CustomBlock

const ComponentParser = (props) => {
    const { blocks, featuredImage } = props
    return (
        <>
            {blocks &&
                blocks.map(({ __typename, attributes, innerBlocks }) => (
                    <Fragment key={randomID()}>
                        {
                            __typename === 'WpCoreCoverBlock' &&
                                (innerBlocks[0].name === 'blackalsatian/hero-block' ? (
                                    <HeroBlock
                                        featuredImage={featuredImage}
                                        // attributes={attributes}
                                        innerBlocks={innerBlocks}
                                    />
                                ) : (
                                    <CTABlock attributes={attributes} innerBlocks={innerBlocks} />
                                ))
                            //<CoverBlock
                            //   featuredImage={featuredImage}
                            //   attributes={attributes}
                            //   innerBlocks={innerBlocks}
                            // />
                        }
                        {__typename === 'WpBlackalsatianContentBlock' && (
                            <ContentBlock attributes={attributes} innerBlocks={innerBlocks} />
                        )}
                        {__typename === 'WpBlackalsatianServicesBlock' && (
                            // <Profiler id='servicesblock' onRender={callback}>
                            <ServicesBlock />
                            // </Profiler>
                        )}
                        {__typename === 'WpBlackalsatianLatestPostsBlock' && <LatestPostsBlock />}
                        {__typename === 'WpBlackalsatianFeaturedProjectsBlock' && <FeaturedProjectsBlock />}
                        {__typename === 'WpBlackalsatianTestimonialsBlock' && <TestimonialsBlock />}
                    </Fragment>
                ))}
        </>
    )
}
export default ComponentParser
