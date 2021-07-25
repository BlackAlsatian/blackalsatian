/** @jsxImportSource theme-ui */
import React from 'react'
import { Container, Flex } from 'theme-ui'

const ColumnSection = ({ children, props, sectionVariant }) => {
    return (
        <Flex
            as='section'
            {...props}
            sx={{
                py: 6,
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

export default React.memo(ColumnSection)
