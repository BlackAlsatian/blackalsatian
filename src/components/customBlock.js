import React from 'react'
import CUSTOM_BLOCKS from './blocks'

const CustomBlock = ({
    featuredImage,
    innerBlocks,
    attributes,
    customBlock,
    latestPosts,
    portfolio,
    services,
    testimonials,
}) => {
    const CustomBlockComponent = CUSTOM_BLOCKS[customBlock]
    if (!CustomBlockComponent) {
        return null
    }
    return (
        <CustomBlockComponent
            customBlock={customBlock}
            attributes={attributes}
            innerBlocks={innerBlocks}
            featuredImage={featuredImage}
            latestPosts={latestPosts}
            portfolio={portfolio}
            services={services}
            testimonials={testimonials}
        />
    )
}

export default CustomBlock
