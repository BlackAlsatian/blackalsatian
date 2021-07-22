/** @jsxImportSource theme-ui */
import { Flex, Heading } from 'theme-ui'
import MasonryGridViewAllLink from '../elements/masonryGridViewAllLink'

const MasonryGridWrapper = ({ children, heading, viewAllLink, background }) => {
    return (
        <Flex
            as='section'
            sx={{
                px: [1, 1, 6],
                py: [5, 5, 6],
                backgroundColor: background,
                variant: 'sections.masonryWrapper',
            }}
        >
            <div
                sx={{
                    variant: 'sections.masonryWrapper.header',
                }}
            >
                <Heading as='h3' sx={{ mx: [4, 4, 0] }}>
                    {heading}
                </Heading>
            </div>
            <div sx={{ columnCount: [1, 2, 3], variant: 'sections.masonryWrapper.grid' }}>{children}</div>
            {viewAllLink && (
                <div
                    sx={{
                        variant: 'sections.masonryWrapper.footer',
                    }}
                >
                    <MasonryGridViewAllLink url={viewAllLink} />
                </div>
            )}
        </Flex>
    )
}

export default MasonryGridWrapper