/** @jsx jsx */
import { jsx } from 'theme-ui'
import parse from 'html-react-parser'
import { Fragment } from 'react'
import { randomID } from '../../helpers'

const CTABlock = props => {
  const {
    backgroundColor,
    color,
    anchor,
    title,
    heading,
    text,
    buttonBackground,
    buttonName,
    buttonUrl,
  } = props
  return (
    <section
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        backgroundColor: `${backgroundColor}`,
        padding: '3rem',
        minHeight: '30vh',
        color: `${color}`,
      }}
      id={anchor}
    >
      <div
        sx={{
          padding: '1rem',
          minWidth: '25%',
        }}
      >
        <h4
          sx={{
            textTransform: 'uppercase',
            fontSize: '0.9rem',
            marginTop: 0,
          }}
        >
          {title}
        </h4>
      </div>
      <div
        sx={{
          padding: '1rem',
          fontSize: '1rem',
        }}
      >
        <h3
          sx={{
            fontSize: '2rem',
            marginTop: 0,
          }}
        >
          {heading}
        </h3>
        {text.map(({ copy }) => (
          <Fragment key={randomID()}>{parse(copy)}</Fragment>
        ))}
        <button
          sx={{
            backgroundColor: `${buttonBackground}`,
            color: '#fff',
          }}
        >
          {buttonName}
        </button>
        <p>({buttonUrl})</p>
      </div>
    </section>
  )
}

export default CTABlock
