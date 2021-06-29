/** @jsxImportSource theme-ui */
import { Container, Flex, Heading } from 'theme-ui'
import parse from 'html-react-parser'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const HeroBlock = ({ featuredImage, color, title, intro }) => {
    // const { featuredImage, color, title, intro } = props
    const featuredImageData = getImage(featuredImage.node.main)
    return (
        <Flex
            as='section'
            backgroundColor='white'
            sx={{
                position: 'relative',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                minHeight: '100vh',
                color: `${color}`,
            }}
        >
            <GatsbyImage
                image={featuredImageData}
                alt={featuredImage.node.altText}
                loading='eager'
                objectPosition='60% 40%'
                backgroundColor='#111827'
                sx={{
                    position: 'relative',
                    width: '100%',
                    minHeight: '100vh',
                    filter: 'brightness(80%)',
                }}
            />
            <Container p={4} sx={{ position: 'absolute', pt: ['45vh', '45vh', '55vh'], minHeight: '100vh' }}>
                <Heading
                    as='h1'
                    sx={{
                        fontSize: [7, 10],
                        letterSpacing: 'tighter',
                        textShadow: '0 0 4rem rgba(0, 0, 0, 0.5)',
                    }}
                >
                    {parse(title)}
                </Heading>
                <p sx={{ fontSize: [3, 4], my: 0, textShadow: '0 0 3rem rgba(0, 0, 0, 0.5)' }}>{parse(intro)}</p>
            </Container>
        </Flex>
    )
}

export default HeroBlock
