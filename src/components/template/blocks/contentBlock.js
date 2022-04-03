import React from 'react'
import BlockSection from '../blockSection'

const ContentBlock = ({ attributes, innerBlocks }) => {
    // const { attributes, innerBlocks } = props
    // const heading = attributes.contentHeading
    // const title = attributes.contentTitle
    // const text = innerBlocks
    // return <BlockSection heading={heading} title={title} text={text} headerSize='h2' />
    return (
        <BlockSection
            heading={attributes.contentHeading}
            title={attributes.contentTitle}
            text={innerBlocks}
            backgroundColor='white'
        />
    )
}
export default ContentBlock
