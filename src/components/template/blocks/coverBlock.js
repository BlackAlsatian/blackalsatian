/** @jsxImportSource theme-ui */

import HeroBlock from './heroBlock'
import CTABlock from './ctaBlock'

const CoverBlock = (props) => {
    const { attributes, innerBlocks, featuredImage } = props
    if (innerBlocks[0].name === 'blackalsatian/hero-block') {
        return (
            <HeroBlock
                featuredImage={featuredImage}
                color={innerBlocks[0].attributes.heroFontColor}
                title={innerBlocks[0].attributes.heroTitle}
                intro={innerBlocks[0].attributes.heroIntro}
            />
        )
    }
    return (
        <CTABlock
            anchor={attributes.anchor}
            backgroundColor={attributes.overlayColor}
            buttonBackground={innerBlocks[0].attributes.buttonBackgroundColor}
            buttonName={innerBlocks[0].attributes.buttonName}
            buttonUrl={innerBlocks[0].attributes.buttonUrl}
            color={innerBlocks[0].attributes.color}
            heading={innerBlocks[0].attributes.heading}
            option={innerBlocks[0].attributes.option}
            text={innerBlocks[0].innerBlocks}
            title={innerBlocks[0].attributes.title}
        />
    )
}

export default CoverBlock
