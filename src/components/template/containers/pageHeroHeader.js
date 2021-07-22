/** @jsxImportSource theme-ui */
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

export default PageHeroHeader
