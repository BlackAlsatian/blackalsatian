/** @jsxImportSource theme-ui */
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
    return (
        <TestimonialsGrid heading={heading}>
            {testimonials.nodes.map((testimonial) => {
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
        </TestimonialsGrid>
    )
}

export default TestimonialsBlock
