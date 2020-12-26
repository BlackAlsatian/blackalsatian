/** @jsx jsx */
import { jsx, Flex, Container } from 'theme-ui'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// import { useTransition, animated, config } from 'react-spring'
import { useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'

import LeftArrow from '../../arrows/leftArrow'
import RightArrow from '../../arrows/rightArrow'

const TestimonialsBlock = () => {
    const data = useStaticQuery(graphql`
        query TestimonialQuery {
            allWpTestimonial {
                edges {
                    node {
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
        }
    `)
    const [node, setNode] = useState(0)

    const testimonials = data.allWpTestimonial.edges.map(({ node }) => (
        <div key={node.id} sx={{ px: 5, fontStyle: 'oblique' }}>
            {parse(node.content)}
            <p sx={{ textAlign: 'right' }}>
                <i>- {node.testimonialAuthor}</i>
                {node.testimonialRole && `, ${node.testimonialRole}`}
                {node.testimonialCompany && ` - ${node.testimonialCompany}`}
            </p>
        </div>
    ))

    // const testimonials = data.allWpTestimonial.edges.map(({ node }) => [
    //     {id: node.id, content: node.content, author: node.testimonialAuthor, role: node.testimonialRole, company: node.testimonialCompany}
    // ])

    const paginate = (newPage) => {
        if (newPage < 0) {
            setNode(testimonials.length - 1)
        } else if (newPage > testimonials.length - 1) {
            setNode(0)
        } else {
            setNode(newPage)
        }
    }

    // const [index, set] = useState(0)
    // const transitions = useTransition(testimonials[index], (item) => item.id, {
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 },
    //     config: config.molasses,
    // })
    // useEffect(
    //     () => void setInterval(() => set((state) => (state + 1) % 4), 2000),
    //     [],
    // )
    // return transitions.map(({ item, props, key }) => (
    //     <animated.div
    //         key={key}
    //         class='bg'
    //         sx={{ px: 5, fontStyle: 'oblique' }}
    //     >
    //         {parse(item.content)}
    //         <p sx={{ textAlign: 'right' }}>
    //             <i>- {item.author}</i>
    //             {item.role && `, ${item.role}`}
    //             {item.company && ` - ${item.company}`}
    //         </p>
    //     </animated.div>
    // ))
    return (
        <section
            sx={{
                width: '100%',
            }}
        >
            <Container sx={{ maxWidth: ['90%', '90%', '70%'] }}>
                <Flex
                    sx={{
                        alignItems: 'center',
                        height: '100vh',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <motion.button
                        key='previous'
                        onClick={() => paginate(node - 1)}
                        // className='carousel-btn'
                        sx={{
                            border: 0,
                            bg: 'transparent',
                            '&:focus': {
                                outline: 'none',
                            },
                        }}
                        whileHover={{
                            scale: 1.5,
                            transition: { duration: 0.5 },
                        }}
                    >
                        <LeftArrow color='black' width={36} height={36} />
                    </motion.button>
                    <AnimatePresence exitBeforeEnter>
                        <motion.div>{testimonials[node]}</motion.div>
                    </AnimatePresence>
                    <motion.button
                        key='next'
                        onClick={() => paginate(node + 1)}
                        // className='carousel-btn'
                        sx={{
                            border: 0,
                            bg: 'transparent',
                            '&:focus': {
                                outline: 'none',
                            },
                        }}
                        whileHover={{
                            scale: 1.5,
                            transition: { duration: 0.5 },
                        }}
                    >
                        <RightArrow color='black' width={36} height={36} />
                    </motion.button>
                </Flex>
            </Container>
        </section>
    )
}

export default TestimonialsBlock
