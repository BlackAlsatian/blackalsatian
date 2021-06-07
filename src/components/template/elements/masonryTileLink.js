/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { getHeight } from '../../helpers'

const MasonryTileLink = ({ node }) => (
    <Link to={node.uri} key={node.id} title={node.title}>
        <div
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
            <Img
                fluid={node.featuredImage?.node.tile.childImageSharp.fluid}
                alt={node.featuredImage?.node.altText}
                style={{
                    display: 'block',
                    position: 'relative',
                    height: '100%',
                }}
            />
            <div
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    px: 4,
                    py: 5,
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
                <Heading as='h4' sx={{ fontSize: 3 }}>
                    {node.title}
                </Heading>
            </div>
        </div>
    </Link>
)

export default MasonryTileLink
