/** @jsx jsx */
import { jsx, Container, Heading, Flex, Box } from 'theme-ui'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Image from 'gatsby-image'
import parse from 'html-react-parser'

function ProjectHeader({ previous, project, truncated }) {
    const featuredImage = {
        fluid: project.featuredImage?.node?.localFile?.childImageSharp?.fluid,
        alt: project.featuredImage?.node?.alt || ``,
    }
    return (
        <section
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: truncated ? '20vh' : '100vh',
                pt: truncated ? '5vh' : '10vh',
                maxHeight: truncated ? '600px' : null,
                overflow: truncated ? 'hidden' : null,
            }}
        >
            <Flex
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    px: 5,
                    color: 'white',
                    textDecoration: 'none',
                }}
            >
                <Heading
                    as='h1'
                    sx={{
                        fontSize: [7, 8],
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
            <Box px={5}>
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
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                        },
                    }}
                >
                    ← Back
                </AniLink>
            </Box>
            <Container p={5}>
                {featuredImage?.fluid && <Image fluid={featuredImage.fluid} alt={featuredImage.alt} />}
            </Container>
        </section>
    )
}

export default ProjectHeader
