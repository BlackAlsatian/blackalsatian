/** @jsxImportSource theme-ui */
import { Container, Heading, Flex, Box } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import AnimatedSwipeButton from '../elements/animatedSwipeButton'

const ProjectHeader = ({ project }) => {
    const featuredImage = {
        fluid: project.featuredImage?.node?.main?.childImageSharp?.gatsbyImageData,
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
                    {parse(project.title)}
                </Heading>
                <Box
                    as='div'
                    sx={{
                        pl: 5,
                        textAlign: 'right',
                    }}
                >
                    {parse(project.excerpt)}
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
                    <GatsbyImage image={featuredImage.fluid} alt={featuredImage.alt || parse(project.title)} />
                )}
            </Container>
        </Flex>
    )
}

export default ProjectHeader
