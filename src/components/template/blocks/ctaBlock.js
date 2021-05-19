import React from 'react'
import BlockSection from '../blockSection'

const CTABlock = (props) => {
    // console.log('ctablock:', props)
    const {
        anchor,
        backgroundColor,
        color,
        title,
        heading,
        option,
        buttonBackground,
        buttonName,
        buttonUrl,
        text,
    } = props
    const copy = text[0].innerBlocks
    // console.log('text from ctablock', copy)
    return (
        <BlockSection
            backgroundColor={backgroundColor}
            color={color}
            anchor={anchor}
            heading={heading}
            title={title}
            text={copy}
            option={option}
            buttonBackground={buttonBackground}
            buttonName={buttonName}
            buttonUrl={buttonUrl}
        />
    )
}

export default CTABlock
