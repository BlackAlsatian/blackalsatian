/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import parse from 'html-react-parser'
import BackgroundImage from 'gatsby-background-image'

const HeroBlock = (props) => {
    const { featuredImage } = props
    const { heroFontColor, heroTitle, heroIntro } = props.innerBlocks[0].attributes
    // const featuredImage = {featuredImage.node.localFile.childImageSharp.fluid}
    return (
        <BackgroundImage
            Tag='section'
            fluid={featuredImage.node.localFile.childImageSharp.fluid}
            backgroundColor='white'
            durationFadeIn={200}
            loading='eager'
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                // backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: 'scroll',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '60% 40%',
                flexDirection: 'column',
                minHeight: '100vh',
                color: `${heroFontColor}`,
                pt: ['45vh', '45vh', '55vh'],
                zIndex: 0,
            }}
        >
            <Container p={4}>
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
        </BackgroundImage>
    )
}

export default HeroBlock
