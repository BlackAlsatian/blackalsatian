/** @jsxImportSource theme-ui */
import { Heading } from 'theme-ui'

const TestimonialsGrid = ({ children, heading }) => {
    return (
        <section
            sx={{
                px: [3, 3, 6],
                variant: 'sections.testimonials',
            }}
        >
            <div
                sx={{
                    width: '100%',
                    pb: 6,
                }}
            >
                <Heading as='h3' sx={{ ml: [4, 4, 0], fontSize: 5, fontWeight: 'normal' }}>
                    {heading}
                </Heading>
            </div>
            <div
                sx={{
                    width: '100%',
                    columnCount: [1, 2, 3],
                    columnGap: 4,
                    counterReset: 'item-counter',
                    px: 3,
                }}
            >
                {children}
            </div>
        </section>
    )
}

export default TestimonialsGrid
