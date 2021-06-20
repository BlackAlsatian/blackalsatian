/** @jsxImportSource theme-ui */

import { useStaticQuery, graphql } from 'gatsby'
import { Heading } from 'theme-ui'
import parse from 'html-react-parser'
import LeftApostrophe from '../../icons/leftApostrophe'
import RightApostrophe from '../../icons/rightApostrophe'

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
        <section
            sx={{
                width: '100%',
                minHeight: '100vh',
                py: 6,
                px: [3, 3, 6],
                zIndex: 20,
                backgroundColor: 'yellow',
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
                {testimonials.nodes.map((testimonial) => {
                    const content = testimonial.content
                    return (
                        <div
                            key={testimonial.id}
                            sx={{
                                height: '100%',
                                position: 'relative',
                                transition: 'all .25s ease 0s',
                                breakInside: 'avoid',
                                counterIncrement: 'item-counter',
                                mt: 4,
                                mb: 4,
                                '&:first-of-type': {
                                    mt: 0,
                                },
                                boxShadow: 'xl',
                                display: 'block',
                            }}
                        >
                            <div
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    px: 4,
                                    py: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    color: 'white',
                                    backgroundColor: 'black',
                                    transition: 'background-color 200ms ease-in',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    },
                                }}
                            >
                                <LeftApostrophe color='white' width={28} height={28} />
                                {parse(content)}
                                <span sx={{ textAlign: 'right' }}>
                                    <RightApostrophe color='white' width={28} height={28} />
                                </span>

                                <small sx={{ textAlign: 'right', marginTop: 3 }}>
                                    <i>- {testimonial.testimonialAuthor}</i>
                                    {testimonial.testimonialRole && `, ${testimonial.testimonialRole}`}
                                    {testimonial.testimonialCompany && ` - ${testimonial.testimonialCompany}`}
                                </small>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TestimonialsBlock
