/** @jsxImportSource theme-ui */
import { Container, Heading, Box } from 'theme-ui'
import { useLayoutEffect, useContext } from 'react'
import { PageStyleContext } from '../components/pageStyleProvider'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const NotFoundPage = ({ location }) => {
    const brokenPathName = location.href

    const { setPageStyle } = useContext(PageStyleContext)

    const pageStyle = 'white'

    useLayoutEffect(() => {
        setPageStyle(pageStyle)
    }, [pageStyle])
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
                    <Box sx={{ fontSize: [3, 4], my: 1, textShadow: '0 0 3rem rgba(0, 0, 0, 0.3)' }}>
                        <p>Awks. This is not the route you were looking for.</p>
                        <p sx={{ fontSize: '0.9rem' }}>{brokenPathName} doesn't exist.</p>
                        <p sx={{ fontSize: '1.1rem' }}>
                            Seeing as we're here, why not check out our website, {` `}
                            <Link to='/' sx={{ color: 'black' }}>
                                check out our cool site.
                            </Link>
                        </p>
                    </Box>
                </Container>
            </section>
        </>
    )
}

export default NotFoundPage
