/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
// import React from 'react'
import Image from 'gatsby-image'
function ServiceImageLeft({ image, name, description }) {
    return (
        <div
            sx={{
                display: 'grid',
                gridGap: 4, // theme.space[4]
                // use arrays for mobile-first responsive styles
                gridTemplateColumns: [
                    'auto', // default to a stacked layout on small screens
                    '1fr 1fr 1fr 1fr', // use columns for larger screens
                ],
                gridAutoRows: '25vmin',
            }}
        >
            <div
                sx={{
                    gridColumnStart: 1,
                    gridColumnEnd: [5, 4],
                    gridRowStart: 1,
                    gridRowEnd: 4,
                }}
            >
                {image?.fluid && (
                    <Image
                        fluid={image.fluid}
                        alt={image.alt}
                        // style={{ marginBottom: 50 }}
                        sx={{
                            height: '100%',
                            width: '100%',
                            minHeight: '300px',
                        }}
                    />
                )}
            </div>
            <div
                sx={{
                    gridColumnStart: [1, 3],
                    gridColumnEnd: 5,
                    gridRowStart: 2,
                    gridRowEnd: [4, 3],
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    zIndex: 30,
                    borderRadius: 10,
                    p: [2, 2, 5],
                }}
            >
                <Heading>
                    <span itemProp='headline'>{name}</span>
                </Heading>
                {description}
            </div>
        </div>
    )
}

export default ServiceImageLeft
