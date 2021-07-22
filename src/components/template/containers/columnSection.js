/** @jsxImportSource theme-ui */
import { Container, Flex } from 'theme-ui'

const ColumnSection = ({ children, props, sectionVariant }) => {
    return (
        <Flex
            as='section'
            {...props}
            sx={{
                py: [5, 5, 6],
                variant: sectionVariant,
            }}
        >
            <Container px={1}>
                <Flex
                    sx={{
                        flexDirection: ['column', 'column', 'row'],
                    }}
                >
                    {children}
                </Flex>
            </Container>
        </Flex>
    )
}

export default ColumnSection