/** @jsx jsx */
import { jsx } from 'theme-ui'
import parse from 'html-react-parser'

const HeroBlock = props => {
  const { backgroundImage, color, anchor, title, intro } = props
  return (
    <section
      sx={{
        display: 'flex',
        width: '100%',
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
      <h1
        sx={{
          fontSize: 9,
          lineHeight: 'heading',
          my: 0,
        }}
      >
        {title}
      </h1>
      {parse(intro)}
    </section>
  )
}

export default HeroBlock
