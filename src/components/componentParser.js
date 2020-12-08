import React, { Fragment } from 'react'
import { randomID } from '../components/helpers'

import CoverBlock from '../components/template/blocks/coverBlock'
import ContentBlock from '../components/template/blocks/contentBlock'
import TestimonialsBlock from '../components/template/blocks/testimonialsBlock'
import FeaturedProjectsBlock from '../components/template/blocks/featuredProjects'
import ServicesBlock from '../components/template/blocks/servicesBlock'
import LatestPostsBlock from '../components/template/blocks/latestPostsBlock'

export default function ComponentParser(props) {
  const { blocks, featuredImage } = props
  const featuredImageSrc =
    featuredImage.node.localFile.childImageSharp.fluid.src
  // console.log(blocks)

  //######## iterate through blocks
  // const convertBlockProps = block => {
  // get all object keys and iterate over them
  // Object.entries(block).forEach(([key, value]) => {
  // if (key.includes("Fields")) {
  //   block.page = block[key]
  //   delete block[key]
  // }
  // console.log(`${key}: ${value}`)
  // })

  // return { block }
  // }

  // convertBlockProps(block)
  //########

  return (
    <Fragment>
      {blocks &&
        blocks.map(({ __typename, attributes, innerBlocks }) => (
          <Fragment key={randomID()}>
            {__typename === 'WpCoreCoverBlock' && (
              <CoverBlock
                featuredImage={featuredImageSrc}
                attributes={attributes}
                innerBlocks={innerBlocks}
              />
            )}
            {__typename === 'WpBlackalsatianContentBlock' && (
              <ContentBlock attributes={attributes} innerBlocks={innerBlocks} />
            )}
            {__typename === 'WpBlackalsatianServicesBlock' && <ServicesBlock />}
            {__typename === 'WpBlackalsatianLatestPostsBlock' && (
              <LatestPostsBlock />
            )}
            {__typename === 'WpBlackalsatianFeaturedProjectsBlock' && (
              <FeaturedProjectsBlock />
            )}
            {__typename === 'WpBlackalsatianTestimonialsBlock' && (
              <TestimonialsBlock />
            )}
          </Fragment>
        ))}
    </Fragment>
  )
}
