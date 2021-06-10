/** @jsxImportSource theme-ui */
import { Container, Heading } from 'theme-ui'
import parse from 'html-react-parser'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const HeroBlock = (props) => {
    const { featuredImage } = props

    const featuredImageData = getImage(featuredImage.node.main)
    const { heroFontColor, heroTitle, heroIntro } = props.innerBlocks[0].attributes
    return (
        <section
            backgroundColor='white'
            sx={{
                display: 'flex',
                position: 'relative',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                minHeight: '100vh',
                color: `${heroFontColor}`,
            }}
        >
            <GatsbyImage
                image={featuredImageData}
                alt={featuredImage.node.altText}
                fadeIn='false'
                loading='eager'
                objectPosition='60% 40%'
                backgroundColor='white'
                backgroundAttachment='scroll'
                backgroundRepeat='no-repeat'
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
                    {parse(heroTitle)}
                </Heading>
                <p sx={{ fontSize: [3, 4], my: 0, textShadow: '0 0 3rem rgba(0, 0, 0, 0.5)' }}>{parse(heroIntro)}</p>
            </Container>
        </section>
    )
}

export default HeroBlock
