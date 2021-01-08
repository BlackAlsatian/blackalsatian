/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import React from 'react'
import SEO from '../components/seo'

const NotFoundPage = () => {
    return (
        <>
            <SEO title='404: Not Found' />
            <section
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'black',
                    backgroundColor: 'white',
                    minHeight: '100vh',
                    pt: '25vh',
                }}
            >
                <Container p={4}>
                    <Heading
                        as='h1'
                        sx={{
                            fontSize: 10,
                            letterSpacing: 'tighter',
                            textShadow: '0 0 4rem rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        404
                    </Heading>
                    <div sx={{ fontSize: [3, 4], my: 1, textShadow: '0 0 3rem rgba(0, 0, 0, 0.3)' }}>
                        Not Found:
                        <br />
                        This is not the route you were looking for.
                        <br />
                        <span sx={{ fontSize: '1rem', lineHeight: '0.75rem' }}>
                            Maybe try out one of the links below, or send us a message and tell us what's amiss.
                        </span>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default NotFoundPage
