import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import MasonryGridWrapper from '../containers/masonryGridWrapper'
import TestimonialTile from '../elements/testimonialTile'

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
        <MasonryGridWrapper heading={heading} background='yellow'>
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
        </MasonryGridWrapper>
    )
}

export default TestimonialsBlock
