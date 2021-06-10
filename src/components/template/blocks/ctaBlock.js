import React from 'react'
import BlockSection from '../blockSection'

const CTABlock = (props) => {
    const { anchor, overlayColor } = props.attributes
    const { color, title, heading, option, buttonBackgroundColor, buttonName, buttonUrl } =
        props.innerBlocks[0].attributes
    const { innerBlocks } = props.innerBlocks[0]
    return (
        <BlockSection
            backgroundColor={overlayColor}
            color={color}
            anchor={anchor}
            heading={heading}
            title={title}
            text={innerBlocks}
            option={option}
            buttonBackground={buttonBackgroundColor}
            buttonName={buttonName}
            buttonUrl={buttonUrl}
        />
    )
}

export default CTABlock
