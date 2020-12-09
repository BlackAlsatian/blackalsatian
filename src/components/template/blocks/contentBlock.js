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
        py: 4,
        minHeight: '30vh',
        color: 'black',
        zIndex: 15,
      }}
      id={attributes.anchor}
    >
      <Container px={1}>
        <Flex>
          <Box
            p={3}
            sx={{
              textAlign: 'right',
              flex: '1',
            }}
          >
            <Heading
              sx={{
                fontSize: '2rem',
                marginTop: 0,
              }}
            >
              {attributes.contentHeading}
            </Heading>
            <Heading
              as='h4'
              sx={{
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                marginTop: 0,
              }}
            >
              {attributes.contentTitle}
            </Heading>
          </Box>
          <Box p={3} sx={{ flex: '3' }}>
            {innerBlocks.map(({ copy }) => (
              <Fragment key={randomID()}>{parse(copy)}</Fragment>
            ))}
          </Box>
        </Flex>
      </Container>
    </section>
  )
}
