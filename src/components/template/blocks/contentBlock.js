/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import parse from 'html-react-parser'
import { randomID } from '../../helpers'

export default function ContentBlock(props) {
  const { attributes, innerBlocks } = props
  return (
    <section
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        backgroundColor: 'white',
        padding: '3rem',
        minHeight: '30vh',
        color: 'black',
        zIndex: 15,
      }}
      id={attributes.anchor}
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
          {attributes.contentTitle}
        </h4>
      </div>
      <div
        sx={{
          padding: '1rem',
          fontSize: '1rem',
        }}
      >
        <h2
          sx={{
            fontSize: '2rem',
            marginTop: 0,
          }}
        >
          {attributes.contentHeading}
        </h2>
        {innerBlocks.map(({ copy }) => (
          <Fragment key={randomID()}>{parse(copy)}</Fragment>
        ))}
      </div>
    </section>
  )
}
