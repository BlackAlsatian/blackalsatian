/** @jsxImportSource theme-ui */
import { Container, Heading, Box } from 'theme-ui'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const NotFoundPage = ({ location }) => {
    const brokenPathName = location.href
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
                        Not Found: {brokenPathName}
                        <br />
                        This is not the route you were looking for.
                        <br />
                        <Link to='/' sx={{ color: 'black' }}>
                            Let's go home
                        </Link>
                    </Box>
                </Container>
            </section>
        </>
    )
}

export default NotFoundPage
