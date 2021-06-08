import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react'

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: '0 auto', // Used to center the image
      },
    }
  }

  return <GatsbyImage {...normalizedProps} />;
}

export default NonStretchedImage
