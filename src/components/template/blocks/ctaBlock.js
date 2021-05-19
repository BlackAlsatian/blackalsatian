import React from 'react'
import BlockSection from '../blockSection'

const CTABlock = (props) => {
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
    return (
        <BlockSection
            backgroundColor={backgroundColor}
            color={color}
            anchor={anchor}
            heading={heading}
            title={title}
            text={text}
            option={option}
            buttonBackground={buttonBackground}
            buttonName={buttonName}
            buttonUrl={buttonUrl}
        />
    )
}

export default CTABlock
