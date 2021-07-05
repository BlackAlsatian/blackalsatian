/** @jsxImportSource theme-ui */
import { Container, Flex, Box } from 'theme-ui'
import LazyLoad from 'react-lazyload'
import BlockText from '../blockText'
import LeftColumn from '../template/elements/leftColumn'
import GetForm from '../getForm'

const ContentBlock = ({
    backgroundColor,
    // color,
    anchor,
    heading,
    title,
    text,
    option,
    buttonBackground,
    buttonName,
    buttonUrl,
    headerSize,
}) => {
    return (
        <section
            sx={{
                width: '100%',
                py: 6,
                minHeight: '100vh',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                variant: 'layout.block.' + backgroundColor,
            }}
            id={anchor}
        >
            <Container px={1}>
                <Flex
                    sx={{
                        flexDirection: ['column', 'column', 'row'],
                    }}
                >
                    <LeftColumn heading={heading} title={title} headerSize={headerSize} />
                    <Box
                        py={[4, 4, 5]}
                        px={[4, 4, 6]}
                        sx={{
                            flex: [null, null, 3],
                            width: ['100%', null],
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <BlockText text={text} />
                        {buttonName && option !== 'none' && (
                            <LazyLoad height='100%' offset={100} once>
                                <GetForm
                                    option={option}
                                    buttonName={buttonName}
                                    buttonUrl={buttonUrl}
                                    backgroundColor={backgroundColor}
                                    buttonBackground={buttonBackground}
                                    formStyle='inputs.background'
                                />
                            </LazyLoad>
                        )}
                    </Box>
                </Flex>
            </Container>
        </section>
    )
}
export default ContentBlock
