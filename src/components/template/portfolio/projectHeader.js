/** @jsxImportSource theme-ui */
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { Box, Container, Flex, Heading } from 'theme-ui'
import safeParse from '../../../utils/safeParse'
import { removeTags } from '../../helpers'
import AnimatedSwipeButton from '../elements/animatedSwipeButton'

const ProjectHeader = ({ project }) => {
    const featuredImage = {
        fluid: project.featuredImage?.node?.main,
        alt: project.featuredImage?.node?.altText || '',
    }
    return (
        <Flex
            as='section'
            sx={{
                flexDirection: 'column',
                minHeight: '40vh',
                pt: '10vh',
                pb: 0,
                variant: 'main.black',
            }}
        >
            <Flex
                sx={{
                    justifyContent: 'space-between',
                    flexDirection: ['column', 'column', 'row'],
                    px: [4, 4, 5],
                }}
            >
                <Heading
                    as='h1'
                    sx={{
                        fontSize: [6, 8],
                        textShadow: 'none',
                        pr: 5,
                    }}
                >
                    {safeParse(project.title)}
                </Heading>
                <Box
                    as='div'
                    sx={{
                        pl: 5,
                        textAlign: 'right',
                    }}
                >
                    {safeParse(project.excerpt)}
                </Box>
            </Flex>
            <Box
                as='div'
                px={[4, 4, 5]}
                py={[3, 3, null]}
                sx={{
                    width: 'full',
                }}
            >
                <AnimatedSwipeButton
                    name='← Back to Portfolio'
                    url='/portfolio/'
                    direction='left'
                    swipeColor='#111827'
                    linkRelation='back'
                    backgroundColor='transparent'
                    textColor='white'
                    hoverColor='#f5df4d'
                    replace
                />
            </Box>
            <Container p={[3, 3, 4]}>
                {featuredImage?.fluid && (
                    <GatsbyImage image={featuredImage.fluid} alt={featuredImage.alt || removeTags(project.title)} />
                )}
            </Container>
        </Flex>
    )
}

ProjectHeader.propTypes = {
    project: PropTypes.object,
}

export default ProjectHeader
