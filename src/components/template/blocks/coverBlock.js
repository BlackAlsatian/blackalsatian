/** @jsx jsx */
import { jsx } from 'theme-ui'
// import HeroBlock from './heroBlock'
import CTABlock from './ctaBlock'

const CoverBlock = (props) => {
    // console.log('CoverBlock:', props)
    const { attributes, innerBlocks } = props
    const block = innerBlocks[0]
    if (block.name === 'blackalsatian/hero-block') {
        // console.log('cover block')
        return null
        // (
        //     <HeroBlock
        //         featuredImage={featuredImage}
        //         color={block.attributes.heroFontColor}
        //         title={block.attributes.heroTitle}
        //         intro={block.attributes.heroIntro}
        //     />
        // )
    }
    return (
        <CTABlock
            backgroundColor={attributes.overlayColor}
            color={block.attributes.color}
            anchor={attributes.anchor}
            title={block.attributes.title}
            heading={block.attributes.heading}
            text={innerBlocks}
            option={block.attributes.option}
            buttonBackground={block.attributes.buttonBackgroundColor}
            buttonName={block.attributes.buttonName}
            buttonUrl={block.attributes.buttonUrl}
        />
    )
}

export default CoverBlock
