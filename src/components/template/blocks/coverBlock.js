/** @jsx jsx */
import { jsx } from 'theme-ui'
import HeroBlock from './heroBlock'
import CTABlock from './ctaBlock'

const CoverBlock = props => {
  const { attributes, featuredImage, innerBlocks } = props
  if (innerBlocks[0].name === 'blackalsatian/hero-block') {
    return (
      <HeroBlock
        backgroundImage={featuredImage}
        color={innerBlocks[0].attributes.heroFontColor}
        anchor={attributes.anchor}
        title={innerBlocks[0].attributes.heroTitle}
        intro={innerBlocks[0].attributes.heroIntro}
        heading={innerBlocks[0].attributes.heading}
      />
    )
  }
  return (
    <CTABlock
      backgroundColor={attributes.overlayColor}
      color={innerBlocks[0].attributes.color}
      anchor={attributes.anchor}
      title={innerBlocks[0].attributes.title}
      heading={innerBlocks[0].attributes.heading}
      text={innerBlocks[0].innerBlocks}
      buttonBackground={innerBlocks[0].attributes.buttonBackgroundColor}
      buttonName={innerBlocks[0].attributes.buttonName}
      buttonUrl={innerBlocks[0].attributes.buttonUrl}
    />
  )
}

export default CoverBlock
