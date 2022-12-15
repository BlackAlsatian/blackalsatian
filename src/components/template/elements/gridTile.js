/** @jsxImportSource theme-ui */
/* eslint-disable react/no-unknown-property */
import { Heading } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { getHeight } from '../../helpers'
import parse from 'html-react-parser'

const GridTile = ({ node, headerType }) => {
    const featuredImage = {
        fluid: node.featuredImage?.node?.tile,
        alt: node.featuredImage?.node?.altText || '',
    }
    return (
        <article
            sx={{
                height: getHeight(),
                position: 'relative',
                transition: 'all .25s ease 0s',
                breakInside: 'avoid',
                counterIncrement: 'item-counter',
                mt: 4,
                mb: 4,
                '&:first-of-type': {
                    mt: 0,
                },
                boxShadow: 'xl',
            }}
        >
            {featuredImage?.fluid && (
                <GatsbyImage
                    image={featuredImage.fluid}
                    alt={featuredImage.alt || node.title}
                    style={{
                        display: 'block',
                        position: 'relative',
                        height: '100%',
                    }}
                />
            )}
            <div
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    transition: 'background-color 200ms ease-in',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    },
                }}
            >
                <Heading as={headerType} sx={{ fontSize: 3 }}>
                    {node.title}
                </Heading>
                {node.date && <small>{node.date}</small>}
                {parse(node.excerpt)}
            </div>
        </article>
    )
}

GridTile.propTypes = {
    node: PropTypes.node,
    headerType: PropTypes.object,
}

export default GridTile
