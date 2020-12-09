/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import parse from 'html-react-parser'

const HeroBlock = props => {
  const { backgroundImage, color, anchor, title, intro } = props
  return (
    <section
      sx={{
        display: 'flex',
        // width: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        flexDirection: 'column',
        minHeight: '100vh',
        color: `${color}`,
        pt: '40vh',
        zIndex: 5,
      }}
      id={anchor}
    >
      <Container p={4}>
        <Heading
          as='h1'
          sx={{
            fontSize: [8, 9],
            // lineHeight: 'heading',
            // my: 0,
          }}
        >
          {title}
        </Heading>
        <p sx={{ fontSize: [3, 4], my: 0 }}>{parse(intro)}</p>
      </Container>
    </section>
  )
}

export default HeroBlock
