import React from 'react'
import BlockSection from '../blockSection'

const CTABlock = (props) => {
    const {
        backgroundColor,
        color,
        anchor,
        title,
        heading,
        text,
        buttonBackground,
        buttonName,
        buttonUrl,
    } = props
    return (
        <BlockSection
            backgroundColor={backgroundColor}
            color={color}
            anchor={anchor}
            heading={heading}
            title={title}
            text={text}
            buttonBackground={buttonBackground}
            buttonName={buttonName}
            buttonUrl={buttonUrl}
        />
    )
}

export default CTABlock
