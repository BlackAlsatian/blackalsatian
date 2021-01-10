/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import parse from 'html-react-parser'
import BackgroundImage from 'gatsby-background-image'

const HeroBlock = (props) => {
    const { featuredImage, color, anchor, title, intro } = props
    // const featuredImage = {featuredImage.node.localFile.childImageSharp.fluid}
    return (
        <BackgroundImage
            Tag='section'
            fluid={featuredImage.node.localFile.childImageSharp.fluid}
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                // backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: 'scroll',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
                flexDirection: 'column',
                minHeight: '100vh',
                color: `${color}`,
                pt: '55vh',
                zIndex: 0,
            }}
            id={anchor}
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
                    {title}
                </Heading>
                <p sx={{ fontSize: [3, 4], my: 0, textShadow: '0 0 3rem rgba(0, 0, 0, 0.5)' }}>{parse(intro)}</p>
            </Container>
        </BackgroundImage>
    )
}

export default HeroBlock
