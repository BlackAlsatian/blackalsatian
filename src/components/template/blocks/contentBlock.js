import React from 'react'
import BlockSection from '../blockSection'

const ContentBlock = (props) => {
    // console.log('contentblock:', props)
    const { attributes, innerBlocks } = props
    const heading = attributes.contentHeading
    const title = attributes.contentTitle
    const text = innerBlocks
    return <BlockSection heading={heading} title={title} text={text} headerSize='h2' />
}
export default ContentBlock
