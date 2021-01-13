import React from 'react'
import BlockSection from '../blockSection'

export default function ContentBlock(props) {
    const { attributes, innerBlocks } = props
    // const backgroundColor = null
    // const color = null
    // const anchor = null
    const heading = attributes.contentHeading
    const title = attributes.contentTitle
    const text = innerBlocks
    // const buttonBackground = null
    // const buttonName = null
    // const buttonUrl = null
    return (
        <BlockSection
            // backgroundColor={backgroundColor}
            // color={color}
            // anchor={anchor}
            heading={heading}
            title={title}
            text={text}
            headerSize='h2'
            // buttonBackground={buttonBackground}
            // buttonName={buttonName}
            // buttonUrl={buttonUrl}
        />
    )
}
