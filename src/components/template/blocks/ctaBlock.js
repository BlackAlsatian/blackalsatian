/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading } from 'theme-ui'
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
        // display: 'flex',
        // alignItems: 'flex-start',
        width: '100%',
        backgroundColor: `${backgroundColor}`,
        py: 5,
        minHeight: '30vh',
        color: `${color}`,
        zIndex: 15,
      }}
      id={anchor}
    >
      <Container px={1}>
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
          }}
        >
          <Box
            p={[4, 2, 3, 5]}
            sx={{
              textAlign: 'right',
              flex: [null, 2, 1],
              width: ['100%', null],
              display: 'flex',
              // alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',

              borderRight: [0, '1px solid black'],
            }}
          >
            <Heading
              as='h3'
              sx={{
                fontSize: [4, 3, 4, 5],
                // marginTop: 0,
                fontWeight: 'light',
                lineHeight: 1,
              }}
            >
              {heading}
            </Heading>
            <Heading
              as='h4'
              sx={{
                textTransform: 'uppercase',
                fontSize: 0,
                // marginTop: 0,
              }}
            >
              {title}
            </Heading>
          </Box>
          <Box
            p={5}
            sx={{
              flex: [null, 3, 3],
              width: ['100%', null],
            }}
          >
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
          </Box>
        </Flex>
      </Container>

      {/* <div
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
      </div> */}
    </section>
  )
}

export default CTABlock
