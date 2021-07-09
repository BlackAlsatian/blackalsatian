/** @jsxImportSource theme-ui */
import { Heading } from 'theme-ui'

const TestimonialsGrid = ({ children, heading }) => {
    return (
        <section
            sx={{
                px: [1, 1, 6],
                py: [5, 5, 6],
                backgroundColor: 'yellow',
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
        </section>
    )
}

export default TestimonialsGrid
