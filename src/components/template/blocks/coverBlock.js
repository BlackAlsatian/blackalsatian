/** @jsxImportSource theme-ui */
import HeroBlock from './heroBlock'
import CTABlock from './ctaBlock'

const CoverBlock = (props) => {
    const { attributes, innerBlocks, featuredImage } = props
    const block = innerBlocks[0]
    if (block.name === 'blackalsatian/hero-block') {
        return (
            <HeroBlock
                featuredImage={featuredImage}
                color={block.attributes.heroFontColor}
                title={block.attributes.heroTitle}
                intro={block.attributes.heroIntro}
            />
        )
    }
    return (
        <CTABlock
            anchor={attributes.anchor}
            backgroundColor={attributes.overlayColor}
            buttonBackground={block.attributes.buttonBackgroundColor}
            buttonName={block.attributes.buttonName}
            buttonUrl={block.attributes.buttonUrl}
            color={block.attributes.color}
            heading={block.attributes.heading}
            option={block.attributes.option}
            text={block.innerBlocks}
            title={block.attributes.title}
        />
    )
}

export default CoverBlock
