/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading } from 'theme-ui'
import { Fragment } from 'react'
import parse from 'html-react-parser'
import { randomID } from '../../helpers'

export default function ContentBlock(props) {
  const { attributes, innerBlocks } = props
  return (
    <section
      sx={{
        width: '100%',
        backgroundColor: 'white',
        py: 5,
        minHeight: '30vh',
        color: 'black',
        zIndex: 15,
      }}
      id={attributes.anchor}
    >
      <Container px={1}>
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
          }}
        >
          <Box
            p={[5, 2, 3, 5]}
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
              sx={{
                fontSize: [4, 3, 4, 5],
                // marginTop: 0,
                fontWeight: 'light',
                lineHeight: 1,
              }}
            >
              {attributes.contentHeading}
            </Heading>
            <Heading
              as='h4'
              sx={{
                textTransform: 'uppercase',
                fontSize: 0,
                // marginTop: 0,
              }}
            >
              {attributes.contentTitle}
            </Heading>
          </Box>
          <Box
            p={5}
            sx={{
              flex: [null, 3, 3],
              width: ['100%', null],
            }}
          >
            {innerBlocks.map(({ copy }) => (
              <Fragment key={randomID()}>{parse(copy)}</Fragment>
            ))}
          </Box>
        </Flex>
      </Container>
    </section>
  )
}
