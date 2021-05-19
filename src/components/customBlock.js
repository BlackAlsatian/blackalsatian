import React from 'react'
import CUSTOM_BLOCKS from './blocks'

const CustomBlock = ({ featuredImage, innerBlocks, attributes, customBlock }) => {
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
        />
    )
}

export default CustomBlock
