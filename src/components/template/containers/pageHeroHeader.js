/** @jsxImportSource theme-ui */
import React from 'react'
import { Flex } from 'theme-ui'

const PageHeroHeader = ({ children, containerVariant }) => {
    return (
        <Flex
            as='section'
            sx={{
                position: 'relative',
                variant: 'sections.pageHeaders.' + containerVariant,
            }}
        >
            {children}
        </Flex>
    )
}

export default React.memo(PageHeroHeader)
