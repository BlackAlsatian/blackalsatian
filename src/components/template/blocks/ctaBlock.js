import React from 'react'
import BlockSection from '../blockSection'

const CTABlock = ({
    anchor,
    backgroundColor,
    buttonBackground,
    buttonName,
    buttonUrl,
    color,
    heading,
    option,
    text,
    title,
}) => {
    // const { anchor, backgroundColor, buttonBackground, buttonName, buttonUrl, color, heading, option, text, title } =
    //     props

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
