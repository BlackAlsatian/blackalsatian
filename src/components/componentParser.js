import React, { Fragment } from 'react'
import { randomID } from '../components/helpers'
import CustomBlock from '../components/customBlock'

const ComponentParser = (props) => {
    const { blocks, featuredImage } = props

    return (
        <>
            {blocks &&
                blocks.map(({ __typename, attributes, innerBlocks }) => (
                    <Fragment key={randomID()}>
                        <CustomBlock
                            customBlock={__typename}
                            featuredImage={featuredImage}
                            innerBlocks={innerBlocks}
                            attributes={attributes}
                        />
                    </Fragment>
                ))}
        </>
    )
}
export default ComponentParser
