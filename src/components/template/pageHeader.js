/** @jsxImportSource theme-ui */
import { Container, Heading } from 'theme-ui'

const PageHeader = ({ title, intro, headerStyle }) => {
    return (
        <section
            sx={{
                py: 0,
                // pt: ['35vh', '35vh', '40vh'],
                position: 'relative',
                variant: 'sections.pageHeaders.' + headerStyle,
            }}
        >
            <Container
                p={4}
                sx={{ position: 'absolute', pt: ['45vh', '45vh', '55vh'], minHeight: '100vh', mx: 'auto' }}
            >
                <Heading
                    as='h1'
                    sx={{
                        fontSize: [6, 7, 7, 10],
                        letterSpacing: 'tighter',
                        lineHeight: 'none',
                        textShadow: '0 0 4rem rgba(0, 0, 0, 0.1)',
                        // opacity: 0,
                        animation: 'fadeBlockIn 400ms ease-in both',
                        animationDelay: '300ms',
                    }}
                >
                    {title}
                </Heading>
                {intro && (
                    <div
                        sx={{
                            fontSize: [3, 4],
                            my: 1,
                            textShadow: '0 0 3rem rgba(0, 0, 0, 0.3)',
                            animation: 'fadeBlockIn 400ms ease-in both',
                            animationDelay: '500ms',
                        }}
                    >
                        {intro}
                    </div>
                )}
            </Container>
        </section>
    )
}

export default PageHeader
