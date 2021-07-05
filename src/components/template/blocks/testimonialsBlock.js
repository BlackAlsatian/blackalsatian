/** @jsxImportSource theme-ui */
import { useInView } from 'react-intersection-observer'
import { useStaticQuery, graphql } from 'gatsby'
import TestimonialTile from '../elements/testimonialTile'
import TestimonialsGrid from '../elements/testimonialsGrid'

const TestimonialsBlock = () => {
    const testimonialsData = useStaticQuery(graphql`
        query TestimonialQuery {
            allWpTestimonial {
                nodes {
                    id
                    title
                    content
                    uri
                    slug
                    testimonialRole
                    testimonialCompany
                    testimonialAuthor
                }
            }
        }
    `)
    const testimonials = testimonialsData.allWpTestimonial
    const heading = 'See What Our Clients Say...'
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px 0px 0px',
    })
    return (
        <TestimonialsGrid heading={heading}>
        <div
            sx={{
                width: '100%',
                height: '100%',
            }}
            ref={ref}
        >
            {inView && testimonials.nodes.map((testimonial) => {
                return (
                    <TestimonialTile
                        key={testimonial.id}
                        content={testimonial.content}
                        author={testimonial.testimonialAuthor}
                        role={testimonial.testimonialRole}
                        company={testimonial.testimonialCompany}
                    />
                )
            })}
            </div>
        </TestimonialsGrid>
    )
}

export default TestimonialsBlock
