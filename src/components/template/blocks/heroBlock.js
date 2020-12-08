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
        backgroundRepeat: 'none',
        flexDirection: 'column',
        minHeight: '100vh',
        color: `${color}`,
      }}
      id={anchor}
    >
      <h1>{title}</h1>
      {parse(intro)}
    </section>
  )
}

export default HeroBlock
