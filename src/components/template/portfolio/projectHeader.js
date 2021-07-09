/** @jsxImportSource theme-ui */
import { Container, Heading, Flex, Box } from 'theme-ui'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { GatsbyImage } from 'gatsby-plugin-image'
import parse from 'html-react-parser'

const ProjectHeader = ({ previous, project, pageStyle }) => {
    const featuredImage = {
        fluid: project.featuredImage?.node?.main?.childImageSharp?.gatsbyImageData,
        alt: project.featuredImage?.node?.altText || ``,
    }
    return (
        <section
            sx={{
                flexDirection: 'column',
                minHeight: '40vh',
                pt: '10vh',
                pb: 0,
                variant: 'layout.main.' + pageStyle,
            }}
        >
            <Flex
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: ['column', 'column', 'row'],
                    px: [4, 4, 5],
                }}
            >
                <Heading
                    as='h1'
                    sx={{
                        fontSize: [6, 8],
                        lineHeight: 'none',
                        letterSpacing: 'tighter',
                        pr: 5,
                    }}
                >
                    {parse(project.title)}
                </Heading>
                <div
                    sx={{
                        pl: 5,
                        textAlign: 'right',
                    }}
                >
                    {parse(project.excerpt)}
                </div>
            </Flex>
            <Box
                mt={3}
                px={[null, null, 5]}
                py={[3, 3, null]}
                sx={{
                    width: 'full',
                }}
            >
                <AniLink
                    as='button'
                    cover
                    duration={0.5}
                    direction='left'
                    bg='#111827'
                    to={previous ? previous.uri : '/portfolio/'}
                    replace
                    rel='back'
                    title='Back'
                    sx={{
                        variant: 'buttons.simple',
                        backgroundColor: 'transparent',
                        color: 'white',
                        textDecoration: 'none',
                        boxShadow: 'xl',
                        transition: '200ms',
                        fontSize: 3,
                        fontWeight: 'black',
                        '&:hover': {
                            color: '#f5df4d !important',
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                        },
                        '&:visited, &:active, &:focus': {
                            color: 'white',
                        },
                    }}
                >
                    ← Back
                </AniLink>
            </Box>
            <Container p={[3, 3, 5]}>
                {featuredImage?.fluid && (
                    <GatsbyImage image={featuredImage.fluid} alt={featuredImage.alt || parse(project.title)} />
                )}
            </Container>
        </section>
    )
}

export default ProjectHeader
