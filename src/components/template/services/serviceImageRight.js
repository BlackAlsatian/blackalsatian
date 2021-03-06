/** @jsxImportSource theme-ui */
import { Heading } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'

const ServiceImageRight = ({ image, name, description }) => {
    return (
        <div
            sx={{
                display: 'grid',
                gridGap: 4,
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
                    gridColumnStart: [1, 2],
                    gridColumnEnd: 5,
                    gridRowStart: 1,
                    gridRowEnd: 4,
                }}
            >
                {image?.fluid && (
                    <GatsbyImage
                        image={image.fluid}
                        alt={image.altText || name}
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
                    gridColumnStart: 1,
                    gridColumnEnd: [5, 3],
                    gridRowStart: 2,
                    gridRowEnd: [4, 3],
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    zIndex: 30,
                    borderRadius: 10,
                    p: [3, 3, 5],
                    textAlign: 'right',
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

export default ServiceImageRight
