/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading } from 'theme-ui'
import BlockText from '../blockText'
import { getForm } from '../getForm'

export default function ContentBlock(props) {
    const backgroundColor = props.backgroundColor
    const color = props.color
    const anchor = props.anchor
    const heading = props.heading
    const title = props.title
    const text = props.text
    const option = props.option
    const buttonBackground = props.buttonBackground
    const buttonName = props.buttonName
    const buttonUrl = props.buttonUrl

    return (
        <section
            sx={{
                backgroundColor: `${backgroundColor || 'white'}`,
                color: `${color || 'black'}`,
                width: '100%',
                py: 6,
                minHeight: '100vh',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
            }}
            id={anchor}
        >
            <Container px={1}>
                <Flex
                    sx={{
                        flexDirection: ['column', 'column', 'row'],
                    }}
                >
                    <Box
                        p={[5, 5, 3, 6]}
                        sx={{
                            textAlign: ['left', 'left', 'right'],
                            flex: [null, null, 1],
                            width: ['100%', null],
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            borderRight: [
                                0,
                                0,
                                `1px solid ${color || 'black'}`,
                            ],
                        }}
                    >
                        <Heading
                            sx={{
                                fontSize: [4, 3, 4, 5],
                                fontWeight: 'thin',
                                lineHeight: 1,
                                mb: 4,
                                letterSpacing: 'tighter',
                            }}
                        >
                            {heading}
                        </Heading>
                        <Heading
                            as='h4'
                            sx={{
                                textTransform: 'uppercase',
                                fontSize: 0,
                                mt: [4, 4, 0],
                                ml: ['auto', 'auto', null],
                            }}
                        >
                            {title}
                        </Heading>
                    </Box>
                    <Box
                        py={5}
                        px={6}
                        sx={{
                            flex: [null, null, 3],
                            width: ['100%', null],
                        }}
                    >
                        <BlockText text={text} />
                        {buttonName &&
                            option !== 'none' &&
                            getForm(
                                option,
                                buttonName,
                                buttonUrl,
                                backgroundColor,
                                buttonBackground,
                            )}
                    </Box>
                </Flex>
            </Container>
        </section>
    )
}
