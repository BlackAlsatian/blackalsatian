/** @jsxImportSource theme-ui */
import { Container, Flex, Box } from 'theme-ui'
import LazyLoad from 'react-lazyload'
import BlockText from '../blockText'
import { getForm } from '../getForm'
import LeftColumn from '../template/elements/leftColumn'
import PlaceholderLoader from '../../components/placeholderLoader'

const ContentBlock = (props) => {
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
    const headerSize = props.headerSize

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
                    <LeftColumn heading={heading} title={title} color={color} headerSize={headerSize} />
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
                        <LazyLoad height='100%' offSet={200} once placeholder={<PlaceholderLoader />}>
                            {buttonName &&
                                option !== 'none' &&
                                getForm(option, buttonName, buttonUrl, backgroundColor, buttonBackground)}
                        </LazyLoad>
                    </Box>
                </Flex>
            </Container>
        </section>
    )
}
export default ContentBlock
